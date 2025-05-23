import React,{  } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Marquee from './components/marquee/Marquee'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'

function App() {

  return (
<>
<Navbar/>
<Banner/>
<Marquee/>
<About/>
<Services/>
</>
  )
}

export default App
