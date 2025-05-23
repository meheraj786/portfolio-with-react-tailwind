import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { GoNorthStar } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import RoundedElemText from '../../layouts/RoundedElemText';

const Contact = () => {
  const items= ["2 years of experience", "10+ Projects Completed", "5+ Clients Worked"]
  return (
    <div className="contact py-[121px] bg-dark-bg text-white">
      <Container>
        <Flex>
          <div className="left ">
          <p>Get In Touch</p>
            <h2 className='font-primary max-w-[349px] text-subheading font-bold mt-2 mb-4'>Let’s Talk For your  
            <span className='text-primary'> Next Projects</span></h2>
            <p className='text-body max-w-[349px] font-regular'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc.</p>
            <div className='space-y-4 mt-[57px]'>
              {
                items.map((item) => (
                  <RoundedElemText className="font-medium flex-row-reverse text-body" svg={<GoNorthStar/>}>
{item}
                  </RoundedElemText>
                ))
              }
            </div>
          </div>
          <div className="right md:w-[60%]">
            <form action="">
<Flex className="">
  <div>
    <label htmlFor="">Your Name</label>
  <input type="text" className='placeholder:text-grey-200 w-[350px] my-3 p-5 rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label htmlFor="">Your Email</label>
  <input type="email" className='placeholder:text-grey-200 p-5 w-[350px] my-3 rounded-[20px] bg-black' placeholder='Your Email' />
  </div>
</Flex>
<Flex className="">
  <div>
    <label htmlFor="">Your Number</label>
  <input type="number" className='placeholder:text-grey-200 w-[350px] my-3 p-5 rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label htmlFor="">Your Subject</label>
  <input type="text" className='placeholder:text-grey-200 p-5 w-[350px] my-3 rounded-[20px] bg-black' placeholder='Your Email' />
  </div>
</Flex>
<label htmlFor="">Your Message</label>

              <textarea name="" id="" className='placeholder:text-grey-200 w-[735px] p-5 rounded-[20px] my-3 p bg-black' cols="30" rows="10" placeholder='Your Message'></textarea>
              <button className='flex bg-primary rounded-[20px] text-black text-[18px] font-medium cursor-pointer hover:bg-dark-bg hvoer:border-primary hover:text-primary border border-primary items-center gap-3 p-[20px]' type="submit">Submit <span className='text-2xl'><FiArrowUpRight/></span></button>
            </form>
          </div>

        </Flex>
      </Container>

    </div>
  )
}

export default Contact