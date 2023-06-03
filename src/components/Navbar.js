import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/logo-bg-1.png";
import { MdQuestionAnswer } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import DropdownMenu from "./dropdown/DropdownMenu";
import DropdownMenu2 from "./dropdown/DropdownMenu2";
import SerachBar from "./searchBar/SerachBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  const [isScroll, SetIsScroll] = useState("hidden");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setNavbarBgColor("bg-[#010100]"); // Set your desired background color tailwind class here
        SetIsScroll("");
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <nav className="bg-transparent  sticky top-0 z-50 "> */}
      <nav className={`${navbarBgColor}  fixed w-full top-0 z-50`}>
        {/* ==== Before opening navigation bar */}
        {/* ======= logo number enquary section ====== */}
        <div>
          <div
            className={`text-white sm:flex  hidden justify-between items-center py-1 px-10`}
          >
            {/* ====== left ======= */}
            <div className="text-[1.3rem] flex items-center ">
              <div className="flex-shrink-0 hidden sm:flex ">
                <MdQuestionAnswer className="mr-3 mt-0.5 " />
              </div>
              <div className="flex-shrink-0 hidden sm:flex ">
                <h4 className=" hover:border-b-[2px] hover:border-[#f3c724] rounded-md ">
                  Quick inquiry
                </h4>
              </div>
            </div>
            {/* ======== middle ======== */}
            <div className="logo ">
              <Link to="/">
                <img
                  src={logo}
                  alt="company-logo"
                  className="h-12 mr-16 sm:flex "
                />
              </Link>
            </div>

            {/* ======= For Mobile ======= */}
            {/* ======= right ======= */}
            <div className="text-[1.3rem] mt-2 flex items-center  ">
              <div>
                <ImMobile className="mr-2 text-[15px] mt-0.5 cursor-pointer " />
              </div>
              <div>
                <a
                  href="tel:+919310000053"
                  className=" hover:border-b-[2px] hover:border-[#f3c724] rounded-md "
                >
                  9310000053
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ======= logo number enquary section ====== */}

        {/* ========= All Links ============ */}
        <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-2">
          <div className="flex items-center justify-between h-10">
            <div className="flex justify-between items-center uppercase ">
              {/* ====== Logo Div-1 ===== */}
              {/* <div className="flex-shrink-0  flex sm:hidden mr-20 "> */}
              <div className="flex-shrink-0  flex sm:hidden mr-20 ">
                <img src={logo} className="h-12 " alt="logo-img" />
              </div>

              {/* ======= Link Div-2 ======= */}
              <div className="hidden lg:block">
                <div className=" lg:mx-20 ml-2 flex items-center  space-x-12">
                  {/* ____1____ */}
                  <div>
                    <Link
                      to="/"
                      className="text-gray-100  text-[1.05rem]  hover:border-b-[3px] hover:border-[#f3c724] px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="text-gray-100  text-[1.05rem]  hover:border-b-[3px] hover:border-[#f3c724] px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About us
                    </Link>
                  </div>
                  {/* ____2____ */}
                  <div>
                    <a
                      href="#"
                      className="text-gray-100 text-[1.05rem]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <DropdownMenu />
                    </a>
                  </div>
                  {/* ____3____ */}
                  <div>
                    <a
                      href="#"
                      className="text-gray-100 text-[1.05rem]  hover:text-white px-3  rounded-md text-sm font-medium"
                    >
                      <DropdownMenu2 />
                    </a>
                  </div>
                  {/* ____4____ */}
                  <div>
                    <Link
                      to="/carrer"
                      className="text-gray-100 text-[1.05rem] rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724] px-3 py-2  text-sm font-medium"
                    >
                      Career
                    </Link>
                  </div>
                  {/* ____5____ */}
                  <div>
                    <Link
                      to="/contact-us"
                      className="text-gray-100 text-[1.05rem] rounded-[4px] hover:border-b-[3px] hover:border-[#f3c724] px-3 py-2 text-sm font-medium"
                    >
                      Contact-US
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 mt-2 flex md:hidden">
                <button
                  onClick={toggleNavbar}
                  type="button"
                  className="inline-flex items-center justify-center p-1 rounded-md text-[#e4c73e] hover:text-white hover:bg-gray-700 focus:outline-none  focus:ring-offset-2"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <FaBars className="block h-6 w-6" />
                  ) : (
                    <CgClose className="block h-6 w-6 text-gray-200 " />
                  )}
                </button>
              </div>
            </div>

            {/* ======================================================= */}
          </div>
        </div>
        {/* ==== Before opening navigation bar till above code */}

        {/* ==== after opening navigation bar below code */}
        {isOpen && (
          <div className="md:hidden bg-[#010100] " id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-8">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* <SerachBar /> */}
    </div>
  );
};

export default Navbar;
