import React from "react";
import elan from "../../assets/builderImages/elan.png";
import ReusableNav from "../ReusableNav";

const Elan = () => {
  return (
    <div>
      <ReusableNav />

      {/* ===== Profile details ===== */}
      <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 grid-cols-1 ">
        {/* ======  Builder lOGO ======  */}
        <div>
          <img src={elan} alt="elan-logo" />
        </div>
        {/* ====== Builder detail ======  */}
        <div>
          <h1>Elan builder</h1>
          <p className="border-b-2  border-dashed ">Location</p>
        </div>
        {/* ====== Form ======  */}
        <div className="text-[4rem]">
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
          <h1>form</h1>
        </div>
      </div>
    </div>
  );
};

export default Elan;
