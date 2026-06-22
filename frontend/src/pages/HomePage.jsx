import { useEffect, useState } from 'react'
import HeroBanner from '../components/HeroBanner.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieTabs from '../components/MovieTabs.jsx'
import TheatreCard from '../components/TheatreCard.jsx'
import { getMovies, getTheatres } from '../api/content.js'

function HomePage() {
  const [movies, setMovies] = useState([])
  const [theatres, setTheatres] = useState([])
  const heroMovie = movies[0]

  useEffect(() => {
    async function loadContent() {
      try {
        const [moviesData, theatresData] = await Promise.all([getMovies(), getTheatres()])
        setMovies(moviesData)
        setTheatres(theatresData)
      } catch (error) {
        console.error('Unable to load content:', error.message)
      }
    }

    loadContent()
  }, [])

  return (
    <section className="min-h-screen bg-[#F7F7FF] pb-4">
      {heroMovie && <HeroBanner movie={heroMovie} />}
      <MovieTabs />

      {/* Movie cards are wider than the screen, so this row scrolls horizontally. */}
      <div className="mt-5 flex gap-[9px] overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <section className="mt-6 px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#4A4A4A]">Movie Theatres</h2>
          <button className="text-[11px] font-semibold text-[#5144E8]" type="button">
            View All
          </button>
        </div>

        <div className="flex flex-col gap-[9px]">
          {theatres.map((theatre) => (
            <TheatreCard key={theatre._id} theatre={theatre} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default HomePage
