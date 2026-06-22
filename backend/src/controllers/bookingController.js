import mongoose from 'mongoose'
import Booking from '../models/Booking.js'
import Show from '../models/Show.js'

function validateBookingInput(body) {
  const { movie, theatre, date, time, screen, format, seats, totalAmount } = body

  if (!movie || !theatre || !date || !time || !screen || !format || !seats || !totalAmount) {
    return 'All booking fields are required'
  }

  if (!Array.isArray(seats) || seats.length === 0) {
    return 'At least one seat must be selected'
  }

  return null
}

export async function createBooking(req, res) {
  const validationError = validateBookingInput(req.body)

  if (validationError) {
    return res.status(400).json({ message: validationError })
  }

  const session = await mongoose.startSession()

  try {
    let createdBooking

    await session.withTransaction(async () => {
      const { movie, theatre, date, time, screen, format, seats, totalAmount } = req.body

      // Step 1: Find the show document for this exact showtime.
      // If it does not exist yet, create it inside the same transaction.
      let show = await Show.findOne({ movie, theatre, date, time, screen, format }).session(session)

      if (!show) {
        const shows = await Show.create(
          [
            {
              movie,
              theatre,
              date,
              time,
              screen,
              format,
              occupiedSeats: [],
            },
          ],
          { session },
        )

        show = shows[0]
      }

      // Step 2: Check if any requested seat is already occupied.
      // Throwing an error inside withTransaction automatically rolls back changes.
      const alreadyBookedSeats = seats.filter((seat) => show.occupiedSeats.includes(seat))

      if (alreadyBookedSeats.length > 0) {
        const error = new Error(`Seats already booked: ${alreadyBookedSeats.join(', ')}`)
        error.statusCode = 409
        throw error
      }

      // Step 3: Mark selected seats as occupied on the show.
      show.occupiedSeats.push(...seats)
      await show.save({ session })

      // Step 4: Create the booking record.
      const bookings = await Booking.create(
        [
          {
            user: req.userId,
            movie,
            theatre,
            show: show._id,
            date,
            time,
            screen,
            format,
            seats,
            totalAmount,
          },
        ],
        { session },
      )

      createdBooking = bookings[0]
    })

    res.status(201).json(createdBooking)
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : 'Failed to create booking',
      error: error.message,
    })
  } finally {
    await session.endSession()
  }
}

export async function getBookings(req, res) {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate('movie')
      .populate('theatre')
      .populate('show')
      .sort({ createdAt: -1 })

    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message })
  }
}

export async function cancelBooking(req, res) {
  const session = await mongoose.startSession()

  try {
    let cancelledBooking

    await session.withTransaction(async () => {
      const booking = await Booking.findOne({
        _id: req.params.id,
        user: req.userId,
        status: 'active',
      }).session(session)

      if (!booking) {
        const error = new Error('Booking not found')
        error.statusCode = 404
        throw error
      }

      // Cancelling releases the seats back to the show.
      await Show.updateOne(
        { _id: booking.show },
        { $pull: { occupiedSeats: { $in: booking.seats } } },
        { session },
      )

      booking.status = 'cancelled'
      cancelledBooking = await booking.save({ session })
    })

    res.json({ message: 'Booking cancelled', booking: cancelledBooking })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : 'Failed to cancel booking',
      error: error.message,
    })
  } finally {
    await session.endSession()
  }
}
