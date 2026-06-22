function FormatSelector({ selectedFormat, onSelectFormat, formats = ['2D', '3D'], showLabel = true }) {

  return (
    <div className="flex items-center gap-[10px]">
      {showLabel && <p className="mr-[6px] text-[14px] font-bold text-black">Format</p>}

      {formats.map((format) => {
        const isSelected = selectedFormat === format

        return (
          <button
            className={`h-[31px] rounded-[5px] border px-[12px] text-[13px] font-bold ${
              isSelected
                ? 'border-[#5144E8] bg-[#5144E8] text-white'
                : 'border-[#CBD3E2] bg-[#F7F7FF] text-[#5144E8]'
            }`}
            key={format}
            onClick={() => onSelectFormat(format)}
            type="button"
          >
            {format}
          </button>
        )
      })}
    </div>
  )
}

export default FormatSelector
