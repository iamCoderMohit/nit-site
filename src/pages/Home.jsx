import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/homepageimg.png"

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center mt-10 font-pro flex-col gap-8 w-[90vw] m-auto">
        <div className="text-white border-2 rounded-xl border-blue-600 border-dotted text-lg w-fit px-7 py-1">
          Book Your Slots Now
        </div>
        <div className="text-white text-4xl font-bold">
          <h1 className="text-center">
            Start Your Web, Python and Data Science Journey with us
          </h1>
        </div>
        <div className="text-white text-xl sm:text-2xl font-semibold">
          <h1 className="text-center text-[#ffffff80]">
            Join Our courses and get the firsthand knowledge about Web and Data
            Science
          </h1>
        </div>
        <div className="text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#de00ae] to-[#1e47fc] rounded-full px-3 py-2">
          <span>View Courses</span>
          <FaArrowRight />
        </div>

        <div className="flex justify-center">
          <img className="sm:w-1/2" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
