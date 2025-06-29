import { useState } from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div id='home'>
        <Home />
      </div>
      <div id='course'>
        <Courses />
      </div>
      <div id='review'>
        <Testimonials />
      </div>
      <div id='faq'>
        <Faq />
      </div>
      <Footer />
    </>
  )
}

export default App
