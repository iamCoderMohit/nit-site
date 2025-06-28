import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[70%] m-auto bg-[#22222e] min-h-15 rounded-2xl flex flex-col justify-center p-2  px-2 ">
      <div className="w-full flex justify-between">
        <h1 className="text-white text-xl font-pro">Q. {question}</h1>
      <div
        className="bg-purple-500 sm:px-10 flex justify-center items-center cursor-pointer h-fit w-fit rounded-full p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      </div>

      <div className = {isOpen ? "block" : "hidden h-0"}>
        <h1 className="text-white text-xl mt-5 font-pro">Ans. {answer}</h1>
      </div>
    </div>
  );
}

export default Question;
