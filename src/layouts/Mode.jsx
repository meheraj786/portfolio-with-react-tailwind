import React from 'react'

const Mode = ({mode, onClick}) => {
  return (
    <button onClick={onClick} className={mode ? "bg-[url(assets/darkBg.png)] cursor-pointer bg-cover w-[80px] transition delay-150 duration-300 ease-in-out rounded-[18px] relative h-[38px]":"bg-[url(assets/lightBg.png)] bg-cover transition delay-150 duration-300 ease-in-out w-[80px] relative h-[38px] cursor-pointer rounded-[18px]"}>
      <span 
      className={mode ? 'w-[29px] top-1/2 -translate-y-1/2 right-[5px]  transition delay-150 duration-300 ease-in-out absolute rounded-full h-[29px] bg-moon': 'w-[29px] top-1/2 -translate-y-1/2 left-[5px] absolute transition delay-150 duration-300 ease-in-out rounded-full h-[29px] bg-yellow-400' }
      >
      </span>
    </button>
  )
}

export default Mode