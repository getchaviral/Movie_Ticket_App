import { Link } from 'react-router-dom'

function AuthLayout({ title, subtitle, children, linkText, linkTo }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[390px] items-center bg-[#EBEBEB] px-6 py-8">
      <section className="w-full rounded bg-[#F7F7FF] px-5 py-10">
        <h1 className="text-center text-xl font-bold text-black">{title}</h1>
        <p className="mt-2 text-center text-sm text-[#687690]">{subtitle}</p>

        <div className="mt-8">{children}</div>

        <Link className="mt-6 block text-center text-sm font-semibold text-[#5144E8]" to={linkTo}>
          {linkText}
        </Link>
      </section>
    </main>
  )
}

export default AuthLayout
