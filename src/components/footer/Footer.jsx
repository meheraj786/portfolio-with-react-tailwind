import React, { useEffect, useState } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../layouts/Logo';
import { NavLink } from 'react-router-dom';





const Footer = () => {

  const [show, setShow]= useState(false)

  const successToast= 
  (<div id="toast-success" className="flex absolute z-[99999] top-40 bg-bg left-1/2 -translate-x-1/2 items-center w-full max-w-xs p-4 mb-4  text-primary rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">Succesfull.</div>
    <button type="submit" onClick={()=>setShow(false)} className="ms-auto -mx-1.5 -my-1.5 bg-dark-bg text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>)
const unsuccessToast= (<div id="toast-danger" className="flex absolute z-[99999] top-40 bg-bg left-1/2 -translate-x-1/2 items-center w-full max-w-xs p-4 mb-4  text-primary rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
  <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
      </svg>
      <span className="sr-only">Error icon</span>
  </div>
  <div className="ms-3 text-sm font-normal">Item has been deleted.</div>
  <button onClick={()=>setShow(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-dark-bg text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      <span className="sr-only">Close</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
  </button>
</div>)

useEffect(() => {
  const timer = setTimeout(() => {
    setShow(false);
  }, 2000);

  return () => clearTimeout(timer);
}, [show]);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const year= new Date().getFullYear()
  const socialIcons= [
    {
      icon: <FaGithub />,
      link: "https://github.com/meheraj786"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mehraj-h/"
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/mehrajh786/"
    },
  ]
  const navItems = [
    { item: "Home", link: "/" },
    { item: "About", link: "/about" },
    { item: "Services", link: "/services" },
    { item: "Skill", link: "/skill" },
    { item: "Projects", link: "/projects" },
    { item: "Blog", link: "/blog" },
  ];
  return (
<>
{show && successToast}
<div  className="footer bg-[url(assets/lines.png)] bg-cover overflow-x-hidden font-secondary text-center md:text-left text-white pt-[79px] bg-dark-bg">
      <Container>
        <Flex  className="md:px-[88px] gap-y-5 md:gap-y-0 flex-col md:flex-row rounded-[20px] bg-black py-[104px]">
          <div data-aos="fade-up" className="left">
            <Logo/>
          </div>
          <div data-aos="fade-up" className="mid">
            <h4 className='text-[24px] text-medium'>Quick Links</h4>
            <ul>
            <Flex className="gap-5 mt-3">
              {
                navItems.map((item, index) => (
                  <li key={index} className='text-body text-grey-200 cursor-pointer hover:opacity-80 font-medium'>
                    <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            isActive
                              ? "text-primary font-semibold"
                              : "hover:text-primary"
                          }
                        >
                          {item.item}
                        </NavLink>
                  </li>
                ))
              }
            </Flex>
            </ul>
            <input type="email" placeholder='Enter Your Email' className='border-b-1 mt-[50px] md:mr-4'/>
            <button  className='bg-primary rounded-[20px] text-black text-[16px] font-medium cursor-pointer hover:bg-dark-bg hover:border-primary hover:text-primary border border-primary items-center gap-3 py-[10px] px-[20px]' type="submit">Submit</button>
          </div>
          <div data-aos="fade-up" className="right">
          <h4 className='text-[24px] mb-3 md:mb-[38px] text-medium'>Address</h4>
          <ul>
            <li className='mb-[15px]'>Mohammadpur, Dhaka, Bangladesh</li>
            <li className='mb-[15px]'>meherajhosen786@gmail.com</li>
            <li>+880 1989162543</li>
            {/* <a href='https://api.whatsapp.com/send?phone=1989162543&text=I%20want%20to%20know%20about%20your%20products?' target='blank'>Whatsapp</a> */}
          </ul>
          </div>
        </Flex>
      </Container>
    <div className="footer_bottom font-secondary bg-dark-bg py-[40px]">
      <Container>
        <Flex className="justify-between gap-y-4 md:gap-y-0 flex-col md:flex-row">
          <div className="left opacity-80">
            <p>© {year} Meheraj. All rights reserved.</p>
          </div>
          <div className="right">
            <ul className='flex gap-5'>
              {
                socialIcons.map((icon, index) => (
                  <li key={index} className='text-body text-grey-200 cursor-pointer text-primary hover:opacity-80 font-medium'>
                    <a href={icon.link}><i className="text-[24px]">{icon.icon}</i></a>
                  </li>
                ))
              }
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
    </div>
    <div className="whatsapp p-[10px] md:p-[20px] md:text-[50px] text-[30px] bg-primary text-bg cursor-pointer hover:text-primary fixed md:right-[100px] right-[50px] md:bottom-[100px] bottom-[50px] hover:bg-transparent rounded-full hvoer:border-primary border border-primary opacity-80 hover:opacity-100">
<a href='https://api.whatsapp.com/send?phone=1989162543&text=I%20want%20to%20know%20about%20your%20products?' target='blank'><FaWhatsapp /></a>
    </div>
    </>
  )
}

export default Footer