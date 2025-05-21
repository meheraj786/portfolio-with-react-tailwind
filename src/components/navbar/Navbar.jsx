import React from 'react'
import RoundIconBox from '../../layouts/RoundIconBox'
import Container from '../../layouts/Container'
import Flex from "../../layouts/Flex"
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiArrowUpRight } from "react-icons/fi";


const Navbar = () => {
  const navItems=[
    {
      item:"Home",
      link: "#"
    },
    {
      item:"About",
      link: "#"
    },
    {
      item:"Services",
      link: "#"
    },
    {
      item:"Skill",
      link: "#"
    },
    {
      item:"Projects",
      link: "#"
    },
    {
      item:"Contact",
      link: "#"
    },
  ]
  return (
    <>
    <div className="navbar py-6 bg-bg text-white font-secondary">
      <Container>
        <Flex>
        <div className="logo">Meheraj</div>
        <div className="items">
          <ul>
            <Flex className='flex-row gap-x-[35px]'>
          {
            navItems.map((item)=>(
              <li className='hover:text-primary font-medium'><a href={item.link}>{item.item}</a></li>
            ))
          }
            </Flex>
          </ul>
        </div>
        <div className="details group">
          <RoundedElemText svg={<FiArrowUpRight />
}>Let's Talk</RoundedElemText>
        </div>

        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Navbar