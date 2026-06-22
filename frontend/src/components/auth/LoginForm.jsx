import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from './AuthButton.jsx'
import InputField from './InputField.jsx'
import { loginUser } from '../../api/auth.js'

function LoginForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function validateLogin() {
    const nextErrors = {}

    // Keep validation simple: each required field gets one message if empty.
    if (form.email.trim() === '') {
      nextErrors.email = 'Email is required'
    }

    if (form.password.trim() === '') {
      nextErrors.password = 'Password is required'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleLogin() {
    if (!validateLogin()) {
      return
    }

    try {
      await loginUser(form)
      navigate('/home')
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <div className="mt-[49px] flex flex-col gap-[27px]">
      <InputField
        error={errors.email}
        name="email"
        onChange={handleChange}
        placeholder="Email ID"
        value={form.email}
      />
      <InputField
        error={errors.password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={form.password}
      />

      {serverError && (
        <p className="mt-3 text-sm text-red-600">{serverError}</p>
      )}

      <div className="mt-[100px]">
        <AuthButton onClick={handleLogin}>Login</AuthButton>
      </div>
    </div>
  )
}

export default LoginForm
