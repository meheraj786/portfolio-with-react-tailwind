import React, { useEffect } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import RoundIconBox from '../../layouts/RoundIconBox';
import { FiArrowUpRight } from "react-icons/fi";
import RoundedElemText from '../../layouts/RoundedElemText';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Projects = ({projects}) => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // const projects= [
  //   {
  //     img: project1,
  //     category: "Web Design",
  //     title: "A Simple Website Design with Figma",
  //     description: "Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis",
  //     link: "#"
  //   },
  //   {
  //     img: project2,
  //     category: "Web Design",
  //     title: "Another Design in Figma",
  //     description: "Voluptatem accusantium doloremque laudantium, totam rem aperiam",
  //     link: "#"
  //   },
  //   {
  //     img: project3,
  //     category: "UI/UX",
  //     title: "Mobile App Design",
  //     description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
  //     link: "#"
  //   },
  // ];

  return (
    <div id='projects' className="projects  relative overflow-x-hidden bg-dark-bg text-white font-secondary py-[50px] md:py-[99px]">
            <div className="circle-violet absolute w-[152px] h-[152px] left-[10%] top-[40%] animate-pulse rounded-full bg-[rgba(47,17,30,0.48)] shadow-[0_0_100px_100px_rgba(47,17,30,0.48)]">
        

        </div>
        <div className="circle-blue absolute w-[152px] h-[152px] right-[10%] top-[10%] animate-pulse rounded-full bg-[rgba(82,73,206,0.21)] shadow-[0_0_100px_100px_rgba(82,73,206,0.21)]"></div>
      <Container>
        <div data-aos="zoom-in" className="title text-center">
          <p>Latest Works</p>
          <h2 className='font-primary mt-[22px] mb-[63px] font-bold text-heading-sm md:text-heading'>Explore My Popular <span className='text-primary'>Projects</span></h2>
        </div>
        <div className="projects space-y-10">
          {
            projects.slice(0,3).map((project, index) => (
              <Flex key={index} className={index % 2 !== 0 ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"}>
                <div data-aos="flip-left" className="left  mb-5 md:mb-0 w-full md:w-1/2">
                <div className="image max-w-[645px] h-[500px] bg-amber-50 rounded-[10px] overflow-y-auto" >
                  <img src={project.img} alt="" />

                </div>
                </div>
                <div data-aos="flip-right" className="right text-center md:text-left">
                <p className='font-medium  text-primary text-body-sm md:text-body'>{project.category}</p>
                <h3 className='text-subheading-sm md:text-subheading font-primary max-w-[529px]  font-bold mt-3 mb-[17px]'>{project.title}</h3>
                <p className='font-medium text-body-sm md:text-body mb-[55px] mx-auto md:mx-0 max-w-[392px]'>{project.description}</p>
                <a target='blank' href={project.link}><RoundIconBox className='mx-auto cursor-pointer md:mx-0'><FiArrowUpRight/></RoundIconBox></a>

                </div>
              </Flex>
            ))
          }
        </div>
        <Link to="/projects">
        <RoundedElemText className="text-center md:text-subheading text-subheading-sm mx-auto mt-[80px] md:mt-[158px] font-bold" svg={<FiArrowUpRight/>}>View More</RoundedElemText>
        
        </Link>
      </Container>
    </div>
  );
};

export default Projects;
