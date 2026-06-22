import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CastList from '../components/CastList.jsx'
import FormatSelector from '../components/FormatSelector.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import MovieInfo from '../components/MovieInfo.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import { getMovieById } from '../api/content.js'

function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [selectedFormat, setSelectedFormat] = useState('2D')

  useEffect(() => {
    async function loadMovie() {
      try {
        const fetchedMovie = await getMovieById(movieId)
        if (fetchedMovie) {
          setMovie(fetchedMovie)
          setSelectedFormat(fetchedMovie.formats?.[0] || '2D')
        }
      } catch (error) {
        console.error('Failed to load movie details:', error.message)
      }
    }

    loadMovie()
  }, [movieId])

  function handleGetTickets() {
    navigate(`/movies/${movieId}/theatres`)
  }

  if (!movie) {
    return <p className="p-6 text-center text-[#687690]">Loading movie details…</p>
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
