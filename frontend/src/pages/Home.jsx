import HeroBanner from '../components/HeroBanner.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieTabs from '../components/MovieTabs.jsx'
import PlaceholderCard from '../components/PlaceholderCard.jsx'
import { movies } from '../data/dummyData.js'

function Home() {
  return (
    <>
      <HeroBanner />

      <PlaceholderCard title="Home">
        <MovieTabs />
        <p>Horizontal MovieCard list placeholder.</p>

        {/* The movie list scrolls sideways on small screens. */}
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </PlaceholderCard>
    </>
  )
}

export default Home
