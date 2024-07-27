import { SelectedPage } from '@/types';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };
  

const Contact = ({ setSelectedPage }: Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
        setSelectedPage(SelectedPage.Home);
        }
    }, [inView, setSelectedPage]);


  return (
    <div id='contact' ref={refInView}
    className="min-h-screen w-full flex items-center justify-center">
    <h1 className="uppercase text-blue-500">Contact section</h1>
    </div>
  )
}

export default Contact