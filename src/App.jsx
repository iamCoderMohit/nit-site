import { useState } from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Testimonials from './pages/Testimonials'
import Faq from './pages/Faq'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/course/:id' element={<CoursePage />} />
      </Routes>
    </>
  )
}

export default App
