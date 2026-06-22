function TimeSlot({ time, disabled, isSelected, onSelect }) {
  return (
    <button
      className={`h-[31px] rounded-[5px] border px-[10px] text-[13px] font-semibold ${
        isSelected
          ? 'border-[#5144E8] bg-[#5144E8] text-white'
          : 'border-[#CBD3E2] bg-[#F7F7FF] text-[#5144E8]'
      } ${disabled ? 'cursor-not-allowed bg-[#EEF1F6] text-[#93A0B5]' : ''}`}
      disabled={disabled}
      onClick={onSelect}
      type="button"
    >
      {time}
    </button>
  )
}

export default TimeSlot
