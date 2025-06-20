import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";
import RoundedElemText from "../../layouts/RoundedElemText";
import { FiArrowUpRight } from "react-icons/fi";
import { TbMenu4 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import RoundIconBox from "../../layouts/RoundIconBox";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { LuArrowUpLeft } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../layouts/Logo";
import { NavLink } from "react-router-dom";
import Mode from "../../layouts/Mode";
import ScrollUpButton from "../../layouts/ScrollUpButton";
import MouseElement from "../../layouts/MouseElement";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [show, setShow] = useState(false);
  const [talk, setTalk] = useState(false);
  const [dark, setDark] = useState(false);

  //   () => {
  //   const storedTheme = localStorage.theme;

  //   if (storedTheme === 'dark' ) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //     return true;
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = 'light';
  //     return false;
  //   }
  // }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const socialIcons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/meheraj786",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mehraj-h/",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/mehrajh786/",
    },
  ];

  const navItems = [
    { item: "Home", link: "/" },
    { item: "About", link: "/about" },
    { item: "Services", link: "/services" },
    { item: "Skill", link: "/skill" },
    { item: "Projects", link: "/projects" },
    { item: "Blog", link: "/blog" },
  ];

  return (
    <>
      <div className="navbar overflow-x-hidden py-6 z-[99999] fixed w-[100vw] bg-bg text-white font-secondary">

      <ScrollUpButton/>
      <MouseElement/>
        <Container>
          <Flex className="px-5 xl:px-0">
            <div className="logo">
              <Logo />
            </div>

            {/* Desktop Nav Items */}
            <div className="items">
              <ul>
                <Flex className='flex-row hidden xl:flex gap-x-[35px]'>
                  {navItems.map((item) => (
                    <li key={item.item} className="font-medium">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary font-semibold"
                            : "hover:text-primary"
                        }
                      >
                        {item.item}
                      </NavLink>
                    </li>
                  ))}
                </Flex>
              </ul>
            </div>

            {/* Desktop Let's Talk Button */}
            <div className="details items-center xl:flex gap-8 hidden ">
              <RoundedElemText
                className="mx-auto"
                onClick={() => setTalk(true)}
                svg={<FiArrowUpRight />}
              >
                Let's Talk
              </RoundedElemText>
            <Mode onClick={()=>setDark(!dark)} mode={dark}/>
            </div>

            {/* Mobile Toggle Button */}
            {show
              ? <IoMdClose onClick={() => setShow(!show)} className='xl:hidden text-4xl' />
              : <TbMenu4 onClick={() => setShow(!show)} className='xl:hidden text-4xl' />}

          </Flex>

          {/* Mobile Nav Items */}
          {show && (
            <div>
              <div className="items">
                <ul>
                  <Flex className='flex-col xl:hidden gap-y-[15px]'>
                    {navItems.map((item) => (
                      <li key={item.item} className="font-medium hover:text-primary">
                        <NavLink
                          to={item.link}
                          onClick={() => setShow(false)} // Auto close on click
                          className={({ isActive }) =>
                            isActive
                              ? "text-primary font-semibold"
                              : "hover:text-primary"
                          }
                        >
                          {item.item}
                        </NavLink>
                      </li>
                    ))}
                  </Flex>
                </ul>
              </div>
              <hr className='border-primary my-[20px] w-[50%] mx-auto' />
              <div className="details w-full text-center xl:hidden">
                <RoundedElemText
                  className="mx-auto mb-5"
                  onClick={() => setTalk(true)}
                  svg={<FiArrowUpRight />}
                >
                  Let's Talk
                </RoundedElemText>
                <Mode onClick={()=>setDark(!dark)} mode={dark}/>

              </div>
            </div>
          )}

          {/* Talk Panel */}
          {talk && (
            <div
              data-aos="fade-left"
              className="talk font-secondary bg-bg fixed right-0 top-0 w-[391px] h-[905px] px-[43px] py-[37px]"
            >
              <RoundIconBox>
                <LuArrowUpLeft onClick={() => setTalk(false)} className='text-4xl cursor-pointer' />
              </RoundIconBox>
              <div className="logo mt-[50px] mb-6">
                <Logo />
              </div>
              <h4 className='text-[22px] mb-[20px]'>
                Unique Digital Ideas for Successful Business
              </h4>
              <p className='opacity-80'>
                Sed ut perspiciatis unde omnis natus totam rem aperiam eaque.
              </p>

              <div className="address mt-[53px] mb-9">
                <h4 className='text-[24px] mb-3 xl:mb-[38px] font-bold'>Address</h4>
                <ul>
                  <li className='mb-[15px]'>Mohammadpur, Dhaka, Bangladesh</li>
                  <li className='mb-[15px]'>meherajhosen786@gmail.com</li>
                  <li>+880 1989162543</li>
                </ul>
              </div>

              <div className="follow">
                <h4 className='text-[24px] mt-[75px] mb-3 xl:mb-[38px] font-bold'>Follow Me</h4>
                <ul className='flex gap-5'>
                  {socialIcons.map((icon, index) => (
                    <li key={index} className='text-primary text-[24px] hover:opacity-80'>
                      <a href={icon.link}>{icon.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
  // return (
  //   <div className='div className="navbar overflow-x-hidden py-6 z-[99999] fixed w-[100vw] text-white font-secondary '>
  //     <Container>
  //       <div className="nav bg-bg w-full px-5 rounded-full">
  //         <Flex className="">
  //           <ul>
  //             <Flex className="gap-4">
  //             {navItems.slice(0, 3).map((item, i) => (
  //               <li className="" key={i}>
  //                 <NavLink
  //                   to={item.link}
  //                   className={({ isActive }) =>
  //                     isActive ? "bg-primary font-semibold px-7 py-3 rounded-full text-bg" : "hover:text-white px-7 py-3"
  //                   }
  //                 >
  //                   {item.item}
  //                 </NavLink>
  //               </li>
  //             ))}
  //             </Flex>
  //           </ul>
  //           <div className="logo">
  //             <Logo />
  //           </div>
  //           <ul>
  //             <Flex className="gap-4">
  //             {navItems.slice(3, 6).map((item, i) => (
  //               <li className="" key={i}>
  //                 <NavLink
  //                   to={item.link}
  //                   className={({ isActive }) =>
  //                     isActive ? "bg-primary font-semibold px-7 py-3 rounded-full text-bg" : "hover:text-white px-7 py-3"
  //                   }
  //                 >
  //                   {item.item}
  //                 </NavLink>
  //               </li>
  //             ))}
  //             </Flex>
  //           </ul>
  //         </Flex>
  //       </div>
  //     </Container>
  //     <div className="subNav rounded-b-[50%] xl:w-[10%] bg-bg  mx-auto">
  //      <Flex className="details gap-y-2 p-5 flex-col items-center xl:flex hidden ">
  //             <RoundedElemText
  //               className="mx-auto"
  //               onClick={() => setTalk(true)}
  //               svg={<FiArrowUpRight />}
  //             >
  //               Let's Talk
  //             </RoundedElemText>
  //           <Mode onClick={()=>setDark(!dark)} mode={dark}/>
  //           </Flex>

  //     </div>
      
  //   </div>
  // );
};

export default Navbar;
