import { Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Checkout from './pages/Checkout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import MyBookings from './pages/MyBookings.jsx'
import ScheduleSelection from './pages/ScheduleSelection.jsx'
import SeatSelection from './pages/SeatSelection.jsx'
import Success from './pages/Success.jsx'
import TheatreSelection from './pages/TheatreSelection.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage startTab="login" />} />
      <Route path="/login" element={<AuthPage startTab="login" />} />
      <Route path="/signup" element={<AuthPage startTab="signup" />} />

      {/* AppShell keeps the 390px mobile frame consistent across app pages. */}
      <Route element={<AppShell />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/theatres" element={<TheatreSelection />} />
        <Route path="/movies/:movieId/theatres" element={<TheatreSelection />} />
        <Route path="/movies/:movieId/schedule" element={<ScheduleSelection />} />
        <Route path="/movies/:movieId/seats" element={<SeatSelection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Route>
    </Routes>
  )
}

export default App
