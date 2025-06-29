import React, { useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="h-20 bg-[#00040e] text-white font-inter flex justify-around items-center">
      <div className="sm:text-lg font-pro px-4 text-2xl cursor-pointer">
        <a href="#home">NIT</a>
      </div>
      <div className="w-1/2 flex justify-center">
        <ul
          className={
            openNav
              ? "w-[90vw] absolute flex flex-col items-center top-20 left-8 py-5 rounded-xl gap-5 backdrop-blur-xl"
              : "sm:static sm:flex hidden  sm:flex-row sm:w-full sm:justify-around sm:text-lg bg-[#0f1115]/40  rounded-xl p-2"
          }
        >
          <li
            className="cursor-pointer"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            <a href="#course">Courses</a>
          </li>
          <li className="cursor-pointer" onClick={() => setOpenNav(false)}>
            <a href="#review">Testimonials</a>
          </li>
          <li className="cursor-pointer" onClick={() => setOpenNav(false)}>
            <a href="#faq">FAQs</a>
          </li>
          <li
            className="sm:hidden cursor-pointer"
            onClick={() => setOpenNav(false)}
          >
            Login
          </li>
        </ul>
        <div
          className="sm:hidden text-2xl"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <GiCancel /> : <GiHamburgerMenu />}
        </div>
      </div>
      <div className="bg-[#0f1115] rounded-xl p-2 px-4 hidden sm:block cursor-pointer">
        Login
      </div>
    </div>
  );
};

export default Navbar;
