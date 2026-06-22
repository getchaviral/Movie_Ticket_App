import { Link } from 'react-router-dom'

function CheckoutHeader({ backTo = '/home', showProgress = true, progress = '100%' }) {
  return (
    <header className="px-[26px] pt-[28px]">
      <div className="flex items-center justify-between text-[14px]">
        <Link className="flex items-center gap-2 text-black no-underline" to={backTo}>
          <span className="text-[25px] leading-none">&lt;</span>
          Back
        </Link>

        <Link className="text-[#687690] no-underline" to="/home">
          Cancel
        </Link>
      </div>

      {showProgress && (
        <div className="mt-[18px] h-[7px] rounded-full bg-[#E6E6E6]">
          <div className="h-full rounded-full bg-[#5144E8]" style={{ width: progress }} />
        </div>
      )}
    </header>
  )
}

export default CheckoutHeader
