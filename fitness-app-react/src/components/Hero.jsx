import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>SB Fitness</h5>
        </span>
        <h2>Unleash the Inner <b>Fitness</b> Wizard: Morph Your Bod, <b>Upgrade</b> Your Life Quest!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero