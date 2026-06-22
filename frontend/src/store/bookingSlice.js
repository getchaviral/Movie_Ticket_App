import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMovie: null,
  selectedTheatre: null,
  selectedDate: null,
  selectedFormat: null,
  selectedTime: null,
  selectedSchedule: null,
  selectedSeats: [],
  totalPrice: 0,
  confirmedBookings: [],
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Each reducer updates one simple piece of booking state.
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload
    },
    setSelectedTheatre(state, action) {
      state.selectedTheatre = action.payload
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload
    },
    setSelectedFormat(state, action) {
      state.selectedFormat = action.payload
    },
    setSelectedTime(state, action) {
      state.selectedTime = action.payload
    },
    setSelectedSchedule(state, action) {
      state.selectedSchedule = action.payload
      state.selectedDate = action.payload?.date || null
      state.selectedFormat = action.payload?.format || null
      state.selectedTime = action.payload?.time || null
    },
    setSelectedSeats(state, action) {
      state.selectedSeats = action.payload
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload
    },
    addConfirmedBooking(state, action) {
      state.confirmedBookings.unshift(action.payload)
    },
    cancelConfirmedBooking(state, action) {
      state.confirmedBookings = state.confirmedBookings.map((booking) => {
        if (booking.bookingId === action.payload) {
          return { ...booking, status: 'cancelled' }
        }

        return booking
      })
    },
    clearBooking() {
      return {
        ...initialState,
        confirmedBookings: state.confirmedBookings,
      }
    },
  },
})

export const {
  setSelectedMovie,
  setSelectedTheatre,
  setSelectedDate,
  setSelectedFormat,
  setSelectedTime,
  setSelectedSchedule,
  setSelectedSeats,
  setTotalPrice,
  addConfirmedBooking,
  cancelConfirmedBooking,
  clearBooking,
} = bookingSlice.actions

export default bookingSlice.reducer
