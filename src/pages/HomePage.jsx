import { useState } from 'react'
import Home from './Home'
import Courses from './Courses'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Footer from '../components/Footer'

function HomePage() {

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

export default HomePage
