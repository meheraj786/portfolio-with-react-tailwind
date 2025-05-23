import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { GoNorthStar } from "react-icons/go";
import RoundIconBox from '../../layouts/RoundIconBox';

const Services = () => {
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
    <div className="services relative bg-dark-bg text-white pt-[103px] pb-[128px] font-secondary">
      <Container>
        <div className="title text-center">
          <p className='text-body'>Popular Services</p>
          <h2 className='text-heading font-primary max-w-[602px] mx-auto font-bold mt-[26px] mb-[40px]'>My <span className='text-primary'>Special Service </span> For your Business Development</h2>
        </div>
        <Flex className="gap-x-[120px] flex-wrap gap-y-[98px]">
          {
            items.map((item)=>(
              <div className='py-[35px] rounded-[20px] border border-bg group  hover:border-primary md:w-[576px] bg-bg px-[20px] '>
                <Flex>
                <div>
                <h3 className='text-subheading font-primary font-bold mb-[7px]'>{item.title}</h3>
                <p className='text-body'>{item.description}</p>
                </div>
                <RoundIconBox className="group-hover:bg-bg group-hover:text-primary">
                <GoNorthStar/>
                </RoundIconBox>
                </Flex>
              </div>
            ))
          }
        </Flex>
        <GoNorthStar className="absolute text-primary w-[96px] h-[95px] top-[55%] left-1/2 -translate-x-1/2 "/>

        
      </Container>

    </div>
  )
}

export default Services