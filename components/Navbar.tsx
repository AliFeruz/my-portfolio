import React, { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks';
import Link from "next/link";
import { SparklesCore } from './ui/sparkles';



const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const handleGetInTouch = () => {
    const email = "aliferuzcode@gmail.com"; 
    const subject = "Let's Connect!"; 
    const body = "Hi Ali, I would like to get in touch with you."; 

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  
    window.location.href = mailtoURL;
  };


  return (
    <nav className='flex fixed top-0 left-0 w-full h-[80px] items-center justify-center z-50'>
    {isAboveMediumScreens ? (
        <div className='h-[50px] flex justify-between shadow-md backdrop-blur-sm items-center ring-1 
        ring-darkgreen/20 w-4/6 px-16 rounded-[25px] bg-white/50  text-black flex-shrink-0 z-50'>
          <Link href={'/'} >
          <span className=' font-semibold tracking-wider text-2xl'>Ali Feruz</span>
          </Link>
          <div className='flex space-x-4 items-center justify-center z-50'>
            <Link href={'/'} >
              <span className='uppercase font-medium tracking-wide'>Home</span>
              </Link>
            <Link href="/projects" passHref>
            <span className='uppercase font-medium tracking-wide'>Work&apos;s</span>
            </Link>
              <button onClick={handleGetInTouch}
              className="flex items-center text-xs animate-pulse ring-1 ring-darkgreen/10 justify-center text-black rounded-3xl bg-lightgreen px-3.5 py-1">
                Get in touch
              </button>
          </div>
        </div>
      
    ) : (
      <div className='flex items-center justify-between w-full h-[80px] px-8 shadow-md backdrop-blur-sm bg-white/30  text-black flex-shrink-0 z-50'>
        <Link href={'/'} >
          <span className=' font-semibold tracking-wider text-2xl'>Ali Feruz</span>
        </Link>
        <Bars3BottomRightIcon
          className='cursor-pointer w-8 h-8'
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </div>
    )}

    {!isAboveMediumScreens && isMenuToggled && (
      <div className='fixed right-0 top-0 z-50 min-h-screen w-[90vw] bg-darkgreen overflow-hidden'>
        <div className="w-full absolute inset-0 min-h-screen z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={5}
          particleDensity={50}
          className="w-full h-full"
          particleColor={"#00f255"}
        />
      </div>
        <div className='absolute top-0 left-0 w-full h-full z-10'>
        <div className='flex justify-end p-12'>
          <XMarkIcon
            className='w-10 h-10 text-white'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-2xl w-full text-white'>
        <Link href={'/'} className='uppercase font-medium tracking-wide'
        onClick={() => setIsMenuToggled(!isMenuToggled)}>
        Home
        </Link>
        <Link href="/projects" className='uppercase font-medium tracking-wide'
        onClick={() => setIsMenuToggled(!isMenuToggled)}>
        Work&apos;s
        </Link>
        </div>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar