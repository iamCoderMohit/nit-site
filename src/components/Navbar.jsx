import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='h-20 bg-[#00040e] text-white font-inter flex justify-around items-center'>
        <div className='sm:text-lg font-pro px-4'>NIT</div>
        <div className='w-1/2 flex justify-center'>
            <ul className='hidden sm:flex sm:w-full sm:justify-around sm:text-lg bg-[#0f1115] rounded-xl p-2'>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Contact</li>
                <li className='sm:hidden'>Login</li>
            </ul>
            <div className='sm:hidden'>
                <GiHamburgerMenu />
            </div>
        </div>
            <div className='bg-[#0f1115] rounded-xl p-2 px-4 hidden sm:block'>
              Login
            </div>
    </div>
  )
}

export default Navbar