function PaymentMethodSelector({ selectedMethod, onSelectMethod }) {
  const methods = ['Credit/Debit Card', 'Mobile Wallet']

  return (
    <section className="mt-[29px]">
      <h2 className="text-[16px] font-bold text-black">Choose payment method</h2>

      <div className="mt-[18px] flex gap-[30px]">
        {methods.map((method) => (
          <label className="flex items-center gap-[11px] text-[14px] text-black" key={method}>
            <input
              checked={selectedMethod === method}
              className="h-[21px] w-[21px] accent-[#5144E8]"
              name="paymentMethod"
              onChange={() => onSelectMethod(method)}
              type="radio"
            />
            {method}
          </label>
        ))}
      </div>
    </section>
  )
}

export default PaymentMethodSelector
