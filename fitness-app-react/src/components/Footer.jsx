import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='Footer'>

        <div className="footer-body">

            <ul>
              <li onClick={()=> navigate("/bodyPart/back")}>Back</li>
              <li onClick={()=> navigate("/bodyPart/cardio")}>Cardio</li>
              <li onClick={()=> navigate("/bodyPart/chest")}>Chest</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/bodyPart/neck")}>Neck</li>
              <li onClick={()=> navigate("/bodyPart/upper%20legs")}>Upper Legs</li>
              <li onClick={()=> navigate("/bodyPart/shoulders")}>Shoulders</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/equipment/cable")}>Cable</li>
              <li onClick={()=> navigate("/equipment/dumbbell")}>Dumbbell</li>
              <li onClick={()=> navigate("/equipment/band")}>Band</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/equipment/roller")}>Roller</li>
              <li onClick={()=> navigate("/equipment/hammer")}>Hammer</li>
              <li onClick={()=> navigate("/equipment/kettlebell")}>Kettlebell</li>
            </ul>

        </div>

        <hr />

        <p>SB FITZZ - &copy; 2023 - All Rights Reserved</p>

    </div>
  )
}

export default Footer