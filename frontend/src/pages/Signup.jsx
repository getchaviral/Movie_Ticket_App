import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'

function Signup() {
  return (
    <AuthLayout
      title="Creative Upaay"
      subtitle="Signup placeholder"
      linkText="Already have an account?"
      linkTo="/login"
    >
      <div className="space-y-4">
        <input className="w-full border-b border-[#C8C8C8] bg-transparent py-2 text-sm" placeholder="Name" />
        <input className="w-full border-b border-[#C8C8C8] bg-transparent py-2 text-sm" placeholder="Email ID" />
        <input className="w-full border-b border-[#C8C8C8] bg-transparent py-2 text-sm" placeholder="Password" />
        <Link className="block rounded bg-[#5144E8] py-3 text-center text-sm font-bold text-white" to="/home">
          Sign Up
        </Link>
      </div>
    </AuthLayout>
  )
}

export default Signup
