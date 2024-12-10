import { projects } from "@/constants/data";
import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-darkgreen relative">
      <div className="container mx-auto px-8 sm:px-16 md:px-32 py-14 text-white z-50">
        <h1 className="md:text-5xl text-3xl">Select Work</h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      
          <div className="md:col-span-1">
            <ProjectCard item={projects[0]} />
          </div>
          <div className="md:col-span-2">
            <ProjectCard item={projects[1]} />
          </div>

          <div className="md:col-span-2">
            <ProjectCard item={projects[2]} />
          </div>
          <div className="md:col-span-1">
            <ProjectCard item={projects[3]} />
          </div>
        </div>

        <Link
          href={"/projects"}
          className="mt-10 flex justify-end items-center w-full"
        >
          <span className="flex items-center justify-center text-lightgreen ring-1 ring-[#00B941] rounded-3xl px-5 py-2">
            View more{" "}
            <ArrowLongRightIcon className="w-6 h-6 text-lightgreen ml-3" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
