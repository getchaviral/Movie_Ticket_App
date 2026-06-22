function MovieInfo({ movie }) {
  return (
    <section>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[16px] font-bold leading-[20px] text-black">{movie.title}</h1>
          <p className="mt-[5px] text-[13px] text-[#687690]">{movie.genre}</p>
        </div>

        <div className="flex items-center gap-[11px] text-[13px] text-black">
          <span className="rounded-[4px] border border-blue-400 px-[7px] py-[3px] text-[11px] text-blue-500">
            {movie.ageRating}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 fill-[#090326]" viewBox="0 0 20 20">
              <path d="m10 1 2.7 5.5 6 .9-4.4 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.4-4.2 6-.9L10 1Z" />
            </svg>
            {movie.starRating}
          </span>
        </div>
      </div>

      <p className="mt-[19px] text-[14px] leading-[20px] text-[#687690]">{movie.description}</p>
    </section>
  )
}

export default MovieInfo
