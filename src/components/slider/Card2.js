import React from 'react'
import fours from "../../assets/builderImages/adani.png"
const Card2 = () => {
  return (
    <div className="card  w-[150px] h-[100px] hover:bg-slate-200 m-2 rounded-lg shadow-lg">
     <div className="top">
      <img
        className="w-[150px] h-[85px] object-cover  p-2"
        src={fours}
        alt="img"
      />
      </div>
    </div>
  )
}

export default Card2