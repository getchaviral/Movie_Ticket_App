function SummaryCard({ ticketCount, ticketTotal, bookingFee, totalAmount }) {
  return (
    <section>
      <h2 className="text-[16px] font-bold text-black">Summary</h2>

      <div className="mt-[17px] space-y-[8px] text-[14px] text-black">
        <div className="flex justify-between">
          <p>{ticketCount}x Tickets</p>
          <p>₹{ticketTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>₹{bookingFee}</p>
        </div>
      </div>

      <div className="mt-[10px] flex justify-between border-t border-[#D6DCE8] pt-[10px] text-[16px] font-bold text-black">
        <p>Total</p>
        <p>₹{totalAmount}</p>
      </div>
    </section>
  )
}

export default SummaryCard
