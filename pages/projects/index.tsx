import ProjectCard from '@/components/ProjectCard'
import { SparklesCore } from '@/components/ui/sparkles'
import { projects } from '@/constants/data'
import React from 'react'

const index = () => {
  return (
    <div className="min-h-screen w-full flex bg-darkgreen relative">
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={5}
          particleDensity={20}
          className="w-full h-full"
          particleColor={"#00f255"}
        />
      </div>
    <div className='px-8 md:px-32 py-28 text-white container mx-auto mt-[3rem]'>
      <h1 className='md:text-5xl text-3xl'>Work&apos;s</h1>
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