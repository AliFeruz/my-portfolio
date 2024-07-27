import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/types";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

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
    <main className="bg-slate-200 w-full h-full">
       <Navbar selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage}/>
       <HeroSection setSelectedPage={setSelectedPage}/>
       <About setSelectedPage={setSelectedPage}/>
       <Projects setSelectedPage={setSelectedPage}/>
       <Contact setSelectedPage={setSelectedPage}/>
       <Footer/>
    </main>
  );
}
