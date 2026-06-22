function PrimaryButton({ children, onClick }) {
  return (
    <button
      className="h-[35px] w-full rounded-[4px] bg-[#5144E8] text-[13px] font-bold text-white"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default PrimaryButton
