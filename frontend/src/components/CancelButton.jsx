function CancelButton({ onClick }) {
  return (
    <button
      className="mt-[22px] rounded-[4px] border border-[#CBD3E2] px-[11px] py-[8px] text-[12px] font-bold text-red-500"
      onClick={onClick}
      type="button"
    >
      Cancel Booking
    </button>
  )
}

export default CancelButton
