import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthButton from './AuthButton.jsx'
import InputField from './InputField.jsx'

function LoginForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
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

  function handleLogin() {
    if (validateLogin()) {
      const mockUser = {
        email: form.email,
        name: 'Demo User',
      }

      localStorage.setItem('mockUser', JSON.stringify(mockUser))
      navigate('/home')
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

      <div className="mt-[100px]">
        <AuthButton onClick={handleLogin}>Login</AuthButton>
      </div>
    </div>
  )
}

export default LoginForm
