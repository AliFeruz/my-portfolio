import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ValueSection from "@/components/ValueSection";


export default function Home() {
  

  return (
    <main className="w-full h-full">
       <HeroSection/>
       <Projects />
       <Services/>
       <ValueSection/>
    </main>
  );
}
