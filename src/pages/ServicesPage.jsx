import React, { useEffect } from 'react'
import Container from '../layouts/Container'
import Flex from '../layouts/Flex'
import { GoNorthStar } from "react-icons/go";
import RoundIconBox from '../layouts/RoundIconBox';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const aosAnimations = [
    "fade-down-right",
    "fade-down-left",
    "fade-up-right",
    "fade-up-left"
  ];
  const items= [
    {
      title: "Responsive Web Design",
      description: "Responsive web design for any device"
    },
    {
      title: "React Development",
      description: "Be a part of front end revolutionary tech like React js"
    },
    {
      title: "Powerful Backend Dev",
      description: "unleash the power of express and node js with me"
    },
    {
      title: "Modern and smart DataBase",
      description: "Let’s keep your valuable data in Mongo-DB with me"
    },
  ]
  return (
    <div id='services' className="service bg-no-repeat bg-cover overflow-x-hidden relative bg-dark-bg text-white pt-[183px] pb-[128px] font-secondary">
      <Container>
        <div data-aos="zoom-in" className="title text-center">
          <p className='text-body'>Popular Services</p>
          <h2 className='md:text-heading text-heading-sm font-primary max-w-[602px] mx-auto font-bold mt-[26px] mb-[40px]'>My <span className='text-primary'>Special Service </span> For your Business Development</h2>
        </div>
        <Flex className="gap-x-[120px] flex-wrap md:gap-y-[98px] gap-y-8">
        {
  items.map((item, index) => {
    const aosType = aosAnimations[index % aosAnimations.length]; // loop through animations if items > 4
    return (
      <div
        key={index}
        data-aos={aosType}
        className="py-[35px]  rounded-[20px] border border-bg group w-full hover:border-primary md:w-[576px] bg-bg px-[20px]"
      >
        <Flex>
          <div>
            <h3 className="text-subheading-sm md:text-subheading font-primary font-bold mb-[7px]">
              {item.title}
            </h3>
            <p className="text-body-sm md:text-body">{item.description}</p>
          </div>
          <RoundIconBox className="group-hover:bg-bg group-hover:text-primary">
            <GoNorthStar />
          </RoundIconBox>
        </Flex>
      </div>
    );
  })
}
        </Flex>
        <GoNorthStar className="absolute hidden md:block text-primary w-[96px] animate-pulse h-[95px] top-[60%] left-1/2 -translate-x-1/2 "/>

        
      </Container>

    </div>
  )
}

export default ServicesPage