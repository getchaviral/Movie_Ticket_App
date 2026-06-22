import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'

function Login() {
  return (
    <AuthLayout
      title="Creative Upaay"
      subtitle="Login placeholder"
      linkText="Create a new account"
      linkTo="/signup"
    >
      {/* Form fields are placeholders for now. */}
      <div className="space-y-4">
        <input className="w-full border-b border-[#C8C8C8] bg-transparent py-2 text-sm" placeholder="Email ID" />
        <input className="w-full border-b border-[#C8C8C8] bg-transparent py-2 text-sm" placeholder="Password" />
        <Link className="block rounded bg-[#5144E8] py-3 text-center text-sm font-bold text-white" to="/home">
          Login
        </Link>
      </div>
    </AuthLayout>
  )
}

export default Login
