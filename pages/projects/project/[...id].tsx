import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ProjectType } from '../../../types';
import { projects } from '@/constants/data';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa6';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const project = projects.find((proj) => proj.id === Number(id)) || null;

  return {
    props: {
      project,
    },
  };
};

type ProjectDetailProps = {
  project: ProjectType | null;
};

const index = ({ project }: ProjectDetailProps) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full min-h-screen">
      <div className="h-[60vh] relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-darkgreen/50 z-10" />
        <Image
          src={project.img}
          alt="project background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-10 container mx-auto text-start px-8 sm:px-16 md:px-32 z-20">
          <h1 className="text-4xl md:text-6xl text-white font-semibold">
            {project.title}
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-200 mt-4">
            {project.des}
          </h3>
        </div>
      </div>
      <div className="w-full bg-darkgreen text-white py-14">
        <div className="container mx-auto px-4 sm:px-16 md:px-32">
          <div className="flex flex-col justify-start py-6 gap-4">
            <h2 className='text-xl text-gray-500'>Technologies</h2>
            <div className="flex py-2">
              {project.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className={`border border-lightgreen rounded-full bg-black w-10 h-10 flex justify-center items-center`}
                  style={{ transform: `translateX(-${7 * index}px)` }}
                >
                  <Image src={icon} alt="icons" className="p-2" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg leading-relaxed md:w-2/3">{project.details?.text}</p>
          <div className="flex gap-6 my-14">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg ring-1 ring-lightgreen/50 font-medium bg-lightgreen text-darkgreen hover:scale-110 px-3 py-1.5 rounded-lg transition duration-300"
            >
              <FaGlobe className="w-6 h-6" />
              Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg ring-1 ring-lightgreen/50 font-medium bg-gray-800 hover:scale-110 px-3 py-1.5 rounded-lg transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
              Github
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {project.details?.images.map((item, index) => (
              <div
                key={index}
                className={`relative h-[440px] rounded-xl ${index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <Image
                  src={item.img}
                  alt={project.title}
                  className="object-fill w-full h-full shadow-md shadow-lightgreen/[20%] rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-black via-transparent to-transparent opacity-75 hover:opacity-60 transition-opacity duration-300"></div>
                <p className="absolute bottom-4 left-4 text-white text-lg z-10">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end my-10">
            <Link href="/">
              <p className="text-lightgreen hover:text-lime-700 transition duration-300">
                &larr; Back to Projects
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
