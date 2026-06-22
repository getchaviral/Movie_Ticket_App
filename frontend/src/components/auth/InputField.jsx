function InputField({ error, name, onChange, placeholder, type = 'text', value }) {
  return (
    <label className="block">
      <input
        className="w-full border-b border-[#C8C8C8] bg-transparent pb-[8px] text-[11px] text-black outline-none placeholder:text-[#687690]"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
    </label>
  )
}

export default InputField
