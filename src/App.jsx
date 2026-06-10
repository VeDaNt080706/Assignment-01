import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import Homepage from './Pages/Homepage'
import Productpage from './Pages/Productpage'
import About from './Components/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#111827] selection:bg-blue-500/20 selection:text-blue-600">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
