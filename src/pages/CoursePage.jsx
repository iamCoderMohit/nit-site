import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function CoursePage() {
    const location = useLocation()
    const {id} = useParams()
    const course = location.state
  return (
    <div className='font-pro'>
        <div className='w-full h-60 bg-[#00040e] flex items-center pl-10'>
            <h1 className='text-white md:w-2/4 font-bold text-4xl font-pro'>{course.title}</h1>
        </div>

        <div className='sm:pl-10 sm:pr-0 pl-5 pr-5 mb-15'>
            <h1 className='text-blue-500 text-2xl font-semibold w-1/2 mb-5'>Description - </h1>
            <h1 className='text-white text-xl md:w-1/2 leading-8 text-justify'>{course.description}</h1>
        </div>

        <div className='md:h-100 h-120 md:w-1/3 w-[50vh] m-auto bg-[#00040e]  md:absolute top-20 md:right-10 sm:right-30 rounded-2xl'>
            <div className="h-4/6 w-full rounded-t-2xl bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${course.image})` }}
            ></div>
            <div className='2/6 w-full rounded-b-2xl'>
                <div className='flex justify-around flex-col p-2'>
                    <h1 className='text-gray-500 text-md font-semibold pl-10'>PRICE</h1>
                    <div className='flex justify-around'>
                        <h1 className='text-white text-lg font-bold'>Rs. {course.price}</h1>
                        <h1 className='font-bold text-lg text-green-600'>{course.off} % off</h1>
                    </div>
                </div>
                <div className='bg-blue-700 text-white font-semibold rounded-2xl p-2 flex justify-center w-[80%] m-auto'>Buy Now</div>
            </div>
        </div>

        <div className='pl-10 mt-15' style={{ whiteSpace: 'pre-line' }}>
            <h1 className='text-blue-500 text-2xl font-semibold w-1/2 mb-5'>Syllabus - </h1>
            <h1 className='text-white text-xl leading-15'>{course.syllabus}</h1>
        </div>

        
    </div>
  )
}

export default CoursePage