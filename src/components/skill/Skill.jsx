import React, { useEffect } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiArrowUpRight } from "react-icons/fi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';





const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const skills= [
    {
      icon: <FaFigma />,
      name: "Figma",
      percent: "50%",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      percent: "50%",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      percent: "50%",
    },
    {
      icon: <FaJs />,
      name: "JS",
      percent: "50%",

    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      percent: "50%",

    },
    {
      icon: <FaReact />,
      name: "React",
      percent: "50%",

    },
    {
      icon: <SiExpress />,
      name: "Express",
      percent: "50%",

    },
    {
      icon: <FaNode />,
      name: "NodeJs",
      percent: "50%",

    },
  ]
  return (
    <div id='skill' className="skill bg-[url(assets/lines2.png)] bg-cover overflow-x-hidden text-white font-secondary bg-dark-bg">
      <Container>
        <Flex className="bg-black text-center xl:text-left xl:flex-row flex-col gap-[65px] rounded-[20px] px-[90px] py-[74px]">
          <div data-aos="zoom-in-right" className="skill-left ">
            <p>My Skill</p>
            <h3 className='text-subheading-sm xl:text-subheading mt-2 mb-4 font-primary font-bold w-[349px]'>Let’s Explore Popular <span className='text-primary'>Skills &  Experience</span></h3>
            <p className='max-w-[349px] xl:text-body text-body-sm'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc</p>
<Link to="/skill">
<RoundedElemText className="mt-[87px] xl:justify-start justify-center xl:mx-0" svg={<FiArrowUpRight/>}>
  Learn More
</RoundedElemText></Link>
          </div>
          <div data-aos="zoom-in-left" className="skill-right w-[70%]">
            <Flex className="flex-wrap  w-full mx-auto xl:gap-y-[43px] gap-y-5">
              {
                skills.map((skill)=>(
                  <Flex className='text-center flex-col border mx-auto xl:mx-0 border-bg bg-dark-bg cursor-pointer group hover:border-primary rounded-[20px] pb-2 w-[161px] pt-[27px] px-[11px] '>
                    <i className='text-[60px] mx-auto group-hover:animate-bounce group-hover:text-primary'>{skill.icon}</i>
                    <h4 className='font-primary text-[28px] font-bold mt-2 mb-4'>{skill.name}</h4>
                    <span className='rounded-[10px] px-[38px] bg-black group-hover:bg-primary group-hover:text-black font-bold py-[5px]'>{skill.percent}</span>
                  </Flex>
                ))
              }
            </Flex>
          </div>

        </Flex>
      </Container>
    </div>
  )
}

export default Skill