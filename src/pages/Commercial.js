import React from "react";
import commercial from "../assets/commercial.mp4";
import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/Navbar2";
const Commercial = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={commercial} autoPlay loop muted />
        <div className="banner-content">
          <Navbar2 />
          {/* <Topbar /> */}
        </div>
      </div>
      <Collections />
      <Footer />
    </div>
  );
};

export default Commercial;
