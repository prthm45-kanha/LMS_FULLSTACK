import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
     <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything ,anytime,anywhere</h1>
     <p className='text-gray-500 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt <br/> iusto accusantium expedita quasi sequi ad fuga, vero dolores?     </p>
     <div className='flex items-center font-medium gap-3 mt-4'>
      <button className='rounded-md bg-blue-600 text-white px-10 py-3'>Get Started</button>
      <button className='flex gap-2 items-center rounded-md px-10 py-3'>Learn More <img src={assets.arrow_icon} alt='arrow_icon'/> </button>
     </div>
    </div>
  )
}

export default CallToAction
