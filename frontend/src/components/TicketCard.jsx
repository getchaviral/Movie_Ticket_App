import QRCodeSection from './QRCodeSection.jsx'

function TicketCard({ booking, showQr = true, showTransaction = true }) {
  return (
    <article className="overflow-hidden rounded-[4px] border border-[#D6DCE8] bg-white">
      <img className="h-[164px] w-full object-cover" src={booking.movie.banner} alt={booking.movie.title} />

      <div className="p-[21px]">
        <h2 className="text-[18px] font-bold text-black">{booking.movie.title}</h2>

        <div className="mt-[22px] grid grid-cols-2 gap-y-[14px] text-[14px]">
          <p className="font-semibold text-black">{booking.theatre.name}</p>
          <p className="font-semibold text-black">
            {booking.schedule.screen} - {booking.schedule.format}
          </p>
          <p className="font-semibold text-[#687690]">{booking.schedule.date}</p>
          <p className="font-semibold text-[#687690]">{booking.schedule.time}</p>
        </div>

        <div className="mt-[22px] grid grid-cols-2 gap-[18px]">
          <div>
            <p className="text-[14px] font-bold text-black">Seats:</p>
            <div className="mt-[10px] flex flex-wrap gap-[6px]">
              {booking.seats.map((seat) => (
                <span className="rounded-[5px] bg-[#687690] px-[8px] py-[3px] text-[14px] font-bold text-white" key={seat}>
                  {seat}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[14px] font-bold text-black">Amount Paid:</p>
            <p className="text-[14px] font-semibold text-[#687690]">₹{booking.amountPaid}</p>
          </div>
        </div>

        {showQr && (
          <div className="mt-[16px] grid grid-cols-2 items-end gap-[20px]">
            {showTransaction && (
              <div className="text-[14px] leading-[16px] text-[#687690]">
                <p>Transaction Date:</p>
                <p>{booking.transactionDate}</p>
              </div>
            )}
            <QRCodeSection value={booking.bookingId} />
          </div>
        )}
      </div>
    </article>
  )
}

export default TicketCard
