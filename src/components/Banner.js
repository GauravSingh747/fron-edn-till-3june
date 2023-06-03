import React from "react";
import "./banner.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import bgvideo from "../assets/video-kaula-lampur.mp4";
import Collections from "./Collections";
import SerachBar from "./searchBar/SerachBar";
import Carousel from "./slider/Carousel";
import Footer from "./footer/Footer";
import Navbar2 from "./Navbar2";
import TopProperty from "./TopProperty";
const Banner = () => {
  return (
    <div>
      {/* ======= Banner context */}

      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={bgvideo} autoPlay loop muted playsinline />
        <div className="banner-content">
          <Navbar2 />
          <SerachBar />
          {/* <Topbar /> */}
        </div>
      </div>

      {/* ======= Collection Content ==== */}
      <Carousel />
      <Collections />
      <TopProperty />
      <Footer />
    </div>
  );
};

export default Banner;
