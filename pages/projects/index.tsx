import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="min-h-screen w-full flex bg-darkgreen">
    <div className='px-8 sm:px-16 md:px-32 py-28 text-white'>
      <h1 className='text-5xl'>Work&apos;s</h1>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}

      </div>
    </div>
    </div>
  )
}

export default index