import React from 'react';
import { GlobeAltIcon, Square2StackIcon } from '@heroicons/react/24/outline';

const Services = () => {

    return (
        <section className='w-full min-h-[640px] bg-lightgreen flex-shrink-0'>
            <div className='container mx-auto flex flex-col px-8 md:px-32 py-14 relative'>
                <h1 className='text-black md:text-6xl/[90px] text-3xl/[60px] not-italic font-medium'>
                    Your Vision, My Expertise <br />
                    Exceptional Results.
                </h1>
                <div className='flex flex-col md:flex-row md:mt-14 gap-10 mt-14'>
                    <ul className='flex flex-col gap-2 w-full md:w-1/3 p-8 shadow-md ring-1 
                    ring-darkgreen/10 rounded-xl bg-white/40 text-black list-disc hover:scale-105 ease-in duration-300 transition-all'>
                        <h2 className='flex items-center gap-4 text-lg font-bold mb-4'>
                            <Square2StackIcon className='w-6 h-6' /> UX/UI Design
                        </h2>
                        <li className='text-base ml-4'>User Research</li>
                        <li className='text-base ml-4'>Copywriting</li>
                        <li className='text-base ml-4'>Usability Testing</li>
                        <li className='text-base ml-4'>Web & Mobile UI</li>
                        <li className='text-base ml-4'>UX Consulting</li>
                    </ul>
                    <ul className='flex flex-col gap-2 w-full md:w-1/3 p-8 shadow-md ring-1 
                    ring-darkgreen/10 rounded-xl bg-white/70 text-black list-disc hover:scale-105 ease-in duration-300 transition-all'>
                        <h2 className='flex items-center gap-4 text-lg font-bold mb-4'>
                            <GlobeAltIcon className='w-6 h-6' /> Web Development
                        </h2>
                        <li className='text-base ml-4'>Front-End Development</li>
                        <li className='text-base ml-4'>Backend Integration</li>
                        <li className='text-base ml-4'>Web & Mobile Apps</li>
                        <li className='text-base ml-4'>SEO Optimization</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
