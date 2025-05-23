import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import RoundIconBox from '../../layouts/RoundIconBox';
import { FiArrowUpRight } from "react-icons/fi";
import RoundedElemText from '../../layouts/RoundedElemText';

const Projects = () => {
  const projects= [
    {
      category: "Web Design",
      title: "A Simple Website Design with Figma",
      description: "Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis",
      link: "#"
    },
    {
      category: "Web Design",
      title: "Another Design in Figma",
      description: "Voluptatem accusantium doloremque laudantium, totam rem aperiam",
      link: "#"
    },
    {
      category: "UI/UX",
      title: "Mobile App Design",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      link: "#"
    },
  ];

  return (
    <div className="projects bg-dark-bg text-white font-secondary py-[99px]">
      <Container>
        <div className="title text-center">
          <p>Latest Works</p>
          <h2 className='font-primary mt-[22px] mb-[63px] font-bold text-heading'>Explore My Popular <span className='text-primary'>Projects</span></h2>
        </div>
        <div className="projects space-y-10">
          {
            projects.map((project, index) => (
              <Flex key={index} className={index % 2 !== 0 ? "flex-row-reverse" : ""}>
                <div className="left w-1/2">
                <div className="image max-w-[645px] h-[500px] bg-amber-50 rounded-[10px] overflow-y-auto">

                </div>
                </div>
                <div className="right">
                <p className='font-medium text-primary text-body'>{project.category}</p>
                <h3 className='text-subheading font-primary max-w-[529px] font-bold mt-3 mb-[17px]'>{project.title}</h3>
                <p className='font-medium text-body mb-[55px] max-w-[392px]'>{project.description}</p>
                <a href="#"><RoundIconBox><FiArrowUpRight/></RoundIconBox></a>

                </div>
              </Flex>
            ))
          }
        </div>
        <RoundedElemText className="text-center text-subheading mx-auto mt-[158px] font-bold" svg={<FiArrowUpRight/>}>View More</RoundedElemText>
      </Container>
    </div>
  );
};

export default Projects;
