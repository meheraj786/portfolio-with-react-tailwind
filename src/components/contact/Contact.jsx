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

  const successToast= 
  (<div id="toast-success" className="flex absolute z-[99999] top-40 bg-bg left-1/2 -translate-x-1/2 items-center w-full max-w-xs p-4 mb-4  text-primary rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">Succesfull.</div>
    <button type="button" onClick={()=>setShow(false)} className="ms-auto -mx-1.5 -my-1.5 bg-dark-bg text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>)
const unsuccessToast= (<div id="toast-danger" className="flex absolute z-[99999] top-40 bg-bg left-1/2 -translate-x-1/2 items-center w-full max-w-xs p-4 mb-4  text-primary rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
  <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
      </svg>
      <span className="sr-only">Error icon</span>
  </div>
  <div className="ms-3 text-sm font-normal">Item has been deleted.</div>
  <button onClick={()=>setShow(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-dark-bg text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      <span className="sr-only">Close</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
  </button>
</div>)

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
    {show && successToast}
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
    <label htmlFor="">Your Name</label>
  <input type="text" className='placeholder:text-grey-200 md:w-[350px] ml-5 md:ml-0 my-3 p-5 rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label htmlFor="">Your Email</label>
  <input type="email" className='placeholder:text-grey-200 p-5 md:w-[350px] ml-5 md:ml-0 my-3 rounded-[20px] bg-black' placeholder='Your Email' />
  </div>
</Flex>
<Flex className="md:flex-row flex-col">
  <div>
    <label htmlFor="">Your Number</label>
  <input type="number" className='placeholder:text-grey-200 md:w-[350px] ml-3 md:ml-0 my-3 p-5 rounded-[20px] bg-black' placeholder='Your Name' />
  </div>
  <div>
  <label htmlFor="">Your Subject</label>
  <input type="text" className='placeholder:text-grey-200 p-5 md:w-[350px] ml-3 md:ml-0 my-3 rounded-[20px] bg-black' placeholder='Your Email' />
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