import { projects } from '@/constants/data';
import { SelectedPage } from '@/types';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  

const Projects = ({ setSelectedPage }: Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
        setSelectedPage(SelectedPage.Home);
        }
    }, [inView, setSelectedPage]);



  return (
    <div id='projects' ref={refInView}
    className="min-h-screen w-full flex bg-darkgreen">
    <div className='px-8 sm:px-16 md:px-32 py-28 text-white'>
      <h1 className='text-5xl'>Select Work</h1>
      <div className='mt-12 grid grid-cols-1 gap-10 w-full'>
        {projects.map((item, index) => (
          <div key={index}>
            <div className='h-[584px] flex flex-col items-start bg-[#D9D9D914]/[8%] ring-1 ring-lightgreen/20 rounded-lg p-8'>
              <Image src={item.img} alt="project" className='w-full h-[430px] object-cover rounded-t-lg' />
              <p className='text-3xl font-medium text-white pt-6'>{item.title}</p>
              <p className='text-base not-italic text-[#A0A0A0] font-normal pt-3'>{item.des}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
    </div>
  )
}

export default Projects
