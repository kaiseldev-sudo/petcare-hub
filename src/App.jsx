import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Features from './pages/Features'
import Testimonials from './pages/Testimonials'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>} >
          <Route index element={<LandingPage />} />
          {/* Add other routes here */}
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
