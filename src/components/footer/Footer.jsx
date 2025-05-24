import React, { useEffect } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';





const Footer = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const year= new Date().getFullYear()
  const socialIcons= [
    {
      icon: <FaGithub />,
      link: "#"
    },
    {
      icon: <FaLinkedin />,
      link: "#"
    },
    {
      icon: <FaFacebook />,
      link: "#"
    },
  ]
  const links= [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "About",
      link: "#"
    },
    {
      name: "Projects",
      link: "#"
    },
    {
      name: "Contact",
      link: "#"
    },
  ]
  return (
<>
<div  className="footer overflow-x-hidden text-center md:text-left text-white pt-[79px] bg-dark-bg">
      <Container>
        <Flex  className="md:px-[88px] gap-y-5 md:gap-y-0 flex-col md:flex-row rounded-[20px] bg-black py-[104px]">
          <div data-aos="fade-up" className="left">
            Meheraj
          </div>
          <div data-aos="fade-up" className="mid">
            <h4 className='text-[24px] text-medium'>Quick Links</h4>
            <ul>
            <Flex className="gap-5 mt-3">
              {
                links.map((link, index) => (
                  <li key={index} className='text-body text-grey-200 cursor-pointer hover:opacity-80 font-medium'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
              }
            </Flex>
            </ul>
            <input type="email" placeholder='Enter Your Email' className='border-b-1 mt-[50px] md:mr-4'/>
            <button className='bg-primary rounded-[20px] text-black text-[16px] font-medium cursor-pointer hover:bg-dark-bg hover:border-primary hover:text-primary border border-primary items-center gap-3 py-[10px] px-[20px]' type="submit">Submit</button>
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
    <div className="footer_bottom bg-dark-bg py-[40px]">
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