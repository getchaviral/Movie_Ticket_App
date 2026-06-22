import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton.jsx'
import { movies, theatres } from '../data/dummyData.js'
import {
  setSelectedMovie,
  setSelectedSchedule,
  setSelectedSeats,
  setSelectedTheatre,
  setTotalPrice,
} from '../store/bookingSlice.js'

const rows = 'ABCDEFGHIJKLM'.split('')
const columns = Array.from({ length: 12 }, (_, index) => index + 1)
const ticketPrice = 280
const occupiedSeats = ['H7', 'H8', 'H9', 'H10', 'J11', 'J12']

function SeatButton({ seatId, status, onClick }) {
  const styles = {
    available: 'border-[#CBD3E2] bg-[#F7F7FF] text-[#687690]',
    occupied: 'border-[#93A0B5] bg-[#93A0B5] text-white',
    selected: 'border-[#5144E8] bg-[#5144E8] text-white',
  }

  return (
    <button
      className={`h-[22px] w-[22px] rounded-[5px] border text-[11px] leading-none ${styles[status]}`}
      disabled={status === 'occupied'}
      onClick={onClick}
      type="button"
    >
      {seatId.replace(/[A-Z]/, '')}
    </button>
  )
}

function SeatLegend() {
  return (
    <div className="flex items-center justify-center gap-[18px] border-t border-[#D6DCE8] pt-[13px] text-[14px] text-[#687690]">
      <span className="flex items-center gap-2">
        <span className="h-[16px] w-[16px] rounded-[4px] border border-[#93A0B5]" />
        Available
      </span>
      <span className="flex items-center gap-2">
        <span className="h-[16px] w-[16px] rounded-[4px] bg-[#93A0B5]" />
        Occupied
      </span>
      <span className="flex items-center gap-2 text-[#5144E8]">
        <span className="h-[16px] w-[16px] rounded-[4px] bg-[#5144E8]" />
        Selected
      </span>
    </div>
  )
}

function SeatSelection() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const movie = movies.find((item) => item.id === movieId) || movies[0]
  const theatre = theatres[0]
  const [selectedSeats, setSelectedSeatsState] = useState(['J9', 'J10'])
  const totalPrice = selectedSeats.length * ticketPrice

  function handleSeatClick(seatId) {
    const alreadySelected = selectedSeats.includes(seatId)

    // If the seat is already selected, clicking it again removes it.
    if (alreadySelected) {
      setSelectedSeatsState(selectedSeats.filter((seat) => seat !== seatId))
      return
    }

    // The assignment allows a maximum of 6 selected seats.
    if (selectedSeats.length < 6) {
      setSelectedSeatsState([...selectedSeats, seatId])
    }
  }

  function getSeatStatus(seatId) {
    if (occupiedSeats.includes(seatId)) {
      return 'occupied'
    }

    if (selectedSeats.includes(seatId)) {
      return 'selected'
    }

    return 'available'
  }

  function handleViewSummary() {
    // Save the current choices so BookingSummary can display them.
    dispatch(setSelectedMovie(movie))
    dispatch(setSelectedTheatre(theatre))
    dispatch(setSelectedSchedule({ date: 'Friday, October 10', time: '10:00 AM', format: '2D', screen: 'Screen 1' }))
    dispatch(setSelectedSeats(selectedSeats))
    dispatch(setTotalPrice(totalPrice))
    navigate('/checkout')
  }

  return (
    <section className="min-h-screen overflow-hidden bg-[#F7F7FF] pb-[96px]">
      <header className="px-[26px] pt-[28px]">
        <div className="flex items-center justify-between text-[14px]">
          <Link className="flex items-center gap-2 text-black no-underline" to={`/movies/${movie.id}/schedule`}>
            <span className="text-[25px] leading-none">&lt;</span>
            Back
          </Link>
          <Link className="text-[#687690] no-underline" to="/home">
            Cancel
          </Link>
        </div>

        <div className="mt-[18px] h-[7px] rounded-full bg-[#E6E6E6]">
          <div className="h-full w-[60%] rounded-full bg-[#5144E8]" />
        </div>
      </header>

      <section className="px-[26px] pt-[22px]">
        <h1 className="text-[19px] font-bold leading-[24px] text-black">Select Seats</h1>

        <div className="mt-[7px] flex items-center justify-between text-[14px] font-bold">
          <p>
            Screen 1 <span className="ml-4 font-semibold text-[#5144E8]">10:00 AM</span>
          </p>
          <p>₹{totalPrice}</p>
        </div>

        <div className="mt-[34px]">
          <div className="h-[18px] rounded-t-[100%] border-t-[5px] border-[#CBD3E2]" />
          <p className="mt-1 text-center text-[13px] tracking-wide text-[#687690]">SCREEN</p>
        </div>

        <div className="mt-[18px] overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[360px]">
            {rows.map((row) => (
              <div className="mb-[9px] grid grid-cols-[22px_repeat(12,22px)] items-center gap-[6px]" key={row}>
                <p className="text-[14px] text-black">{row}</p>
                {columns.map((column) => {
                  const seatId = `${row}${column}`

                  return (
                    <SeatButton
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      seatId={seatId}
                      status={getSeatStatus(seatId)}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <SeatLegend />
      </section>

      <div className="fixed bottom-[84px] left-1/2 w-full max-w-[390px] -translate-x-1/2 px-[26px]">
        <PrimaryButton onClick={handleViewSummary}>View Booking Summary</PrimaryButton>
      </div>
    </section>
  )
}

export default SeatSelection
