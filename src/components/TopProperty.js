import React from "react";
import commercial from "../assets/commercial-img.jpg";
import residential from "../assets/residential-img.jpg";
import sco from "../assets/sco-img.jpg";

const TopProperty = () => {
  return (
    <div className="max-w-7xl my-10 px-4 mx-auto text-center">
      <h1 className="uppercase text-lg md:text-2xl py-4 ">
        Best <strong className="font-Playfair text-3xl">Property </strong>
        Collection For you
      </h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        Hover me
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 w-full">
        {/* ========== Left-- Commercial ======== */}
        <div className="w-full relative  transition duration-300 transform hover:-translate-y-2  ">
          <img
            src={commercial}
            alt="commeercial-img"
            className="rounded-md  "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            Residential
          </h1>
        </div>

        {/* ========== middle-- residential  ======== */}
        <div className="w-full relative  transition duration-300 transform hover:-translate-y-2  ">
          <img
            src={residential}
            alt="commeercial-img"
            className="rounded-md "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            Commercial
          </h1>
        </div>

        {/* ========== Right-- SCO ======== */}
        <div className="w-full relative transition duration-300 transform hover:-translate-y-2 ">
          <img src={sco} alt="commeercial-img" className="rounded-md  " />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <h1 className="absolute bottom-4 left-4 text-3xl font-normal text-white ">
            SCO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopProperty;
