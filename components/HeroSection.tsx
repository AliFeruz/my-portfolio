import Image from 'next/image'
import React from 'react'
import benefits from '@/public/male-developer-working-on-website-development 1.svg'
import { Square2StackIcon } from '@heroicons/react/24/outline'

const Benefits = () => {
  return (
    <section className='w-full min-h-[500px] bg-darkgreen flex-shrink-0'>
        <div className='container mx-auto flex flex-col md:flex-row px-8 md:px-32 py-14 relative gap-10'>
            <Image src={benefits} alt="benefits" className="md:w-1/3 md:h-1/3 w-2/3 h-2/3 ml-9 object-contain hover:scale-105 ease-in duration-300 transition-all"/>
            <div className='flex flex-col justify-center md:w-1/2 ml-10'>
            <h1 className='text-white text-start md:text-5xl text-3xl/[60px] not-italic font-medium'>
            Why I Stand Out
            </h1>
            <div className='flex flex-col text-white items-start md:justify-start gap-4 mt-5 w-full'>
            <p className='flex gap-4'><Square2StackIcon className='w-6 h-6 '/>Reliable and Dependable</p>
            <p className='flex gap-4'><Square2StackIcon className='w-6 h-6 '/>Flexible and Adaptable</p>
            <p className='flex gap-4'><Square2StackIcon className='w-6 h-6 '/>Commitment to Agreements</p>
            <p className='flex gap-4'><Square2StackIcon className='w-6 h-6 '/>Modern & Future Proof </p>
            
            </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits