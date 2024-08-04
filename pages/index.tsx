import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/types";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import ValueSection from "@/components/ValueSection";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <main className=" bg-white w-full h-full">
       <Navbar selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage}/>
       <HeroSection setSelectedPage={setSelectedPage}/>
       <Projects setSelectedPage={setSelectedPage}/>
       <Services/>
       <ValueSection/>
       <Footer/>
    </main>
  );
}
