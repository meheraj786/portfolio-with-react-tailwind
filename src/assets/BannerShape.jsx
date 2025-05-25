import React from 'react'
import bannerImg from './bannerImage.png'

const BannerShape = () => {
  return (
    <div className='w-full md:w-full'>
      <svg className='mx-auto w-full md:w-full' width="528" height="500" viewBox="0 0 528 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M275.5 16C413.847 16 526 128.153 526 266.5C526 404.641 414.065 497.5 275.5 497.5C206.01 497.5 137.666 482.906 86.7656 451.099C35.9545 419.347 2.5 370.45 2.5 301.5C2.5 232.394 36.109 160.988 87.1611 106.827C138.215 52.6642 206.471 16 275.5 16Z" stroke="white" stroke-width="4"/>
<path d="M504.16 379.356C425.391 513.847 138.083 530.235 72.9149 403.655C8.31321 277.075 165.851 8.09239 309.788 0.181146C453.158 -7.7301 582.929 245.43 504.16 379.356Z" fill="#C9F31D"/>
</svg>
<img className='absolute bottom-[65px] md:bottom-5 left-1/2 -translate-x-[48%] w-[80%] md:w-full rounded-full animate-floating ' src={bannerImg} alt="" />

    </div>
  )
}

export default BannerShape