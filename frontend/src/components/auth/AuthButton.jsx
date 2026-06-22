function AuthButton({ children, onClick }) {
  return (
    <button
      className="h-[29px] w-full rounded-[4px] bg-[#5144E8] text-[10px] font-semibold text-white"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default AuthButton
