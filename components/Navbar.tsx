import React, { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks';
import { SelectedPage } from '@/types';
import Link from '@/lib/Link';


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}


const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');



  return (
    <nav className='flex fixed top-0 left-0 w-full h-[90px] items-center justify-center'>
    {isAboveMediumScreens ? (
        <div className='h-[50px] flex justify-between shadow-md backdrop-blur-sm items-center ring-1 ring-white/30 w-5/6 px-16 rounded-[25px] bg-[#0c0c0c]/30  text-white flex-shrink-0'>
          <Link  page="Home" 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}>
          <span className=' font-semibold tracking-wider text-2xl'>Ali Feruz</span>
          </Link>
          <div className='flex space-x-4 items-center'>
            <Link  page="Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}>
              <span className='uppercase font-medium tracking-wider'>Home</span>
              </Link>
            <Link  page="About" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}>
              <span className='uppercase font-medium tracking-wider'>About</span>
              </Link>
            <Link  page="Projects" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}>
              <span className='uppercase font-medium tracking-wider'>Projects</span>
              </Link>
              <button className="flex items-center justify-center text-black rounded-3xl bg-[#00F255] px-3.5 py-1">
                Get in touch
              </button>
          </div>
        </div>
      
    ) : (
      <div className='flex items-center justify-between w-full h-[80px] px-8'>
        <p className='text-gray-300'>Ali Feruz</p>
        <Bars3BottomRightIcon
          className='cursor-pointer text-white w-7 h-7'
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </div>
    )}

    {!isAboveMediumScreens && isMenuToggled && (
      <div className='fixed right-0 top-0 z-50 min-h-screen w-[90vw] bg-slate-900 overflow-hidden'>
        <div className='flex justify-end p-12'>
          <XMarkIcon
            className='w-10 h-10 text-white'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-white w-full'>
          <p>Work</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar