import React from "react";
import Navbar2 from "../components/Navbar2";
import bgvideo from "../assets/sco.mp4";
import Footer from "../components/footer/Footer";

const Sco = () => {
  return (
    <div>
      <div className="banner font-semibold">
        <div className="overlay"> </div>
        <video src={bgvideo} autoPlay loop muted />
        <div className="banner-content">
          <Navbar2 />
          {/* <Topbar /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sco;
