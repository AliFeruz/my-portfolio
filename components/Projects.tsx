import { projects } from "@/constants/data";
import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { SparklesCore } from "./ui/sparkles";



const Projects = () => {

 
  return (
    <div className="min-h-screen w-full flex bg-darkgreen relative">
        <div className="w-full absolute inset-0 min-h-screen">
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
      <div className="px-4 sm:px-16 md:px-32 py-28 text-white z-20">
        <h1 className="md:text-5xl text-3xl">Select Work</h1>
        <div className="mt-12 md:grid grid-cols-1 gap-10 w-full">
          <ProjectCard item={projects[0]} />
          <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-0">
            <ProjectCard item={projects[1]} />
            <ProjectCard item={projects[2]} />
          </div>
        </div>
        <Link
          href={"/projects"}
          className="mt-10 flex justify-end items-center w-full"
        >
          <span className="flex items-center justify-center text-lightgreen ring-1 ring-[#00B941] rounded-3xl px-5 py-2">
            View more {" "}
            <ArrowLongRightIcon className="w-6 h-6 text-lightgreen ml-3" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
