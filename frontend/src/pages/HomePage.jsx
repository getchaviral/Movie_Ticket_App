import HeroBanner from '../components/HeroBanner.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieTabs from '../components/MovieTabs.jsx'
import TheatreCard from '../components/TheatreCard.jsx'
import { movies, theatres } from '../data/dummyData.js'

function HomePage() {
  const heroMovie = movies[0]

  return (
    <section className="min-h-screen bg-[#F7F7FF] pb-4">
      <HeroBanner movie={heroMovie} />
      <MovieTabs />

      {/* Movie cards are wider than the screen, so this row scrolls horizontally. */}
      <div className="mt-5 flex gap-[9px] overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
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
            <TheatreCard key={theatre.id} theatre={theatre} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default HomePage
