import React, { useEffect } from 'react'
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
import Container from '../layouts/Container';
import Flex from '../layouts/Flex';
import RoundedElemText from '../layouts/RoundedElemText';
import { FaGit } from "react-icons/fa";






const SkillPage = () => {
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
    {
      icon: <FaGit />,
      name: "Git",
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
    <div id='skill' className="skill pt-[200px] bg-cover overflow-x-hidden text-white font-secondary bg-dark-bg">
      <Container>
        <Flex className="bg-black flex-col text-center  gap-[65px] rounded-[20px] px-[90px] py-[74px]">
          <div data-aos="zoom-in-right" className="skill-left ">
            <p>My Skill</p>
            <h3 className='text-heading-sm md:text-heading mt-2 mb-4 font-primary font-bold w-[349px] md:w-[80%] mx-auto'>Let’s Explore Popular <span className='text-primary'>Skills &  Experience</span></h3>
            <p className='max-w-[349px] mx-auto md:text-body text-body-sm'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc</p>
          </div>
          <div data-aos="zoom-in-left" className="skill-right w-[70%]">
            <Flex className="flex-wrap  w-full mx-auto md:gap-y-[43px] gap-y-5">
              {
                skills.map((skill)=>(
                  <Flex className='text-center flex-col border mx-auto md:mx-0 border-bg bg-dark-bg cursor-pointer group hover:border-primary rounded-[20px] pb-2 w-[161px] pt-[27px] px-[11px] '>
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

export default SkillPage