function PlaceholderCard({ title, children }) {
  return (
    <section className="mx-6 rounded bg-white p-5 shadow-sm">
      <h2 className="text-base font-bold text-[#343434]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-[#687690]">{children}</div>
    </section>
  )
}

export default PlaceholderCard
