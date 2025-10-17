import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Payment from './components/Payment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Icons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
            <img src={reactLogo} className="h-12 w-12 animate-spin-slow" alt="React logo" />
          </div>
          
          <h1 className="text-5xl font-bold mb-4">PayFlow Demo</h1>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto">
            Experience seamless payment processing with modern React components and beautiful UI design
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Modern Payment Solutions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Secure Processing</h3>
              <p className="text-gray-600 text-center text-sm">
                End-to-end encryption ensures your payment data is always protected and secure.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Lightning Fast</h3>
              <p className="text-gray-600 text-center text-sm">
                Powered by Vite and React for instant load times and smooth interactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Mobile Ready</h3>
              <p className="text-gray-600 text-center text-sm">
                Fully responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Interactive Demo</h2>
          <div className="inline-block">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Click Counter: {count}
            </button>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to see Hot Module Replacement
          </p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Try Our Payment Form</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.
            </p>
          </div>
          
          <Payment />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">PayFlow Demo</h3>
              <p className="text-sm text-gray-400">
                A modern payment form built with React, Vite, and Tailwind CSS. Showcasing best practices in UI/UX design.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Technologies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">⚡</span> React 18
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">⚡</span> Vite
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">⚡</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">⚡</span> Modern JavaScript
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    React Docs
                  </a>
                </li>
                <li>
                  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Vite Docs
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              ✨ This is a demo form. <span className="text-emerald-500">Real payments</span> will be processed in the production environment.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
