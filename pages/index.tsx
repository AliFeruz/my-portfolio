import Benefits from "@/components/Benefits";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ValueSection from "@/components/ValueSection";

export default function Home() {
  
  return (
    <main className="w-full h-full">
        <h1 className="hidden">Ali Feruz - Web Developer & UX/UI Designer</h1>
       <HeroSection/>
       <h2 className="sr-only">Projects</h2>
       <Projects />
       <h2 className="sr-only">Value Proposition</h2>
       <ValueSection/>
       <h2 className="sr-only">Benefits</h2>
       <Benefits/>
       <h2 className="sr-only">Services</h2>
       <Services/>
    </main>
  );
}
