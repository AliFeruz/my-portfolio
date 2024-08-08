import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const services = [
    {
        title: 'Web Development',
        des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Web Design',
        des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Copywriting',
        des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'UI Design',
        des: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); 
        } else {
            setActiveIndex(index); 
        }
    };

    return (
        <section className='w-full h-[640px] bg-lightgreen flex-shrink-0'>
            <div className='flex flex-col px-8 sm:px-16 md:px-32 py-28'>
                <h1 className='text-black text-6xl/[90px] not-italic font-medium'>
                    Your Vision, My Expertise <br />
                    Exceptional Results.
                </h1>
                <div className='grid grid-cols-2 mt-16 gap-10 w-2/3'>
                    {services.map((item, index) => (
                        <div key={index} className='relative bg-darkgreen/[3%] rounded-md'>
                           <div className='flex items-center '>
                            <div className='border-l-2 border-black w-1 h-10'/>
                            <p className='text-2xl flex items-end justify-betweenfont-medium pl-5 leading-10 cursor-pointer'
                                onClick={() => toggleAccordion(index)}>{item.title}</p>
                            <ChevronDownIcon
                                    className={`w-5 h-5 absolute bottom-2 right-2 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                />
                           </div>
                            {activeIndex === index && (
                                <p className='text-lg pl-5 absolute z-20 top-10 left-0 w-full tarnsition-all duration-300 ease-in-out bg-white p-4 rounded-b-lg'>
                                {item.des}  
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
