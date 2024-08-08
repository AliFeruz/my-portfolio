import React, { useState } from "react";
import confetti from "canvas-confetti";
import { SparklesCore } from "./ui/sparkles";




const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  
    

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
    <section className="min-h-screen flex items-end sm:px-16 md:px-32 relative">
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={5}
          particleDensity={110}
          className="w-full h-full"
          particleColor={"#00f255"}
        />
      </div>
      <h1 className="text-[#001207] text-6xl font-[500]  leading-[82px] not-italic z-20 w-4/6 pb-28">
        Hi, I&apos;m <span className="text-[#24d261] font-semibold">Ali</span>, a curious Web Developer with a keen eye for
        detail, passionate about frontend development and UX/UI design.
      </h1>
      {/* <div className="flex mt-14 gap-9 z-20">
        <button className="flex items-center  justify-center  text-black rounded-3xl bg-lightgreen px-5 py-2 cursor-pointer">
          Get in touch
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center text-darkgreen border border-darkgreen/30 rounded-3xl px-5 py-2 cursor-pointer"
        >
          {copied ? "Email copied" : "Copy email"}
        </button>
      </div> */}
    </section>
  );
};

export default HeroSection;
