import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CastList from '../components/CastList.jsx'
import FormatSelector from '../components/FormatSelector.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import MovieInfo from '../components/MovieInfo.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import { movies } from '../data/dummyData.js'

function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const selectedMovie = movies.find((item) => item.id === movieId) || movies[0]
  const movie = {
    ageRating: 'PG-13',
    starRating: '5.1',
    description:
      'A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation.',
    releaseDate: '10 June 2026',
    formats: ['2D', '3D'],
    cast: movies[0].cast,
    ...selectedMovie,
  }
  const [selectedFormat, setSelectedFormat] = useState(movie.formats[0])

  function handleGetTickets() {
    navigate('/theatres')
  }

  return (
    <section className="min-h-screen bg-[#EBEBEB] pb-[96px]">
      <div className="bg-[#F7F7FF]">
        <HeroBanner movie={movie} type="details" />

        <section className="px-[25px] pt-[19px]">
          <MovieInfo movie={movie} />

          <section className="mt-[20px]">
            <h2 className="text-[16px] font-bold text-[#4A4A4A]">Format Available</h2>
            <div className="mt-[10px]">
              {/* Only one format can be selected because selectedFormat stores a single value. */}
              <FormatSelector
                formats={movie.formats}
                onSelectFormat={setSelectedFormat}
                selectedFormat={selectedFormat}
                showLabel={false}
              />
            </div>
          </section>

          <section className="mt-[27px]">
            <h2 className="text-[16px] font-bold text-[#4A4A4A]">Release Date</h2>
            <p className="mt-[9px] text-[14px] text-[#687690]">{movie.releaseDate}</p>
          </section>

          <div className="mt-[28px]">
            <CastList cast={movie.cast} />
          </div>
        </section>
      </div>

      <div className="fixed bottom-[84px] left-1/2 w-full max-w-[390px] -translate-x-1/2 px-[25px]">
        <PrimaryButton onClick={handleGetTickets}>Get Tickets</PrimaryButton>
      </div>
    </section>
  )
}

export default MovieDetails
