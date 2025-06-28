import React from 'react'
import Review from '../components/Review'
import { motion } from 'framer-motion';

const reviewData = [
    {
        id: 1,
        text: "great platform must join you'll never get this much value from anywhere else",
        name: "mohit",
        stars: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        text: "great platform must join you'll never get this much value from anywhere else",
        name: "mohit",
        stars: [1, 2, 3, 4]
    },
    {
        id: 3,
        text: "great platform must join you'll never get this much value from anywhere else",
        name: "mohit",
        stars: [1, 2, 3]
    },
    {
        id: 4,
        text: "great platform must join you'll never get this much value from anywhere else",
        name: "mohit",
        stars: [1, 2, 3, 4, 5]
    },
    {
        id: 5,
        text: "great platform must join you'll never get this much value from anywhere else",
        name: "mohit",
        stars: [1, 2, 3, 4]
    },
]

function Testimonials() {
  return (
    <div className='mt-20'>
        <div className='text-white font-pro text-4xl font-semibold mb-10'>
            <h1 className='text-center'>Testimonials</h1>
        </div>

        <div className='flex sm:justify-around justify-center flex-wrap gap-3 w-[90vw] m-auto'>
            {reviewData.map(rev => (
                <Review text={rev.text} name={rev.name} stars={rev.stars} />
            ))}
        </div>

       
    </div>
  )
}

export default Testimonials