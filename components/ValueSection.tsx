import React from 'react';
import Vector from '@/public/VectorValues.png';
import Vector2 from '@/public/Vector.svg';
import Image from 'next/image';

const ValueSection = () => {
  return (
    <div className='w-full min-h-[632px] flex-shrink-0 bg-white'>
      <div className='container mx-auto flex flex-col px-6 sm:px-8 md:px-16 lg:px-32 py-14 relative'>
        <p className='not-italic text-3xl md:text-5xl font-medium text-black z-20'>
          Values That Drive Me
        </p>
        <div className='mt-12 md:flex hidden gap-5 w-full z-10'>
                <div className=' h-[328px] w-[480px] flex flex-col items-start bg-darkgreen ring-1 ring-lightgreen/20 rounded-lg  p-10 hover:rotate-6 hover:scale-105 ease-in duration-300 transition-all'>
                    <p className='text-4xl font-medium not-italic text-white pt-5'>Sustainability</p>
                    <p className='text-4xl font-medium not-italic text-white pt-3'>Reliability</p>
                    <p className='text-4xl font-medium not-italic text-white pt-3'>Ethicality</p>
                    <p className='text-4xl font-medium not-italic text-white pt-3'>Human-centered</p>
                </div>
                <div className='flex items-center w-[380px] h-[328px] justify-center bg-lightgreen ring-1 ring-darkgreen/20 rounded-lg p-10 hover:-rotate-6 hover:scale-105 ease-in duration-300 transition-all'>
                    <p className='text-base/[22px] not-italic text-black tracking-wide'>I am founded on principles of ethics, human-centered design, reliability, and sustainability. I believe in open and honest communication, crafting digital experiences that are both intuitive and inclusive. You can trust me to deliver consistent results, meet deadlines, and offer ongoing support. Moreover, I am dedicated to creating sustainable solutions that respect our planet.</p>
                </div>
                <div className='h-[328px] w-auto flex flex-col justify-between gap-5'>
                    <div className='flex items-center bg-white/50 backdrop-blur-smjustify-center ring-1 ring-darkgreen/20 rounded-lg p-10 h-full hover:-rotate-6 hover:scale-105 ease-in duration-300 transition-all'>
                        <p className='text-black text-4xl font-medium not-italic'>Functional</p>
                    </div>
                    <div className='flex items-center bg-white/50 backdrop-blur-sm justify-center ring-1 ring-darkgreen/20 rounded-lg p-10 h-full hover:rotate-6 hover:scale-105 ease-in duration-300 transition-all'>
                        <p className='text-black text-4xl font-medium not-italic'>Simplicity</p>
                    </div>
                </div>
            </div>
        <div className='flex flex-col md:hidden mt-8 space-y-5 z-20'>
          <div className='flex flex-col items-start bg-darkgreen ring-1 ring-lightgreen/20 rounded-lg p-6 transition-all duration-300 ease-in hover:rotate-6 hover:scale-105'>
            <p className='text-2xl md:text-3xl font-medium not-italic text-white'>
              Sustainability
            </p>
            <p className='text-2xl md:text-3xl font-medium not-italic text-white pt-3'>
              Reliability
            </p>
            <p className='text-2xl md:text-3xl font-medium not-italic text-white pt-3'>
              Ethicality
            </p>
            <p className='text-2xl md:text-3xl font-medium not-italic text-white pt-3'>
              Human-centered
            </p>
          </div>

          <div className='flex items-center justify-center bg-lightgreen ring-1 ring-darkgreen/20 rounded-lg p-6 transition-all duration-300 ease-in hover:-rotate-6 hover:scale-105'>
            <p className='text-sm md:text-lg  text-black tracking-wide'>
              I am founded on principles of ethics, human-centered design, reliability, and sustainability. I believe in open and honest communication, crafting digital experiences that are both intuitive and inclusive. You can trust me to deliver consistent results, meet deadlines, and offer ongoing support. Moreover, I am dedicated to creating sustainable solutions that respect our planet.
            </p>
          </div>

          <div className='flex items-center bg-white/50 backdrop-blur-sm justify-center ring-1 ring-darkgreen/20 rounded-lg p-6 transition-all duration-300 ease-in hover:-rotate-6 hover:scale-105'>
            <p className='text-2xl font-medium not-italic text-black'>
              Functional
            </p>
          </div>

          <div className='flex items-center bg-white/50 backdrop-blur-sm justify-center ring-1 ring-darkgreen/20 rounded-lg p-6 transition-all duration-300 ease-in hover:rotate-6 hover:scale-105'>
            <p className='text-2xl font-medium not-italic text-black'>
              Simplicity
            </p>
          </div>
        </div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image
            src={Vector}
            alt='background'
            className='absolute left-0 bottom-0 w-auto h-auto object-contain'
          />
          <Image
            src={Vector2}
            alt='background'
            className='absolute right-10 top-0 w-[200px] sm:w-[300px] md:w-[400px] h-auto object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
