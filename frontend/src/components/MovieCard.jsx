import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <Link
      className="w-[102px] shrink-0 text-left text-black no-underline"
      to={`/movies/${movie.id}`}
    >
      {/* Clicking a card opens the MovieDetails route. */}
      <div className="relative h-[151px] overflow-hidden rounded bg-[#EBEBEB]">
        <img className="h-full w-full object-cover" src={movie.poster} alt={movie.title} />
        <p className="absolute bottom-0 right-0 rounded-tl bg-[#090326] px-2 py-1 text-[11px] font-bold text-white">
          * {movie.rating}
        </p>
      </div>

      <h3 className="mt-2 text-[14px] font-bold leading-[18px]">{movie.title}</h3>
      <p className="mt-1 text-[12px] leading-[16px] text-[#4A4A4A]">{movie.genre}</p>
    </Link>
  )
}

export default MovieCard
