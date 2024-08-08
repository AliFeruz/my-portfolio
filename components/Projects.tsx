import { projects } from "@/constants/data";
import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";



const Projects = () => {

 
  return (
    <div className="min-h-screen w-full flex bg-darkgreen">
      <div className="px-8 sm:px-16 md:px-32 py-28 text-white">
        <h1 className="text-5xl">Select Work</h1>
        <div className="mt-12 grid grid-cols-1 gap-10 w-full">
          <ProjectCard item={projects[0]} />
          <div className="flex gap-10">
            <ProjectCard item={projects[1]} />
            <ProjectCard item={projects[2]} />
          </div>
        </div>
        <Link
          href={"/projects"}
          className="mt-10 flex justify-end items-center w-full"
        >
          <span className="flex items-center justify-center  w-60 text-[#00B941] ring-1 ring-[#00B941] rounded-3xl px-3 py-2">
            View more projects{" "}
            <ArrowLongRightIcon className="w-6 h-6 text-[#00B941] ml-3" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
