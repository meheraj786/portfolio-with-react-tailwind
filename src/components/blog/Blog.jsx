import React, { useEffect } from "react";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";
import RoundedElemText from "../../layouts/RoundedElemText";
import { FiArrowUpRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blog = ({blogs}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // const blogs = [
  //   {
  //     date: "12 Feb 2023",
  //     title: "How to build a responsive website",
  //     link: "#",
  //     image: blog1,
  //   },
  //   {
  //     date: "12 Feb 2023",
  //     title: "How to build a responsive website",
  //     link: "#",
  //     image: blog1,
  //   },
  //   {
  //     date: "12 Feb 2023",
  //     title: "How to build a responsive website",
  //     link: "#",
  //     image: blog1,
  //   },
  //   {
  //     date: "12 Feb 2023",
  //     title: "How to build a responsive website",
  //     link: "#",
  //     image: blog1,
  //   },
  // ];
  return (
    <div id="blog" className="blog  relative overflow-x-hidden py-[60px] md:py-[107px] text-white bg-dark-bg">
      <div className="circle-blue absolute w-[152px] h-[152px] right-[10%] top-[10%] animate-pulse rounded-full bg-[rgba(82,73,206,0.21)] shadow-[0_0_100px_100px_rgba(82,73,206,0.21)]"></div>
      <Container>
        <div data-aos="zoom-in" className="title text-center">
          <p>News & Blog</p>
          <h2 className="font-primary mt-[30px] mb-[76px] font-bold text-heading-sm md:text-heading">
            Latest News & <span className="text-primary">Blog</span>
          </h2>
        </div>
        <div data-aos="flip-up" className="blogs">
        <Flex className="flex-wrap gap-y-[30px]">
            {blogs.slice(0,4).map((blog, index) => (
              <Flex
  key={index}
  className="blog-item mx-auto md:gap-x-[38px] w-[630px] md:h-[270px] max-w-[630px] md:flex-row flex-col border border-black group hover:border-primary rounded-[20px] py-[18px] px-[20px] bg-black"
>
  {/* Image Section */}
  <div
    className="image rounded-[10px] w-[209px] h-[191px] mb-5 md:mb-0 bg-amber-50 shrink-0"
    style={{
      background: `url(${blog.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>

  {/* Content Section */}
  <div className="content md:text-left text-center flex flex-col h-[100%] justify-between max-w-[395px] w-full">
    <div>
      <p>{blog.date}</p>
      <h3 className="group-hover:text-primary font-primary text-subheading-sm md:text-subheading font-bold mt-[3px] mx-auto md:mx-0 max-w-[295px] mb-[6px]">
        {blog.title}
      </h3>
    </div>

    <Link to={`/blogs/${blog.id}`}> 
      <RoundedElemText
        className="md:justify-start justify-center"
        svg={<FiArrowUpRight />}
      >
        Read More
      </RoundedElemText>
    </Link>
  </div>
</Flex>


            ))}
          </Flex>
        </div>
        <Link to="/blog">
        <RoundedElemText
          className="text-center md:text-subheading text-subheading-sm mx-auto mt-[80px] md:mt-[158px] font-bold"
          svg={<FiArrowUpRight />}
        >
          View More
        </RoundedElemText>
        
        </Link>
      </Container>
    </div>
  );
};

export default Blog;
