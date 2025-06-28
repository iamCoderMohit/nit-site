import React from 'react'
import { FaInstagram, FaLocationDot, FaYoutube } from 'react-icons/fa6'
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className=' bg-gradient-to-r from-[#820566] to-[#1b39bf] mt-20 font-pro flex items-center p-4'>
        <div className='sm:flex gap-8'>
            <div className='sm:w-2/3 flex flex-col gap-3'>
            <h1 className='font-bold text-3xl text-white'>NIT</h1>
            <h1 className='text-white text-lg text-justify'>NIT is a leading educational platform dedicated to empowering students and professionals through innovative learning solutions. With a wide range of courses, expert instructors, and interactive resources, NIT helps learners achieve their academic and career goals. Join NIT to unlock your potential and stay ahead in today’s competitive world.</h1>
        </div>
        <div className='sm:w-1/4 mt-5 sm:mt-0 h-full text-white flex flex-col  gap-3'>
            <h1 className='font-bold text-3xl text-white'>Quick Links</h1>
            <h1 className='text-lg'>Terms & Conditions</h1>
            <h1 className='text-lg'>Privacy Policy</h1>
            <div className='flex text-2xl gap-5'>
                <FaInstagram />
                <FaYoutube />
            </div>
        </div>
        <div className='sm:w-1/3 sm:mt-0 h-full text-white flex flex-col  gap-5 mt-5'>
            <h1 className='font-bold text-3xl text-white'>Contact</h1>
            <div className='flex items-center gap-3'>
                <FaLocationDot className='text-xl'/>
                <h1 className='text-lg'>Haldwani, Nainital, Uttarakhand, India</h1>
            </div>
            <div className='flex items-center gap-3'>
                <MdOutlineEmail className='text-xl'/>
                <h1 className='text-lg'>nit@gmail.com</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer