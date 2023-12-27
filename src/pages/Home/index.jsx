import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Blogs from '../../components/Blogs'
import Contact from '../Contact'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </>
  )
}

export default Home