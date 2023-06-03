import React from "react";
import residential from "../assets/residential.mp4";
import Collections from "../components/Collections";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/Navbar2";
const Residential = () => {
  return (
    <div>
      <div className="banner  font-semibold ">
        <div className="overlay"> </div>
        <video src={residential} autoPlay loop muted playsinline />
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

export default Residential;
