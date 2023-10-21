import React from 'react'
import HeroImage from '../assets/HeroPort.jpg'
const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-60 h-60 rounded-full border-8 border-primary400'>
            <img
                src={HeroImage}
                alt='Hero'
                className='w-full h-full object-cover rounded-full'
            /> 
        </div>
    </div>
  )
}

export default Hero