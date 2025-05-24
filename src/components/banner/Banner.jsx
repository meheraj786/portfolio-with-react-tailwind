import React from 'react'
import Container from '../../layouts/Container'
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiDownload } from "react-icons/fi";
import Flex from '../../layouts/Flex'
import BannerShape from '../../assets/BannerShape';


const Banner = () => {
  return (
    <div className="banner md:pt-[203px] pt-[120px]  pb-[88px] bg-dark-bg">
      <Container>
        <Flex className="flex-col md:flex-row">
          <div className="banner_left text-center md:text-left md:w-[50%] font-secondary">
            <h5 className='md:text-[32px] font-medium text-primary'>Hello I'm</h5>
            <h1 className='font-secondary mt-[15px] md:mt-[27px] mb-[12px] text-[68px] md:text-[98px] font-bold text-white'>Meheraj Hosen</h1>
            <h3 className='md:text-subheading text-subheading-sm font-primary font-medium text-white'>I'm <span className='text-primary'>MERN Stack Developer</span></h3>
            <p className='md:text-body px-2 md:px-0 text-body-sm mt-[27px] mb-[54px] text-white md:w-[450px] '>A passionate web developer based from Bangladesh.With a keen eye for detail and a passion for web design, I specialize in creating visually captivating and highlyfunctional websites</p>
          <RoundedElemText className="mx-auto md:mx-0" svg={<FiDownload />
}>Download My Resume</RoundedElemText>
          </div>
          <div className="banner_right flex justify-center md:w-[50%]">
            <BannerShape className="w-[50px]"/>
          </div>
        </Flex>

      </Container>

    </div>
  )
}

export default Banner