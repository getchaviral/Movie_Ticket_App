import TimeSlot from './TimeSlot.jsx'

function ScreenSchedule({ screen, selectedScreen, selectedTime, onSelectTime }) {
  return (
    <section>
      <h3 className="mb-[12px] text-[14px] font-bold text-black">{screen.name}</h3>

      <div className="grid grid-cols-3 gap-[11px]">
        {screen.slots.map((slot) => {
          const isSelected = selectedScreen === screen.id && selectedTime === slot.time

          return (
            <TimeSlot
              disabled={slot.disabled}
              isSelected={isSelected}
              key={slot.time}
              onSelect={() => onSelectTime(screen.id, slot.time)}
              time={slot.time}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ScreenSchedule
