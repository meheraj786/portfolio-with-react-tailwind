import React, { useEffect, useState } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import { GoNorthStar } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import RoundedElemText from '../../layouts/RoundedElemText';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {
  const [show, setShow]= useState(false)




useEffect(() => {
  const timer = setTimeout(() => {
    setShow(false);
  }, 2000);

  return () => clearTimeout(timer);
}, [show]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const items= ["2 years of experience", "10+ Projects Completed", "5+ Clients Worked"]
  return (
    <>

    <div id='contact' className="contact relative overflow-x-hidden pt-[70px] md:py-[121px] font-secondary bg-dark-bg text-white">
      <div className="circle-violet absolute w-[152px] h-[152px] left-[10%] top-[40%] animate-pulse rounded-full bg-[rgba(47,17,30,0.48)] shadow-[0_0_100px_100px_rgba(47,17,30,0.48)]">
        

        </div>
      <Container>
        <Flex className="flex-col md:flex-row">
          <div data-aos="zoom-in-right" className="left text-center md:text-left">
          <p>Get In Touch</p>
            <h2 className='font-primary max-w-[349px] md:text-subheading text-subheading-sm font-bold mt-2 mb-4'>Let’s Talk For your  
            <span className='text-primary'> Next Projects</span></h2>
            <p className='md:text-body text-body-sm max-w-[349px] font-regular'>Sed ut perspiciatis unde omnis iste natus to
voluptatem accusantium doloremque
laudantium, totam rem aperiamc.</p>
            <div className='space-y-4  mt-[57px]'>
              {
                items.map((item) => (
                  <RoundedElemText className="font-medium  flex-row-reverse mb-5 md:justify-end justify-center text-body" svg={<GoNorthStar/>}>
{item}
                  </RoundedElemText>
                ))
              }
            </div>
          </div>
          <div data-aos="zoom-in-left" className="right md:w-[60%]">
            <form className='' action="">
<Flex className="flex-col md:flex-row">
  <div>
    <label className='hidden md:inline-block' htmlFor="">Your Name</label>
  <input type="text" className='placeholder:text-grey-200 md:w-[350px] w-full ml-5 md:ml-0 my-3 p-5 rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label className='hidden md:inline-block' htmlFor="">Your Email</label>
  <input type="email" className='placeholder:text-grey-200 p-5 md:w-[350px] w-full ml-5 md:ml-0 my-3 rounded-[20px] bg-black' placeholder='Your Email' />
  </div>
</Flex>
<Flex className="md:flex-row flex-col">
  <div>
    <label className='hidden md:inline-block' htmlFor="">Your Number</label>
  <input type="number" className='placeholder:text-grey-200 md:w-[350px] ml-3 md:ml-0 my-3 p-5 w-full rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label className='hidden md:inline-block' htmlFor="">Your Subject</label>
  <input type="text" className='placeholder:text-grey-200 p-5 md:w-[350px] ml-3 w-full md:ml-0 my-3 rounded-[20px] bg-black' placeholder='Your Email' />
  </div>
</Flex>
<div className='text-center md:text-left'>
<label className='hidden md:block' htmlFor="">Your Message</label>

<textarea name="" id="" className='placeholder:text-grey-200  md:w-[735px] p-5 rounded-[20px] my-3  bg-black' cols="30" rows="10" placeholder='Your Message'></textarea>
<button onClick={() => {
    console.log("Button clicked");
    setShow(false); 
    setTimeout(() => {
      setShow(true); 
      console.log("Show state set to true"); 
    }, 100);
  }}className='flex bg-primary rounded-[20px] text-black text-[18px] font-medium cursor-pointer hover:bg-dark-bg hvoer:border-primary hover:text-primary border border-primary items-center gap-3 p-[20px] mx-auto md:mx-0' type="submit">Submit <span className='text-2xl'><FiArrowUpRight/></span></button>
</div>
            </form>
          </div>

        </Flex>
      </Container>

    </div>
    </>
  )
}

export default Contact