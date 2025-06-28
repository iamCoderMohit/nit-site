import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Review({
    text,
    name,
    stars
}) {
  return (
    
        <div className='sm:w-1/3  bg-[#22222e] rounded-2xl p-3 flex flex-col justify-between'>
            <div className='flex gap-1'>
                {stars.map(star => (
                    <FaStar className='text-[#FFD700] text-2xl'/>
                ))}
            </div>

            <div className='overflow-ellipsis'>
                <h1 className='font-pro text-3xl text-white text-center overflow-ellipsis'>{text}</h1>

            <div>
                <h1 className='font-pro text-xl text-white p-3 text-right'>-{name}</h1>
            </div>
            </div>
        </div>

  )
}

export default Review