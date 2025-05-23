import React,{  } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Marquee from './components/marquee/Marquee'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'
import Skill from './components/skill/Skill'
import Projects from './components/projects/Projects'

function App() {

  return (
<>
<Navbar/>
<Banner/>
<Marquee/>
<About/>
<Services/>
<Skill/>
<Projects/>
</>
  )
}

export default App
