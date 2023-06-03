import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Banner from "./components/Banner";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Sco from "./pages/Sco";
import Dlf from "./pages/builderPages/Dlf";
import M3m from "./pages/builderPages/M3m";
import Elan from "./pages/builderPages/Elan";
import Career from "./pages/Career";
import About from "./pages/About";
import Contact from "./pages/Contact";
//================================
//      Made By Gaurav Singh
//================================

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/sco" element={<Sco />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ====== Builder pages ===== */}
        <Route path="/dlf" element={<Dlf />} />
        <Route path="/m3m" element={<M3m />} />
        <Route path="/elan" element={<Elan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
