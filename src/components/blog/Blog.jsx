import React, { useEffect } from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import RoundedElemText from '../../layouts/RoundedElemText'
import { FiArrowUpRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const blogs= [
    {
      date: "12 Feb 2023",
      title: "How to build a responsive website",
      link: "#",
      image: ""
    },
      {
        date: "12 Feb 2023",
        title: "How to build a responsive website",
        link: "#",
        image: ""
      },
      {
        date: "12 Feb 2023",
        title: "How to build a responsive website",
        link: "#",
        image: ""
      },
      {
        date: "12 Feb 2023",
        title: "How to build a responsive website",
        link: "#",
        image: ""
      },
  ]
  return (
    <div className="blog overflow-x-hidden py-[60px] md:py-[107px] text-white bg-dark-bg">
      <Container>
        <div data-aos="zoom-in" className="title text-center">
          <p>News & Blog</p>
          <h2 className='font-primary mt-[30px] mb-[76px] font-bold text-heading-sm md:text-heading'>Latest News & <span className='text-primary'>Blog</span></h2>
        </div>
        <div data-aos="flip-up" className="blogs">
          <Flex className="flex-wrap gap-y-[30px]">
            {
              blogs.map((blog, index) => (
                <Flex key={index} className="blog-item mx-auto md:gap-x-[38px] md:flex-row flex-col border max-w-[630px] border-black group hover:border-primary rounded-[20px] py-[18px] px-[20px] bg-black">
                  <div className="image rounded-[10px] w-[209px] h-[191px] mb-5 md:mb-0 bg-amber-50">
                    <img src={blog.image} alt="" />
                  </div>
                  <div className="content md:text-left text-center md:text-0 max-w-[395px]">
                    <p>{blog.date}</p>
                    <h3 className='group-hover:text-primary font-primary text-subheading-sm md:text-subheading font-bold mt-[3px] max-w-[295px] mb-[6px]'>{blog.title}</h3>
                    <a href={blog.link}>
                      <RoundedElemText className="mx-auto md:mx-0"  svg={<FiArrowUpRight/>}>
                        Read More
                      </RoundedElemText>
                    </a>
                  </div>
                </Flex>
              ))
            }
          </Flex>

        </div>
        <RoundedElemText className="text-center md:text-subheading text-subheading-sm mx-auto mt-[80px] md:mt-[158px] font-bold" svg={<FiArrowUpRight/>}>View More</RoundedElemText>
      </Container>

    </div>
  )
}

export default Blog