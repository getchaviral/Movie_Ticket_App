function LogoSection() {
  return (
    <section className="text-center">
      <div className="relative mx-auto h-[38px] w-[74px]">
        {/* Simple couch logo recreated with divs so no image asset is needed. */}
        <div className="absolute left-[4px] top-[14px] h-[17px] w-[31px] rounded-t-[5px] bg-[#070326]" />
        <div className="absolute right-[4px] top-[14px] h-[17px] w-[31px] rounded-t-[5px] bg-[#5144E8]" />
        <div className="absolute left-0 top-[24px] h-[13px] w-[9px] rounded-l-[5px] bg-[#070326]" />
        <div className="absolute right-0 top-[24px] h-[13px] w-[9px] rounded-r-[5px] bg-[#5144E8]" />
        <div className="absolute left-[4px] right-[4px] top-[28px] h-[7px] rounded bg-[#5144E8]" />
        <div className="absolute left-[4px] top-[28px] h-[7px] w-[31px] rounded bg-[#070326]" />
      </div>

      <h1 className="mt-[31px] text-[16px] font-bold leading-[18px] text-black">
        Creative Upaay
        <br />
        Hiring Assignment
      </h1>
    </section>
  )
}

export default LogoSection
