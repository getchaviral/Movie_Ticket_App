function TheatreCard({ theatre, isSelected = false, onSelect }) {
  return (
    <button
      className={`flex w-full gap-3 rounded-[8px] p-2 text-left transition ${
        isSelected ? 'bg-[#ECEAFF] ring-2 ring-[#5144E8]' : 'bg-transparent'
      }`}
      onClick={onSelect}
      type="button"
    >
      <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded bg-[#F1F0EF] text-center text-[10px] font-black text-[#222]">
        {theatre.logo}
      </div>

      <div className="pt-1">
        <h3 className="text-[14px] font-bold leading-[18px] text-black">{theatre.name}</h3>
        <p className="mt-1 text-[12px] leading-[16px] text-[#75829A]">Pin {theatre.address}</p>
        <p className="mt-2 text-[14px] font-bold leading-none text-[#687690]">{theatre.price}</p>
      </div>
    </button>
  )
}

export default TheatreCard
