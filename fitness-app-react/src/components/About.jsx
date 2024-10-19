import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Embark on a Fitness Odyssey with SB Fitzz.. </h3>
          <p>Welcome to SB Fitzz, where the beat of cutting-edge workouts harmonizes with the contagious enthusiasm of a community that's more like family. Our mission? To help you unleash your full potential, one energizing workout at a time. Embark on a fitness journey that's not just about exercise; it's a dance of self-discovery and empowerment. Join the movement. Find your rhythm. Redefine fitness. This is SB Fitzz, where every step you take brings you closer to the best version of yourself.</p>
      </div>

    </div>
  )
}

export default About