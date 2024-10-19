import React from 'react'
import '../styles/Home.css'
import Hero from '../components/Hero'
import About from '../components/About'
import HomeSearch from '../components/HomeSearch'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HomeSearch />
    </div>
  )
}

export default Home