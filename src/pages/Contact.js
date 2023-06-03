import React from "react";
import Navbar2 from "../components/Navbar2";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const url =
    "https://cdn.pixabay.com/photo/2015/12/03/22/15/tablet-1075790_640.jpg";

  return (
    <div>
      {/* ========= 1. fixed nav ========= */}
      {/* ====================================== */}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-96 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[3rem] text-white flex justify-center items-center  py-[10rem] ">
          <h1 className="text-center  "> Contact us</h1>
        </div>
        <Navbar2 />
      </div>

      {/* ========= 2. contact details ========= */}
      {/* ====================================== */}
      <div className=" max-w-7xl mx-auto my-16 px-8 ">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-8 text-lg ">
          {/* ====== div-1 ======= */}
          <div className="bg-gray-300 items-center text-center px-5 py-4 rounded-md  ">
            <div className="flex justify-center text-2xl ">
              <BsTelephoneFill />
            </div>
            <h1 className="my-2 font-medium ">Phone</h1>
            <p>9310000053</p>
          </div>
          {/* ====== div-2 ======= */}
          <div className="bg-gray-300 items-center text-center px-5 py-4 rounded-md  ">
            <div className="flex justify-center text-2xl ">
              <MdEmail />
            </div>
            <h1 className="my-2 font-medium ">Email</h1>
            <p>turnkeyreality12@gmail.com</p>
          </div>
          {/* ====== div-3 ======= */}
          <div className="bg-gray-300 items-center text-center px-5 py-4 rounded-md  ">
            <div className="flex justify-center text-2xl ">
              <ImLocation2 />
            </div>
            <h1 className="my-2 font-medium ">Office Location</h1>
            <p className="text-sm">
              505 5th Floor Pioneer Urban Square Sector 62, Haryana 122102
            </p>
          </div>
          {/* ====== div-4 ======= */}
          <div className="bg-gray-300 items-center text-center px-5 py-4 rounded-md  ">
            <div className="flex justify-center text-2xl ">
              <AiOutlineGlobal />
            </div>
            <h1 className="my-2 font-medium ">Website</h1>
            <p>www.turnkeyreality.com</p>
          </div>
        </div>
        {/* ========= 3.Map and Write to us ========= */}
        {/* ====================================== */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Location in Gurugram
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Ask Us Anytime
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
