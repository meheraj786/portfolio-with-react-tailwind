import React, { useEffect } from 'react'
import Container from '../../layouts/Container'
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiDownload } from "react-icons/fi";
import Flex from '../../layouts/Flex'
import BannerShape from '../../assets/BannerShape';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeEffect } from '../typeEffect/TypeEffect';


const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="banner overflow-x-hidden md:pt-[203px] pt-[140px]  pb-[88px] bg-dark-bg">
      <div className="circle-violet absolute w-[152px] h-[152px] left-[10%] top-[40%] animate-pulse rounded-full bg-[rgba(47,17,30,0.48)] shadow-[0_0_100px_100px_rgba(47,17,30,0.48)]">
        

      </div>
      <div className="circle-blue absolute w-[152px] h-[152px] right-[10%] top-[10%] animate-pulse rounded-full bg-[rgba(82,73,206,0.21)] shadow-[0_0_100px_100px_rgba(82,73,206,0.21)]"></div>
      <Container>
        <Flex className="flex-col md:flex-row">
          <div data-aos="fade-right" className="banner_left  text-center md:text-left md:w-[50%] font-secondary">
            <h5 className='md:text-[32px] font-medium text-primary'>Hello I'm</h5>
            <h1 className='font-secondary mt-[15px] md:mt-[27px] stroke-text-white mb-[12px] text-[68px] md:text-[98px] font-bold text-white '>Meheraj Hosen</h1>
            <h3 className='md:text-subheading text-subheading-sm font-primary font-medium text-white'>I'm <span className='text-primary'><TypeEffect/></span></h3>
            <p className='md:text-body px-2 md:px-0 text-body-sm mt-[27px] mb-[54px] text-white md:w-[450px] '>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highlyfunctional websites</p>
          <RoundedElemText className="justify-center md:justify-start" svg={<FiDownload />
}>Download My Resume</RoundedElemText>
          </div>
          <div data-aos="fade-left" className="banner_right flex justify-center md:w-[50%]">
            <BannerShape className="w-[50px]"/>
          </div>
        </Flex>

      </Container>

    </div>
  )
}

export default Banner