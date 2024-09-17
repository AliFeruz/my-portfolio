import React from 'react';
import design from '@/public/design.png';
import web from '@/public/web.png';
import Image from 'next/image';

const Services = () => {
    

    return (
        <section className='w-full min-h-[640px] bg-lightgreen flex-shrink-0'>
            <div className='flex flex-col px-8 md:px-32 py-28 relative'>
                <h1 className='text-black md:text-6xl/[90px] text-3xl/[60px] not-italic font-medium'>
                    Your Vision, My Expertise <br />
                    Exceptional Results.
                </h1>
               <div className='flex flex-col md:flex-row md:mt-10 md:gap-10'>
               <Image src={design} alt="design" className="w-[380px] h-[232px] object-contain hover:scale-105 ease-in duration-300 transition-all"/>
               <Image src={web} alt="web" className="w-[380px] h-[232px] object-contain hover:scale-105 ease-in duration-300 transition-all"/>
               </div>
               <div className='md:w-[336px] md:h-[406px] h-[300px] md:absolute right-14 top-20 bg-darkgreen rounded-xl hover:scale-105 ease-in duration-300 transition-all'>
               </div>
            </div>
        </section>
    );
};

export default Services;
