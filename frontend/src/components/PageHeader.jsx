import { Link } from 'react-router-dom'

function PageHeader({ title, backTo }) {
  return (
    <header className="flex items-center gap-4 px-6 py-5">
      {backTo && (
        <Link className="text-sm font-semibold text-[#5144E8]" to={backTo}>
          Back
        </Link>
      )}
      <h1 className="text-lg font-bold text-black">{title}</h1>
    </header>
  )
}

export default PageHeader
