import { useState } from 'react'
import AuthButton from './AuthButton.jsx'
import InputField from './InputField.jsx'

function SignupForm({ onSignupSuccess }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function validateSignup() {
    const nextErrors = {}

    if (form.name.trim() === '') {
      nextErrors.name = 'Name is required'
    }

    if (form.email.trim() === '') {
      nextErrors.email = 'Email is required'
    }

    if (form.password.trim() === '') {
      nextErrors.password = 'Password is required'
    }

    if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'Passwords must match'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSignup() {
    if (validateSignup()) {
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      onSignupSuccess()
    }
  }

  return (
    <div className="mt-[49px] flex flex-col gap-[27px]">
      <InputField
        error={errors.name}
        name="name"
        onChange={handleChange}
        placeholder="Name"
        value={form.name}
      />
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
      <InputField
        error={errors.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        placeholder="Confirm Password"
        type="password"
        value={form.confirmPassword}
      />

      <div className="mt-[17px]">
        <AuthButton onClick={handleSignup}>Sign Up</AuthButton>
      </div>
    </div>
  )
}

export default SignupForm
