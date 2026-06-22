import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutHeader from '../components/CheckoutHeader.jsx'
import PaymentForm from '../components/PaymentForm.jsx'
import PaymentMethodSelector from '../components/PaymentMethodSelector.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import SummaryCard from '../components/SummaryCard.jsx'
import { movies } from '../data/dummyData.js'

function Checkout() {
  const navigate = useNavigate()
  const booking = useSelector((state) => state.booking)
  const movie = booking.selectedMovie || movies[0]
  const seats = booking.selectedSeats.length > 0 ? booking.selectedSeats : ['J9', 'J10']
  const ticketPrice = 280
  const bookingFee = 20
  const ticketTotal = seats.length * ticketPrice
  const totalAmount = ticketTotal + bookingFee

  const [paymentMethod, setPaymentMethod] = useState('Credit/Debit Card')
  const [saveDetails, setSaveDetails] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function validateForm() {
    const nextErrors = {}
    const cardDigits = form.cardNumber.replaceAll(' ', '')

    // Each rule adds a message to nextErrors. If nextErrors stays empty, the form is valid.
    if (form.name.trim() === '') {
      nextErrors.name = 'Name is required'
    }

    if (!/^\d{16}$/.test(cardDigits)) {
      nextErrors.cardNumber = 'Card number must be 16 digits'
    }

    if (form.expiry.trim() === '') {
      nextErrors.expiry = 'Expiry date is required'
    }

    if (!/^\d{3}$/.test(form.cvv)) {
      nextErrors.cvv = 'CVV must be 3 digits'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleCompletePayment() {
    if (validateForm()) {
      navigate('/success')
    }
  }

  return (
    <section className="min-h-screen bg-[#F7F7FF] pb-[96px]">
      <CheckoutHeader backTo={`/movies/${movie.id}/seats`} />

      <section className="px-[26px] pt-[22px]">
        <h1 className="text-[19px] font-bold leading-[24px] text-black">Checkout</h1>

        <div className="mt-[28px]">
          <SummaryCard
            bookingFee={bookingFee}
            ticketCount={seats.length}
            ticketTotal={ticketTotal}
            totalAmount={totalAmount}
          />
        </div>

        <PaymentMethodSelector selectedMethod={paymentMethod} onSelectMethod={setPaymentMethod} />

        <PaymentForm
          errors={errors}
          form={form}
          onChange={handleChange}
          onToggleSave={() => setSaveDetails(!saveDetails)}
          saveDetails={saveDetails}
        />
      </section>

      <div className="fixed bottom-[84px] left-1/2 w-full max-w-[390px] -translate-x-1/2 px-[26px]">
        <PrimaryButton onClick={handleCompletePayment}>Complete Payment</PrimaryButton>
      </div>
    </section>
  )
}

export default Checkout
