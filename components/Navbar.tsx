import React from 'react'
import ThemeBtn from './ThemeBtn'

const Navbar = () => {
  return (
    <div className='flex w-full h-[80px] items-center justify-center py-[16px] px-[299px] bg-black'>
        <div className='h-[48px] flex justify-between items-center w-full px-[16px] rounded-[25px] bg-[#fff] flex-shrink-0'>
            <div className='text-[#000] font-normal '>
                Ali Feruz
            </div>
            <div className='flex space-x-4'>
                <p>Work</p>
                <p>About</p>
                <p>Contact</p>
                <ThemeBtn/>
            </div>
        </div>
    </div>
  )
}

export default Navbar