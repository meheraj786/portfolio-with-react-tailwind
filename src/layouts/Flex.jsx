import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`flex justify-between items-center wrap ${className}`}>{children}</div>
  )
}

export default Flex