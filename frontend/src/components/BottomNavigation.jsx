import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', icon: 'home', to: '/home' },
  { label: 'Tickets', icon: 'ticket', to: '/my-bookings' },
  { label: 'Favorites', icon: 'heart', to: '/my-bookings' },
  { label: 'Profile', icon: 'user', to: '/my-bookings' },
]

function NavIcon({ name }) {
  if (name === 'home') {
    return (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    )
  }

  if (name === 'ticket') {
    return (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4V7Z" />
        <path d="M9 8v8" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2 4 4 0 0 1 7 0 4 4 0 0 1 2 2Z" />
      </svg>
    )
  }

  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  )
}

function BottomNavigation() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-1/2 grid h-[69px] w-full max-w-[390px] -translate-x-1/2 grid-cols-4 bg-white px-7 text-xs shadow-[0_-8px_20px_rgba(0,0,0,0.04)]">
      {navItems.map((item) => (
        <Link
          className={`flex items-center justify-center text-[26px] font-semibold no-underline ${
            location.pathname === item.to ? 'text-[#5144E8]' : 'text-[#93A0B5]'
          }`}
          key={item.label}
          to={item.to}
          aria-label={item.label}
        >
          <NavIcon name={item.icon} />
        </Link>
      ))}
    </nav>
  )
}

export default BottomNavigation
