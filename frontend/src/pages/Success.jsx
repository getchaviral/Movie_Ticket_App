import { Link } from 'react-router-dom'
import SuccessMessage from '../components/SuccessMessage.jsx'
import TicketCard from '../components/TicketCard.jsx'
import { dummyBooking } from '../data/dummyData.js'

function Success() {
  return (
    <section className="min-h-screen bg-[#F7F7FF] px-[34px] pb-[96px] pt-[28px]">
      <div className="flex justify-end">
        <Link className="text-[14px] text-[#687690] no-underline" to="/home">
          Close
        </Link>
      </div>

      <SuccessMessage />

      <div className="mt-[22px]">
        <TicketCard booking={dummyBooking} />
      </div>

      <p className="mt-[22px] text-center text-[14px] leading-[18px] text-[#687690]">
        You may view all purchased tickets in the ticket page.
      </p>
    </section>
  )
}

export default Success
