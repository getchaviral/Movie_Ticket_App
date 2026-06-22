function AuthTabs({ activeTab, onChangeTab }) {
  return (
    <div className="grid h-[28px] grid-cols-2 rounded-[3px] bg-[#E6E5E3] text-[12px] text-black">
      <button
        className={`rounded-[3px] ${activeTab === 'login' ? 'bg-white font-bold' : 'bg-transparent font-normal'}`}
        onClick={() => onChangeTab('login')}
        type="button"
      >
        Login
      </button>

      <button
        className={`rounded-[3px] ${activeTab === 'signup' ? 'bg-white font-bold' : 'bg-transparent font-normal'}`}
        onClick={() => onChangeTab('signup')}
        type="button"
      >
        Sign Up
      </button>
    </div>
  )
}

export default AuthTabs
