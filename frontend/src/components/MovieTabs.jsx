function MovieTabs() {
  return (
    <div className="flex items-center justify-between px-6 pt-6 text-[11px] font-semibold">
      {/* Static tabs for now. State can be added later if filtering is needed. */}
      <div className="flex gap-6">
        <button className="border-b-2 border-[#5144E8] pb-[5px] text-[#5144E8]" type="button">
          Now Showing
        </button>
        <button className="pb-[7px] text-[#687690]" type="button">
          Coming Soon
        </button>
      </div>
      <button className="text-[#5144E8]" type="button">
        View All
      </button>
    </div>
  )
}

export default MovieTabs
