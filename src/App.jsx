import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Footer from './Components/Footer'
import Experience from './Components/Experience'

function App() {
  
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Project />
    <Footer />
    </div>
  )
}

export default App
