import React, { useEffect } from 'react'
import { GoNorthStar } from "react-icons/go";

import Flex from '../../layouts/Flex'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Marquee = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const texts=["WEB DEVELOPMENT", "MERN STACK DEVELOPMEN", 'FRONT END DEVELOPMENT', 'BACKEND DEVELOPMENT', 'APP DEVELOPMENT']
  return (
    <div  className='py-[40px] overflow-x-hidden data-aos="fade-up" flex items-center md:text-[72px] text-[42px] font-bold font-primary bg-primary text-bg'>


      
      <marquee data-aos="fade-up" behavior="" direction="left">
              <Flex className="gap-[50px]">
                
{
  texts.map((text)=>(
    
    <Flex className="font-primary justify-center font-black items-center gap-[50px]"> 
  {text} <GoNorthStar />

</Flex>

  ))
}
</Flex>
      </marquee>
    </div>
  )
}

export default Marquee