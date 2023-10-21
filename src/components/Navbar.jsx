import React from 'react'
import Symbol from '../assets/Symbol.svg'
import Sun from '../assets/Sun.svg'
import List from '../assets/List.svg'

const Navbar = () => {
  return (
    <div className='flex w-full px-4 md:px-36 py-5 justify-between bg-[#E1E2FC]'>
        <div className='flex justify-center items-center gap-[14px]'>
            <img
              src={Symbol}
              alt='Symbol'
              className='w-[20px] h-[20px]'
            />
            <h1 className='font-Nunito text-[20px] leading-5 font-[500] text-black'>
              Marshall
            </h1>
        </div>
        <div className='flex gap-8'>
          <img
            src={Sun}
            alt='Sun'
            className='w-[20px] h-[20px]'
          />
          <img
            src={List}
            alt='List'
            className='w-[20px] h-[20px]'
          />
        </div>
    </div>
  )
}

export default Navbar