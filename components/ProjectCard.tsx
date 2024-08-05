import Image from "next/image";
import React from "react";

const ProjectCard = ({ item }: { item: any }) => {
  return (
    <div className="h-[584px] flex flex-col items-start bg-[#D9D9D914]/[8%] hover:scale-105 ease-in duration-300 transition-all 
    ring-1 ring-lightgreen/20 rounded-lg p-8 shadow-lg shadow-lightgreen/[5%]">
      <Image
        src={item.img}
        alt="project"
        className="w-full h-[430px] object-fill rounded-t-lg"
      />
      <p className="text-3xl font-medium text-white pt-6">{item.title}</p>
      <p className="text-base not-italic text-[#A0A0A0] font-normal pt-3">
        {item.des}
      </p>
    </div>
  );
};

export default ProjectCard;
