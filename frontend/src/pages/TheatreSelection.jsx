import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DateSelector from '../components/DateSelector.jsx'
import Header from '../components/Header.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import TheatreCard from '../components/TheatreCard.jsx'
import { movies, theatres } from '../data/dummyData.js'

const dates = [
  { id: 'fri-10', day: 'Fri', date: '10' },
  { id: 'sat-11', day: 'Sat', date: '11' },
  { id: 'sun-12', day: 'Sun', date: '12' },
  { id: 'mon-13', day: 'Mon', date: '13' },
  { id: 'tue-14', day: 'Tue', date: '14' },
  { id: 'wed-15', day: 'Wed', date: '15' },
  { id: 'thu-16', day: 'Thu', date: '16' },
]

function TheatreSelection() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((item) => item.id === movieId) || movies[0]

  // Local state is enough here because this page only needs temporary selection.
  const [selectedDate, setSelectedDate] = useState(dates[0].id)
  const [selectedTheatreId, setSelectedTheatreId] = useState(theatres[0].id)

  function handleGetTickets() {
    navigate(`/movies/${movie.id}/schedule`)
  }

  return (
    <section className="min-h-screen bg-[#F7F7FF] pb-[96px]">
      <Header movie={movie} backTo={`/movies/${movie.id}`} />

      {/* Progress bar shows this is step one in the booking flow. */}
      <div className="px-[26px] pt-[18px]">
        <div className="h-[7px] rounded-full bg-[#E6E6E6]">
          <div className="h-full w-[18%] rounded-full bg-[#5144E8]" />
        </div>
      </div>

      <section className="px-[26px] pt-[17px]">
        <h2 className="text-[19px] font-bold leading-[24px] text-black">Select Movie Theatre</h2>

        <div className="mt-[18px]">
          <DateSelector dates={dates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        </div>

        <div className="mt-[25px] border-t border-[#D6DCE8] pt-[20px]">
          {/* We map dummy theatre data into reusable cards. */}
          <div className="flex flex-col gap-[8px]">
            {theatres.map((theatre) => (
              <TheatreCard
                isSelected={selectedTheatreId === theatre.id}
                key={theatre.id}
                onSelect={() => setSelectedTheatreId(theatre.id)}
                theatre={theatre}
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

export default TheatreSelection
