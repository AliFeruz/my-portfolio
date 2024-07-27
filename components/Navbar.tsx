import React, { useState } from 'react'
import ThemeBtn from './ThemeBtn'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');



  return (
    <div className='flex fixed top-0 left-0 w-full h-[80px] items-center justify-center py-[16px] px-[299px]'>
        {isAboveMediumScreens ? (
          <div className='h-[48px] hidden md:flex justify-between items-center w-full px-[16px] rounded-[25px] bg-[#fff] flex-shrink-0'>
          <p className='text-[#000] font-normal '>
              Ali Feruz
          </p>
          <div className='flex space-x-4'>
              <p>Work</p>
              <p>About</p>
              <p>Contact</p>
              <ThemeBtn/>
          </div>
      </div>
        ) : (
        <div className='flex md:hidden items-center justify-between min-w-[100vw] h-[80px] px-10 '>
         <p className='text-[#000] font-normal '>Ali Feruz</p>
         <Bars3BottomRightIcon className='cursor-pointer text-black w-10 h-10'
         onClick={() => setIsMenuToggled(!isMenuToggled)}/>
        </div>
        )}
        
        {!isAboveMediumScreens && isMenuToggled && (
          <div className='fixed right-0 top-0 z-40 min-h-screen w-[600px] bg-slate-900'>
            <div className='flex justify-end p-12'>
            <XMarkIcon className='w-10 h-10 text-white'
            onClick={() => setIsMenuToggled(!isMenuToggled)}/>
            </div>
            <div className='flex flex-col justify-center items-center gap-10 text-white'>
              <p>Work</p>
              <p>About</p>
              <p>Contact</p>
              <ThemeBtn/>
          </div>
          </div>
        )}
    </div>
  )
}

export default Navbar