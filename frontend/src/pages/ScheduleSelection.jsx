import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormatSelector from '../components/FormatSelector.jsx'
import Header from '../components/Header.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import ScreenSchedule from '../components/ScreenSchedule.jsx'
import { movies, theatres } from '../data/dummyData.js'

const schedules = [
  {
    id: 'screen-1',
    name: 'Screen 1',
    slots: [
      { time: '10:00 AM' },
      { time: '12:00 PM' },
      { time: '2:00 PM', disabled: true },
      { time: '4:00 PM' },
      { time: '6:00 PM' },
      { time: '8:00 PM', disabled: true },
    ],
  },
  {
    id: 'screen-2',
    name: 'Screen 2',
    slots: [
      { time: '10:00 AM' },
      { time: '12:00 PM' },
      { time: '2:00 PM', disabled: true },
      { time: '4:00 PM' },
      { time: '6:00 PM' },
      { time: '8:00 PM', disabled: true },
    ],
  },
]

function ScheduleSelection() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((item) => item.id === movieId) || movies[0]
  const theatre = theatres[0]
  const selectedDateText = 'Friday, October 10'

  // These three values are local because this page owns the current schedule choice.
  const [selectedFormat, setSelectedFormat] = useState('2D')
  const [selectedScreen, setSelectedScreen] = useState('screen-1')
  const [selectedTime, setSelectedTime] = useState('10:00 AM')

  function handleSelectTime(screenId, time) {
    // Selecting a time also remembers which screen that time belongs to.
    setSelectedScreen(screenId)
    setSelectedTime(time)
  }

  function handleGetTickets() {
    navigate(`/movies/${movie.id}/seats`)
  }

  return (
    <section className="min-h-screen bg-[#F7F7FF] pb-[96px]">
      <Header
        backTo={`/movies/${movie.id}/theatres`}
        movie={movie}
        subtitle={`${theatre.name}    ${selectedDateText}`}
      />

      {/* Progress bar shows this is the second step in the booking flow. */}
      <div className="px-[26px] pt-[18px]">
        <div className="h-[7px] rounded-full bg-[#E6E6E6]">
          <div className="h-full w-[40%] rounded-full bg-[#5144E8]" />
        </div>
      </div>

      <section className="px-[26px] pt-[17px]">
        <h2 className="text-[19px] font-bold leading-[24px] text-black">Choose Schedule</h2>

        <div className="mt-[20px] flex items-center justify-between">
          <FormatSelector selectedFormat={selectedFormat} onSelectFormat={setSelectedFormat} />
          <p className="text-[14px] font-bold text-[#687690]">₹300 - ₹430</p>
        </div>

        <div className="mt-[20px] border-t border-[#D6DCE8] pt-[20px]">
          <div className="flex flex-col gap-[25px]">
            {schedules.map((screen) => (
              <ScreenSchedule
                key={screen.id}
                onSelectTime={handleSelectTime}
                screen={screen}
                selectedScreen={selectedScreen}
                selectedTime={selectedTime}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-[84px] left-1/2 w-full max-w-[390px] -translate-x-1/2 px-[26px]">
        <PrimaryButton onClick={handleGetTickets}>Get Tickets</PrimaryButton>
      </div>
    </section>
  )
}

export default ScheduleSelection
