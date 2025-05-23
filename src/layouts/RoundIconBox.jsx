import React from 'react'

const RoundIconBox = ({children, className}) => {
  return (
    <div className={`p-[10px] hover:bg-bg hover:text-primary flex justify-center items-center text-4xl text-bg hvoer:text-primary w-[49px] h-[49px] bg-primary rounded-full ${className}`}>{children}</div>
  )
}

export default RoundIconBox