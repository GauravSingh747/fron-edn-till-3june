import React from "react";
import logo from "../../assets/logo-bg-1.png";
import { ImLocation2 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }

  return (
    <div className="bg-[#010100] text-white py-8 text-[17px]">
      <div className="max-w-7xl mx-auto my-10 px-8 grid md:grid-cols-3 grid-cols-1">
        {/* ==== Left ===== */}

        <div className="mr-12  ">
          <img src={logo} alt="logo-img" className="h-14" />

          <div className=" flex gap-4 my-4 items-center ">
            <div>
              <ImLocation2 className="text-[28px] " />
            </div>

            <div>
              <p>
                505 5th Floor Pioneer Urban Square Sector 62, Haryana 122102
              </p>
            </div>
          </div>

          <div className=" flex gap-4 my-4 items-center">
            <div>
              <MdEmail className="text-[24px] " />
            </div>

            <div>
              <a
                class="text-base md:text-lg lg:text-xl"
                target="_self"
                href="turnkeyreality12@gmail.com"
              >
                turnkeyreality12@gmail.com
              </a>
            </div>
          </div>

          <div className=" flex gap-4 my-4 items-center">
            <div>
              <IoIosCall className="text-[24px] " />
            </div>

            <div className="transition-right duration-200 ease-in-out">
              <a
                href="tel:+919310000053"
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724] "
              >
                9310000053
              </a>
            </div>
          </div>

          {/* ====== Links Icons */}

          <div className="flex mt-8 cursor-pointer  ">
            <div className="mr-6 ">
              <a
                href="https://www.facebook.com/people/Turnkeyreality/100090901887050/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-5xl p-2 rounded-[50%] hover:border-[1px] hover:border-[#f3c724]" />
              </a>
            </div>

            <div className="mr-6">
              <a
                href="https://instagram.com/turnkeyreality?igshid=NTc4MTIwNjQ2YQ==`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className=" text-5xl p-2 rounded-[50%] hover:border-[1px] hover:border-[#f3c724] " />
              </a>
            </div>

            <div className="mr-6">
              <a
                href="https://in.linkedin.com/company/turnkeyreality"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin className="  ease-in-out duration-300  text-5xl p-2 rounded-[50%] hover:border-[1px] hover:border-[#f3c724] " />
              </a>
            </div>

            <div className="mr-6">
              <a
                href="https://www.youtube.com/@turnkeyreality12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className=" text-5xl p-2 rounded-[50%] hover:border-[1px] hover:border-[#f3c724] " />
              </a>
            </div>
          </div>
        </div>

        {/* ==== Middle ===== */}

        <div className="mr-12 sm:text-start text-start uppercase my-6 sm:mt-0 ">
          <p className="mb-7 font-semibold text-xl ">Quick Links</p>

          <div>
            <p className="mb-4">
              <Link
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724]"
                to="/"
                onClick={handleClick}
              >
                Home
              </Link>
            </p>

            <p className="mb-4">
              <Link
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724]"
                to="/residential"
                onClick={handleClick}
              >
                residential
              </Link>
            </p>

            <p className="mb-4">
              <Link
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724]"
                to="/commercial"
                onClick={handleClick}
              >
                commercial
              </Link>
            </p>

            <p className="mb-4">
              <Link
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724]"
                to="/"
              >
                Career
              </Link>
            </p>

            <p className="mb-4">
              <Link
                className="rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724]"
                to="/"
              >
                Contact-us
              </Link>
            </p>
          </div>
        </div>

        {/* ==== Right ===== */}

        <div>
          <h1 className="text-xl font-semibold ">Subscribe</h1>
          <p className="my-4">
            Sign up to receive updates on turnkey Reality announcements and new
            opportunities.
          </p>
          <label htmlFor="email">Email*</label> <br />
          <input
            type="email"
            placeholder="Your Email..."
            className="text-black p-2 lg:w-[420px] md:w-[280] h-[40px]  sm:w-auto sm:flex rounded-md "
          />
          <br />
          <input type="checkbox" />
          <p>
            Please click to confirm your consent to receive email updates from
            us. Note - you have the right to withdraw your consent at any time
            by contacting us at turnkeyreality12@gmail.com
          </p>
          <button className="bg-[#cca61e] text-black hover:bg-black hover:text-white hover:border-2 rounded-md font-bold px-4 py-2 rounded-4 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
