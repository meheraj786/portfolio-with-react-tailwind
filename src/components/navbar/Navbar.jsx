import React, { useEffect, useState } from 'react'
import Container from '../../layouts/Container'
import Flex from "../../layouts/Flex"
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiArrowUpRight } from "react-icons/fi";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import RoundIconBox from '../../layouts/RoundIconBox';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuArrowUpLeft } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../layouts/Logo';





const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [show, setShow] = useState(false);
  const [talk, setTalk] = useState(false);
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
  const navItems=[
    {
      item:"Home",
      link: "#"
    },
    {
      item:"About",
      link: "#"
    },
    {
      item:"Services",
      link: "#"
    },
    {
      item:"Skill",
      link: "#"
    },
    {
      item:"Projects",
      link: "#"
    },
    {
      item:"Contact",
      link: "#"
    },
  ]
  return (
    <>
    <div className="navbar overflow-x-hidden py-6 z-[99999] fixed w-[100vw] bg-bg text-white font-secondary">
      <Container>
        <Flex className="px-5 md:px-0">
        <div className="logo">
          <Logo/>
        </div>
        <div className="items">
          <ul>
            <Flex className='flex-row hidden md:flex gap-x-[35px]'>
          {
            navItems.map((item)=>(
              <li className='hover:text-primary font-medium'><a href={item.link}>{item.item}</a></li>
            ))
          }
            </Flex>
          </ul>
        </div>
        <div className="details hidden md:block">
        <RoundedElemText  className="mx-auto" onClick={() => {
    console.log("clicked");
    setTalk(true);
  }}svg={<FiArrowUpRight />
    }>Let's Talk
                </RoundedElemText>
        </div>
          {
            show ? <IoMdClose  onClick={()=>setShow(!show)}  className='md:hidden text-4xl'/> : <TbMenu4 onClick={()=>setShow(!show)}  className='md:hidden text-4xl'/>
          }


        </Flex>
        {
            show && (
<div>
<div className="items">
              <ul>
                <Flex className='flex-col md:hidden gap-y-[15px]'>
              {
                navItems.map((item)=>(
                  <li className='hover:text-primary font-medium'><a href={item.link}>{item.item}</a></li>
                ))
              }
                </Flex>
              </ul>
            </div>
            <hr className='border-primary my-[20px] w-[50%] mx-auto'/>
            <div className="details  w-full text-center md:hidden">
              <RoundedElemText  className="mx-auto" onClick={() => {
    console.log("clicked");
    setTalk(true);
  }}svg={<FiArrowUpRight />
    }>Let's Talk
                </RoundedElemText>
            </div>
            </div>
            )
          }
          {talk && (
            <div data-aos="fade-left"
              className="talk font-secondary bg-bg fixed right-0 top-0 w-[391px] h-[905px] px-[43px] py-[37px]"
            >
              <RoundIconBox>
                <LuArrowUpLeft  onClick={() => setTalk(false)} className='text-4xl cursor-pointer' />
              </RoundIconBox>
              <div className="logo mt-[50px] mb-6">
                <Logo/>
              </div>
              <h4 className='text-[22px] mb-[20px]'>Unique Digital Ideas for
              Successful Business</h4>
              <p className='opacity-80'>Sed ut perspiciatis unde omnin natus
              totam rem aperiam eaque.</p>

              <div className="address mt-[53px] mb-9">
              <h4 className='text-[24px] mb-3 md:mb-[38px] font-bold'>Address</h4>
          <ul>
            <li className='mb-[15px]'>Mohammadpur, Dhaka, Bangladesh</li>
            <li className='mb-[15px]'>meherajhosen786@gmail.com</li>
            <li>+880 1989162543</li>
            {/* <a href='https://api.whatsapp.com/send?phone=1989162543&text=I%20want%20to%20know%20about%20your%20products?' target='blank'>Whatsapp</a> */}
          </ul>
              </div>
              <div className="follow">
              <h4 className='text-[24px] mt-[75px] mb-3 md:mb-[38px] font-bold'>Follow Me</h4>
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

              
            </div>
          )}
      </Container>
    </div>
    </>
  )
}

export default Navbar