import React,{  } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Marquee from './components/marquee/Marquee'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'
import Skill from './components/skill/Skill'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

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
<Blog/>
<Contact/>
<Footer/>
</>
  )
}

export default App
