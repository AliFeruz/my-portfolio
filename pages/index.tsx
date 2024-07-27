import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-950 w-full h-full">
       <Navbar/>
       <HeroSection/>
       <Footer/>
    </main>
  );
}
