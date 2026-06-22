import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingTabs from '../components/BookingTabs.jsx'
import CancelButton from '../components/CancelButton.jsx'
import TicketCard from '../components/TicketCard.jsx'
import { dummyBooking } from '../data/dummyData.js'

function MyBookings() {
  const [activeTab, setActiveTab] = useState('active')
  const [activeBookings, setActiveBookings] = useState([dummyBooking])
  const [pastBookings, setPastBookings] = useState([])

  function handleCancelBooking(booking) {
    // Cancelling removes the booking from active bookings and adds it to past bookings.
    setActiveBookings(activeBookings.filter((item) => item.bookingId !== booking.bookingId))
    setPastBookings([...pastBookings, { ...booking, status: 'cancelled' }])
    setActiveTab('past')
  }

  const bookingsToShow = activeTab === 'active' ? activeBookings : pastBookings

  return (
    <section className="min-h-screen bg-[#F7F7FF] px-[26px] pb-[96px] pt-[28px]">
      <Link className="flex items-center gap-2 text-[14px] text-black no-underline" to="/home">
        <span className="text-[25px] leading-none">&lt;</span>
        Back
      </Link>

      <div className="mt-[26px]">
        <BookingTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>

      <div className="mt-[22px]">
        {bookingsToShow.length === 0 && (
          <p className="rounded bg-white p-5 text-center text-[14px] text-[#687690]">No bookings found.</p>
        )}

        {bookingsToShow.map((booking) => (
          <div key={booking.bookingId}>
            <TicketCard booking={booking} showTransaction={false} />
            {activeTab === 'active' && <CancelButton onClick={() => handleCancelBooking(booking)} />}
            {activeTab === 'past' && (
              <p className="mt-[14px] text-[13px] font-bold text-red-500">Booking cancelled</p>
            )}
            <div className="mt-[16px] text-[14px] leading-[16px] text-[#687690]">
              <p>Transaction Date:</p>
              <p>{booking.transactionDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyBookings
