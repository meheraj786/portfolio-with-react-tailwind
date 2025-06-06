import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


const ScrollUpButton = () => {
  const [showButton, setShowButton]= useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      setShowButton(window.scrollY>600)
    }
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll)
  },[])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  return (
    <>
    {
      showButton && (
            <div onClick={scrollToTop} className='p-3 rounded-full bg-primary cursor pointer fixed z-[999] bottom-10 hover:bg-transparent hover:border hover:border-primary hover:text-primary text-black right-10'><FaArrowUp />
    </div>
     )
    }
    
    </>

 

  )
}

export default ScrollUpButton