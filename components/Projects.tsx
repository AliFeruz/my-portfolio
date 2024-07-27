import { SelectedPage } from '@/types';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  

const Projects = ({ setSelectedPage }: Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
        setSelectedPage(SelectedPage.Home);
        }
    }, [inView, setSelectedPage]);



  return (
    <div id='projects' ref={refInView}
    className="min-h-screen w-full flex items-center justify-center">
    <h1 className="uppercase text-blue-500">Projects</h1>
    </div>
  )
}

export default Projects
