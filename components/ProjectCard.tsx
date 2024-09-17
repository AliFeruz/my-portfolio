import Image from "next/image";
import React from "react";

const ProjectCard = ({ item }: { item: any }) => {
  return (
    <div className="md:h-[584px] h-[384] flex flex-col items-start bg-[#D9D9D914]/[8%] hover:scale-105 ease-in duration-300 transition-all 
    ring-1 ring-lightgreen/20 rounded-lg md:p-8 p-4 shadow-lg shadow-lightgreen/[20%] backdrop-blur-md">
      <Image
        src={item.img}
        alt="project"
        className="w-full md:h-[430px] h-[230] object-fill rounded-t-lg"
      />
      <p className="md:text-3xl text-xl font-medium text-white pt-6">{item.title}</p>
      <p className="md:text-base text-sm not-italic text-[#A0A0A0] font-normal pt-3">
        {item.des}
      </p>
    </div>
  );
};

export default ProjectCard;
