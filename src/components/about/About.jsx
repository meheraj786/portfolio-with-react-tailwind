import React, { useEffect, useRef, useState } from 'react'
import Container from "../../layouts/Container"
import Flex from '../../layouts/Flex'
import { GoNorthStar } from "react-icons/go"
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from "react-countup"

const About = () => {
  const [startCount, setStartCount] = useState(false)
  const triggerRef = useRef(null) // separate trigger div

  useEffect(() => {
    AOS.init({ duration: 1000 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
        }
      },
      { threshold: 0.5 }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [])

  return (
    <div id='about' className="about relative overflow-x-hidden py-[150px] font-secondary bg-dark-bg">
      <div className="circle-blue absolute w-[152px] h-[152px] left-[10%] top-[20%] animate-pulse rounded-full bg-[rgba(82,73,206,0.21)] shadow-[0_0_100px_100px_rgba(82,73,206,0.21)]"></div>
      
      <Container>
        <Flex className="bg-black text-center md:text-left flex-col md:flex-row px-3 md:px-[77px] py-[91px] rounded-[10px]">
          <div data-aos="fade-down-right" className="about-left md:w-[50%]">
            <p className='text-body mb-2 text-white'>About Me</p>
            <h3 className='text-white md:text-subheading text-subheading-sm font-bold md:w-[510px] font-primary'>
              Professional <span className='text-primary'>Problem Solutions</span> For Digital Products
            </h3>
            <p className='md:text-body text-body-sm mt-4 mb-9 md:w-[450px] text-white'>
            A Passionate MERN stack Dev and Tech Enthusiast from the Milky Way Galaxy, within the Orion Arm, orbiting the Sol (Sun) star, living on the third orbital planet named Earth(A Blue Planet), in the continent of Asia, in the country of Bangladesh, in the city of Dhaka — a negligible being in the grand scheme of the cosmos.
            </p>

            {/* Invisible trigger div */}
            <div ref={triggerRef} className="w-full h-[1px]"></div>

            {/* CountUp Cards */}
            <Flex className="md:gap-[39px] flex-wrap gap-y-5 md:w-[511px] justify-center md:justify-start mt-6">
              {[
                { label: "Years Experience", end: 3 },
                { label: "Projects Completed", end: 120 },
                { label: "Happy Clients", end: 45 },
                { label: "Technologies Used", end: 20 }
              ].map((item, i) => (
                <div key={i} className="bg-bg text-black px-6 py-4 rounded-[30px] w-[220px] text-center">
                  <h3 className="text-3xl font-counter font-bold text-primary">
                    <CountUp className='font-counter' start={startCount ? 0 : null} end={item.end} duration={2 + i} />
                  </h3>
                  <p className="text-sm mt-1 font-medium text-white">{item.label}</p>
                </div>
              ))}
            </Flex>
          </div>

          <div data-aos="fade-down-left" className="about-right mt-5 md:mt-0 relative md:w-[50%]">
            <div className="img 
bg-[url(assets/aboutImage.jpg)] grayscale-50 hover:grayscale-0 bg-cover group border border-black hover:border hover:border-primary ms-auto relative bg-white max-w-[346px] min-w-[300px] h-[363px] font-semibold rounded-[10px]">
              <span className='bg-white text-black px-[15px] group-hover:border group-hover:border-primary py-[13px] rounded-[30px] absolute md:left-[-99px] left-1/2 -translate-x-1/2 md:-translate-x-0 md:bottom-[142px] bottom-[-40px]'>
                MERN Stack Developer
              </span>
              <span className='bg-white text-black px-[44px] group-hover:border group-hover:border-primary py-[13px] font-semibold rounded-[30px] absolute md:left-[-162px] left-1/2 -translate-x-1/2 md:-translate-x-0 bottom-[-120px] md:bottom-[46px]'>
                Meheraj Hosen
              </span>
            </div>
            <GoNorthStar className='text-primary w-[96px] h-[95px] animate-pulse hidden md:block absolute top-0 left-0' />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default About
