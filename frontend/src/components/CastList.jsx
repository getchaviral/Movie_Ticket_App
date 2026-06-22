function CastList({ cast }) {
  return (
    <section>
      <h2 className="text-[16px] font-bold text-[#4A4A4A]">Cast</h2>

      <div className="mt-[14px] flex gap-[24px] overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cast.map((person) => (
          <article className="flex w-[112px] shrink-0 items-center gap-[9px]" key={person.id}>
            <img className="h-[50px] w-[50px] rounded-full object-cover" src={person.image} alt={person.name} />
            <div>
              <h3 className="text-[13px] font-semibold leading-[16px] text-black">{person.name}</h3>
              <p className="mt-[2px] text-[12px] leading-[15px] text-[#687690]">{person.character}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CastList
