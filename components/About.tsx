import { SelectedPage } from '@/types';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };


const About = ({ setSelectedPage }: Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
        setSelectedPage(SelectedPage.Home);
        }
    }, [inView, setSelectedPage]);

  return (
    <div id='about' ref={refInView}
    className="min-h-screen w-full flex items-center justify-center text-white">About</div>
  )
}

export default About