import React from 'react'

function CourseCard({
    img
}) {
  return (
    <div className='sm:w-1/4 bg-[#22222e] rounded-2xl flex flex-col gap-5 items-center justify-between p-1'>
        <img className='rounded-2xl' src={img} alt="" />
        <div className='bg-purple-600 text-white font-inter text-lg w-fit px-4 py-1 rounded-lg font-bold'>Buy Now</div>
    </div>
  )
}

export default CourseCard