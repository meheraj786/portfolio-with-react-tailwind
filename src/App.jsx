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
import BlogDetails from './pages/BlogDetails'
import ScrollUpButton from './layouts/ScrollUpButton'


function App({blogs, projects}) {


  return (
<>
<Banner/>
<Marquee/>
<About/>
<Services/>
<Skill/>
<Projects projects={projects}/>
<Blog blogs={blogs}/>
<Contact/>
</>
  )
}

export default App
