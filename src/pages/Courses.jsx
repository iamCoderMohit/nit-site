import React from 'react'
import CourseCard from '../components/CourseCard'
import courseImg from '../assets/coursepicimg.png'

const courses = [
  {
    id: 1,
    image: courseImg,
  },
  {
    id: 2,
    image: courseImg,
  },
  {
    id: 3,
    image: courseImg,
  },
]

function Courses() {
  return (
    <div className='mt-20'>
    <div className="w-[90vw] m-auto font-pro text-white font-semibold text-4xl mb-10">
      <h1 className="text-center">What You'll Learn with us</h1>
    </div>

    <div className='flex justify-around flex-wrap w-[90vw] m-auto gap-5'>
      {courses.map(course => (
        <CourseCard img={course.image}/>
      ))}
    </div>
    </div>
  )
}

export default Courses