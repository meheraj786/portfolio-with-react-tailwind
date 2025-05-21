import React from 'react'
import RoundIconBox from './RoundIconBox'

const RoundedElemText = ({children, className, svg}) => {
  return (
    <button className={`flex cursor-pointer justify-center group text-white hover:text-primary items-center gap-2 ${className}`}>{children}<RoundIconBox className="group-hover:bg-bg group-hover:text-primary">{svg}</RoundIconBox></button>
  )
}

export default RoundedElemText