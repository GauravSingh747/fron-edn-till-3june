import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card16,
  Card17,
  Card18,
  Card19,
  Card20,
} from "./index.js";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 350;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 350;
  };

  return (
    <div className=" my-8 px-8 max-w-7xl  mx-auto ">
      <div className="text-center py-4  text-3xl ">FEATURED BUILDERS</div>
      <div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute top-[60px] left-[-20px] bg-slate-300 z-60 p-2 m-2 rounded-full"
          >
            <FiChevronLeft className="text-[20px]" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-[-20px] top-[60px] z-60 p-2 m-2 rounded-full bg-slate-300"
          >
            <FiChevronRight className="text-[20px]" />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="carousel p-8 cursor-pointer flex items-center justify-between overflow-x-hidden scroll-smooth   "
      >
        <div>
          <Card7 />
        </div>
        <div>
          <Card13 />
        </div>
        <div>
          <Card8 />
        </div>
        <div>
          <Card9 />
        </div>
        <div>
          <Card11 />
        </div>
        <div>
          <Card12 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
        <div>
          <Card6 />
        </div>

        <div>
          <Card1 />
        </div>
        <div>
          <Card10 />
        </div>
        <div>
          <Card14 />
        </div>

        <div>
          <Card15 />
        </div>
        <div>
          <Card16 />
        </div>
        <div>
          <Card17 />
        </div>
        <div>
          <Card18 />
        </div>
        <div>
          <Card19 />
        </div>
        <div>
          <Card20 />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
