import { useState } from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Home />
      <Courses />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default App
