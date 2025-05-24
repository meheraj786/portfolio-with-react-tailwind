import React, { useEffect } from 'react'
import Container from "../../layouts/Container"
import Flex from '../../layouts/Flex'
import RoundedElemText from '../../layouts/RoundedElemText'
import { GoNorthStar } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about py-[150px] bg-dark-bg">
      <Container>
        <Flex className="bg-black text-center md:text-left flex-col md:flex-row px-3 md:px-[77px] py-[91px] rounded-[10px]">
          <div data-aos="fade-down-right" className="about-left  md:w-[50%]">
            <p className='text-body mb-2 text-white'>About Me</p>
            <h3 className='text-white md:text-subheading text-subheading-sm font-bold md:w-[510px] font-primary'>Professional <span className='text-primary'>Problem Solutions </span>
            For Digital Products</h3>
            <p className='md:text-body text-body-sm mt-4 mb-9 md:w-[350px] text-white'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc</p>

<Flex className="md:gap-[39px] flex-col md:flex-row gap-y-5 md:gap-y-0 mb-6 md:w-[511px]">
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
</Flex>
<Flex className="md:gap-[39px] flex-col md:flex-row gap-y-5 md:gap-y-0 md:w-[511px]">
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
</Flex>

          </div>
          <div data-aos="fade-down-left" className="about-right  mt-5 md:mt-0 relative md:w-[50%]">
            <div className="img group border border-black hover:border hover:border-primary ms-auto relative bg-white max-w-[346px] min-w-[300px] h-[363px] font-semibold  rounded-[10px]">
              <span className='bg-white text-black 
              px-[15px] group-hover:border group-hover:border-primary py-[13px] rounded-[30px] absolute md:left-[-69px] left-1/2 -translate-1/2 md:-translate-0 md:bottom-[142px] bottom-[-40px]'>MERN Stack Developer</span>
              <span className='bg-white text-black 
              px-[44px] group-hover:border group-hover:border-primary py-[13px] font-semibold  rounded-[30px] absolute md:left-[-152px] left-1/2 -translate-1/2 md:-translate-0 bottom-[-120px] md:bottom-[46px]'>Meheraj Hosen</span>
            </div>
            <GoNorthStar className='text-primary w-[96px] h-[95px] hidden md:block absolute top-0 left-0'/>
          </div>
        </Flex>
      </Container>

    </div>
  )
}

export default About