function PaymentForm({ form, errors, saveDetails, onChange, onToggleSave }) {
  return (
    <section className="mt-[24px]">
      <label className="block text-[14px] text-black">
        Name on card
        <input
          className="mt-[11px] h-[37px] w-full rounded-[4px] border border-[#CBD3E2] bg-white px-[15px] text-[14px]"
          name="name"
          onChange={onChange}
          placeholder="Name on card"
          value={form.name}
        />
      </label>
      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}

      <label className="mt-[17px] block text-[14px] text-black">
        Card number
        <input
          className="mt-[11px] h-[37px] w-full rounded-[4px] border border-[#CBD3E2] bg-white px-[15px] text-[14px]"
          inputMode="numeric"
          name="cardNumber"
          onChange={onChange}
          placeholder="1234 5678 9012 3456"
          value={form.cardNumber}
        />
      </label>
      {errors.cardNumber && <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>}

      <div className="mt-[17px] grid grid-cols-2 gap-[18px]">
        <label className="block text-[14px] text-black">
          Expiry date
          <input
            className="mt-[11px] h-[37px] w-full rounded-[4px] border border-[#CBD3E2] bg-white px-[15px] text-[14px]"
            name="expiry"
            onChange={onChange}
            placeholder="MM/YY"
            value={form.expiry}
          />
        </label>

        <label className="block text-[14px] text-black">
          CVC/CVV
          <input
            className="mt-[11px] h-[37px] w-full rounded-[4px] border border-[#CBD3E2] bg-white px-[15px] text-[14px]"
            inputMode="numeric"
            name="cvv"
            onChange={onChange}
            placeholder="CVC"
            value={form.cvv}
          />
        </label>
      </div>
      {(errors.expiry || errors.cvv) && (
        <div className="mt-1 grid grid-cols-2 gap-[18px] text-xs text-red-500">
          <p>{errors.expiry}</p>
          <p>{errors.cvv}</p>
        </div>
      )}

      <label className="mt-[30px] flex items-center gap-[9px] text-[14px] text-black">
        <input
          checked={saveDetails}
          className="h-[20px] w-[20px] accent-[#5144E8]"
          onChange={onToggleSave}
          type="checkbox"
        />
        Save payment details for the next purchase
      </label>
    </section>
  )
}

export default PaymentForm
