import { Outlet } from 'react-router-dom'
import BottomNavigation from './BottomNavigation.jsx'

function AppShell() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[390px] bg-[#F7F7FF] pb-20">
      {/* Outlet renders whichever child page matches the current route. */}
      <Outlet />
      <BottomNavigation />
    </main>
  )
}

export default AppShell
