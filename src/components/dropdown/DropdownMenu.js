import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  // ========= Function to scroll the page top =========

  function handleClick() {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }

  const toggleDropdown = () => {
    if (!isHovered) {
      setIsOpen(!isOpen);
    }
  };

  //==============================
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // setTimeout(() => {
    //   return setIsHovered(false);
    // }, 200);
  };

  //=================================
  const handleMenuMouseEnter = () => {
    setIsMenuHovered(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
    // setTimeout(() => {
    //   return setIsMenuHovered(false);
    // }, 200);
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 uppercase  text-white"
      >
        Projects
      </button>
      {(isOpen || isHovered || isMenuHovered) && (
        <div
          className="absolute  w-36 bg-[#010100] rounded-lg shadow-xl"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Link
            to="/residential"
            onClick={handleClick}
            className="block px-4 py-2 text-white rounded-[4px] hover:border-b-[2px] hover:border-[#f3c724]"
          >
            Residential
          </Link>
          <Link
            to="/commercial"
            onClick={handleClick}
            className="block px-4 py-2 text-white rounded-[4px] hover:border-b-[2px] hover:border-[#f3c724]"
          >
            commercial
          </Link>
          <Link
            to="/sco"
            onClick={handleClick}
            className="block px-4 py-2 text-white rounded-[4px] hover:border-b-[2px] hover:border-[#f3c724]"
          >
            SCO
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
