import { useState } from 'react'
import AuthTabs from '../components/auth/AuthTabs.jsx'
import LoginForm from '../components/auth/LoginForm.jsx'
import SignupForm from '../components/auth/SignupForm.jsx'
import LogoSection from '../components/LogoSection.jsx'

function AuthPage({ startTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(startTab)
  const [successMessage, setSuccessMessage] = useState('')

  function handleTabChange(tabName) {
    setActiveTab(tabName)
    setSuccessMessage('')
  }

  function handleSignupSuccess() {
    setSuccessMessage('Sign up successful. Please login.')
    setActiveTab('login')
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[390px] items-center justify-center bg-[#EBEBEB] px-[24px] py-[24px]">
      <section className="flex min-h-[642px] w-full max-w-[308px] flex-col rounded-[3px] bg-[#F7F7FF] px-[18px] pb-[38px] pt-[69px]">
        <LogoSection />

        <div className="mt-[46px]">
          <AuthTabs activeTab={activeTab} onChangeTab={handleTabChange} />
        </div>

        {successMessage && (
          <p className="mt-4 rounded bg-green-50 px-3 py-2 text-center text-[12px] text-green-700">
            {successMessage}
          </p>
        )}

        {activeTab === 'login' && <LoginForm />}
        {activeTab === 'signup' && <SignupForm onSignupSuccess={handleSignupSuccess} />}

        <section className="mt-auto rounded bg-white/70 px-3 py-3 text-[11px] leading-[17px] text-[#687690]">
          <p className="font-bold text-black">Demo Credentials</p>
          <p>Email: demo@movie.com</p>
          <p>Password: 123456</p>
        </section>
      </section>
    </main>
  )
}

export default AuthPage
