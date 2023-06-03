import React from 'react'
import fours from "../../assets/builderImages/4s-new.png"
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
    <div className="card cursor-pointer w-[150px] h-[100px] hover:bg-slate-200 m-2 rounded-lg shadow-lg">
    <Link to="/sco" className="top">
      <img
        className="w-[150px] h-[85px] object-cover  p-2"
        src={fours}
        alt="img"
      />
    </Link>
  </div>
  )
}

export default Card1