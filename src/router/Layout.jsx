import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/scrollTop/ScrollTop'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout