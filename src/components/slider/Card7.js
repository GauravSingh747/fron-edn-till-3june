import React from 'react'
import aipl from "../../assets/builderImages/dlf-logo.png"
import { Link } from 'react-router-dom'
const Card7 = () => {
  return (
    <div className="card  w-[150px] h-[100px] hover:bg-slate-300 m-2 rounded-lg shadow-lg">
    <Link className="top" to="/dlf" >
     <img
       className="w-[150px] h-[85px] object-cover  p-2"
       src={aipl}
       alt="img"
     />
     </Link>
   </div>
  )
}

export default Card7