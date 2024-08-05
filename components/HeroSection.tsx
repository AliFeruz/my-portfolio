import { SelectedPage } from "@/types";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";
import { SparklesCore } from "./ui/sparkles";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HeroSection = ({ setSelectedPage }: Props) => {
  const [refInView, inView] = useInView();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (inView) {
      setSelectedPage(SelectedPage.Home);
    }
  }, [inView, setSelectedPage]);

  const handleCopy = () => {
    navigator.clipboard.writeText("aliferuzcode@gmail.com").then(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    });
  };


  return (
    <section
      id="home"
      ref={refInView}
      className="min-h-screen flex flex-col px-8 sm:px-16 md:px-32 relative">
         <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={3.5}
          particleDensity={110}
          className="w-full h-full"
          particleColor="#00f255"
        />
      </div>
      <h1 className="text-[#001207] text-6xl font-medium not-italic mt-[250px] z-20 w-5/6 tracking-wide">
        Hi, I&apos;m Ali, a curious Full-Stack Web Developer with a keen eye for
        detail, passionate about frontend development and UI design.
      </h1>
      <div className="flex mt-14  gap-9 z-20">
      <button className="flex items-center justify-center w-60 text-black rounded-3xl bg-lightgreen px-5 py-2 cursor-pointer">
        Get in touch
      </button>
      <button onClick={handleCopy} className="flex items-center justify-center w-60 text-darkgreen border border-darkgreen/30 rounded-3xl px-5 py-2 cursor-pointer">
        {copied ? "Email copied" : "Copy email"}
      </button>
      </div>
    </section>
  );
};

export default HeroSection;
