import { Link } from 'react-router-dom'

function HeroBanner({ movie, type = 'home' }) {
  return (
    <section className={`relative overflow-hidden bg-[#101426] ${type === 'details' ? 'h-[187px]' : 'h-[210px]'}`}>
      {/* The hero uses the first movie image, like the large banner in Figma. */}
      <img className="h-full w-full object-cover" src={movie.banner} alt={movie.title} />
      <div className="absolute inset-0 bg-black/10" />

      {type === 'home' && (
        <button
          className="absolute right-6 top-9 flex h-9 w-9 items-center justify-center rounded-full text-white"
          type="button"
          aria-label="Search movies"
        >
          {/* Simple search icon made with SVG so no icon library is needed. */}
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 5 5" />
          </svg>
        </button>
      )}

      {type === 'details' && (
        <>
          {/* Overlay controls stay on top of the image. */}
          <Link className="absolute left-[30px] top-[24px] text-[13px] font-bold text-white no-underline" to="/home">
            Close
          </Link>

          <button className="absolute right-[27px] top-[21px] text-white" type="button" aria-label="Add to favourites">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2 4 4 0 0 1 7 0 4 4 0 0 1 2 2Z" />
            </svg>
          </button>
        </>
      )}
    </section>
  )
}

export default HeroBanner
