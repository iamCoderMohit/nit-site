import React from 'react'
import { useNavigate } from 'react-router-dom'

function CourseCard({
    course
}) {
  const navigate = useNavigate()
  return (
    <div className='sm:w-1/4 bg-[#22222e] rounded-2xl flex flex-col gap-5 items-center justify-between p-1'>
        <img className='rounded-2xl' src={course.image} alt="" />
        <div className='bg-purple-600 text-white font-inter text-lg w-fit px-4 py-1 rounded-lg font-bold cursor-pointer'
        onClick={() => navigate(`/course/${course.id}`, {state: course})}
        >Buy Now</div>
    </div>
  )
}

export default CourseCard