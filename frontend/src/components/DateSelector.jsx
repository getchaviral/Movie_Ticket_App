function DateSelector({ dates, selectedDate, onSelectDate }) {
  return (
    <div className="flex gap-[18px] overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {dates.map((date) => {
        const isSelected = selectedDate === date.id

        return (
          <button
            className="shrink-0 text-center"
            key={date.id}
            onClick={() => onSelectDate(date.id)}
            type="button"
          >
            <span className={`block text-[11px] font-semibold ${isSelected ? 'text-[#5144E8]' : 'text-[#687690]'}`}>
              {date.day}
            </span>
            <span
              className={`mt-[5px] flex h-[28px] w-[28px] items-center justify-center rounded-[6px] border text-[14px] font-semibold ${
                isSelected
                  ? 'border-[#5144E8] bg-[#5144E8] text-white'
                  : 'border-[#CBD3E2] bg-[#F7F7FF] text-[#687690]'
              }`}
            >
              {date.date}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default DateSelector
