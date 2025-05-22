import React from 'react'
import Container from "../../layouts/Container"
import Flex from '../../layouts/Flex'
import RoundedElemText from '../../layouts/RoundedElemText'
import { GoNorthStar } from "react-icons/go";

const About = () => {
  return (
    <div className="about py-[150px] bg-dark-bg">
      <Container>
        <Flex className="bg-black px-[77px] py-[91px] rounded-[10px]">
          <div className="about-left md:w-[50%]">
            <p className='text-body mb-2 text-white'>About Me</p>
            <h3 className='text-white text-subheading font-bold md:w-[510px] font-primary'>Professional <span className='text-primary'>Problem Solutions </span>
            For Digital Products</h3>
            <p className='text-body mt-4 mb-9 md:w-[350px] text-white'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc</p>

<Flex className="gap-[39px] mb-6 w-[511px]">
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
</Flex>
<Flex className="gap-[39px] w-[511px]">
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
  <RoundedElemText className="flex-row-reverse" svg={<GoNorthStar/>}>Front-end Design</RoundedElemText>
</Flex>

          </div>
          <div className="about-right relative md:w-[50%]">
            <div className="img group border border-black hover:border hover:border-primary ms-auto relative bg-white max-w-[346px] h-[363px] font-semibold  rounded-[10px]">
              <span className='bg-white text-black 
              px-[15px] group-hover:border group-hover:border-primary py-[13px] rounded-[30px] absolute left-[-69px] bottom-[142px]'>MERN Stack Developer</span>
              <span className='bg-white text-black 
              px-[44px] group-hover:border group-hover:border-primary py-[13px] font-semibold  rounded-[30px] absolute left-[-152px] bottom-[46px]'>Meheraj Hosen</span>

            </div>
            <GoNorthStar className='text-primary w-[96px] h-[95px] absolute top-0 left-0'/>


          </div>
        </Flex>

      </Container>

    </div>
  )
}

export default About