import { Link } from 'react-router-dom'

function Header({ movie, backTo, subtitle }) {
  const headerText = subtitle || movie.genre

  return (
    <header className="relative h-[168px] overflow-hidden bg-[#101426]">
      {/* Banner image sits behind the header content. */}
      <img className="h-full w-full object-cover" src={movie.banner} alt={movie.title} />
      <div className="absolute inset-0 bg-[#101426]/60" />

      <div className="absolute inset-0 px-[26px] py-[26px] text-white">
        <div className="flex items-center justify-between text-[14px] font-semibold">
          <Link className="flex items-center gap-2 text-white no-underline" to={backTo}>
            <span className="text-[25px] leading-none">&lt;</span>
            Back
          </Link>

          <Link className="text-white no-underline" to="/home">
            Cancel
          </Link>
        </div>

        <div className="mt-[42px]">
          <h1 className="text-[21px] font-bold leading-[25px]">{movie.title}</h1>
          <p className="mt-[7px] text-[14px] leading-none">{headerText}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
