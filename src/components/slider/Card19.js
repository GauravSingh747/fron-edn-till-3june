import React from 'react'
import aipl from "../../assets/builderImages/trump-tower.jpg"
const Card19 = () => {
  return (
    <div className="card  w-[150px] h-[100px] hover:bg-slate-300 m-2 rounded-lg shadow-lg">
    <div className="top">
     <img
       className="w-[150px] h-[85px] object-cover  p-2"
       src={aipl}
       alt="img"
     />
     </div>
   </div>
  )
}

export default Card19