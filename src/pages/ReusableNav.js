import React from "react";
import Navbar2 from "../components/Navbar2";

const ReusableNav = () => {
  const url =
    "https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-96 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[3rem] text-white flex justify-center items-center  py-[10rem] ">
          <h1>Builder Profile</h1>
        </div>
        <Navbar2 />
      </div>
    </div>
  );
};

export default ReusableNav;
