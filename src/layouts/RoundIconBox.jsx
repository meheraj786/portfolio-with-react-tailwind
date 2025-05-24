import React from 'react'

const RoundIconBox = ({children, className}) => {
  return (
    <div className={`p-[10px] hover:bg-bg hover:text-primary flex justify-center items-center md:text-4xl text-2xl text-bg hvoer:text-primary w-[39px] md:w-[49px] md:h-[49px] h-[39px] bg-primary rounded-full ${className}`}>{children}</div>
  )
}

export default RoundIconBox