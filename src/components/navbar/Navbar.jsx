import React, { useState } from 'react'
import Container from '../../layouts/Container'
import Flex from "../../layouts/Flex"
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiArrowUpRight } from "react-icons/fi";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import RoundIconBox from '../../layouts/RoundIconBox';




const Navbar = () => {
  const [show, setShow] = useState(false);
  const [talk, setTalk] = useState(false);
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
        <div className="logo">Meheraj</div>
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
            <div
              className="talk bg-bg fixed right-0 top-0 md:w-[391px] max-h-[905px] px-[43px] py-[37px]"
            >
              <RoundIconBox>
                <IoMdClose onClick={() => setTalk(false)} className='text-4xl cursor-pointer' />
              </RoundIconBox>
              <div className="logo">
                Meheraj
              </div>
              <h4>Unique Digital Ideas for
              Successful Business</h4>
              <p>Sed ut perspiciatis unde omnin natus
              totam rem aperiam eaque.</p>

              <div className="address">
                <h4>Address</h4>
                <ul>
                  <li></li>
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