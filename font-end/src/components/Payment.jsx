import { useState } from 'react'

function Payment() {
  const [formData, setFormData] = useState({
    nameOnCard: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cvv: '123',
    month: 'MM',
    year: 'YYYY',
    comments: '',
    sameAsShipping: true
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Payment submitted:', { ...formData })
  }

  const handleCancel = () => {
    console.log('Payment cancelled')
  }

  return (
    <div className="bg-slate-800 text-white p-8 rounded-xl max-w-md mx-auto shadow-2xl">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Payment Method</h2>
          <p className="text-gray-400 text-sm">All transactions are secure and encrypted</p>
        </div>

        {/* Name on Card */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 text-gray-300">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Card Number and CVV */}
        <div className="grid grid-cols-3 gap-4 mb-3">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-300">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all"
              placeholder="123"
              maxLength="3"
            />
          </div>
        </div>
        <p className="text-gray-400 text-xs mb-5">Enter your 16-digit number.</p>

        {/* Month and Year */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none appearance-none cursor-pointer transition-all"
            >
              <option value="MM">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none appearance-none cursor-pointer transition-all"
            >
              <option value="YYYY">YYYY</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold mb-2">Billing Address</h3>
          <p className="text-gray-400 text-sm mb-3">The billing address associated with your payment method</p>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-500 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
            />
            <label className="ml-2 text-sm text-gray-300 cursor-pointer select-none">Same as shipping address</label>
          </div>
        </div>

        {/* Comments */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-300">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none resize-none transition-all"
            placeholder="Add any additional comments"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/50"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
