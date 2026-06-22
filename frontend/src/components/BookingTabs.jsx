function BookingTabs({ activeTab, onChangeTab }) {
  return (
    <div className="flex gap-[25px] text-[12px] font-bold">
      <button
        className={`border-b-2 pb-[7px] ${activeTab === 'active' ? 'border-[#5144E8] text-[#5144E8]' : 'border-transparent text-[#687690]'}`}
        onClick={() => onChangeTab('active')}
        type="button"
      >
        My Bookings
      </button>

      <button
        className={`border-b-2 pb-[7px] ${activeTab === 'past' ? 'border-[#5144E8] text-[#5144E8]' : 'border-transparent text-[#687690]'}`}
        onClick={() => onChangeTab('past')}
        type="button"
      >
        Past Bookings
      </button>
    </div>
  )
}

export default BookingTabs
