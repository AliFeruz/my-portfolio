import React, { useState } from "react";
import Vector from "@/public/Vector.svg";
import Image from "next/image";
import Github from "@/public/icons/github_dark.png";
import Linkedin from "@/public/icons/linkedin_dark.png";
import confetti from "canvas-confetti";

const Footer = () => {
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
    <div>
      <div className="min-w-[640px] h-[528px] bg-[#0c0c0c] relative flex sm:hidden">
        <div className="absolute top-0 left-0">
          <Image src={Vector} alt="svg" className="w-full h-full" />
        </div>
        <div className="flex flex-col space-y-3 absolute top-10 left-20">
          <p className="text-lime-500 pt-4 text-sm">Ali Feruz</p>
          <p className="text-5xl text-gray-200 pt-9">
            Let&apos;s Build <br /> Something Together
          </p>
          <div className="flex gap-9 pt-16">
            <button className="flex items-center justify-center text-black rounded-3xl bg-[#0BB246] px-3 py-1 text-sm w-[8rem]">
              Get in touch
            </button>
            <button onClick={handleCopy} className="flex items-center justify-center text-slate-600 border border-slate-600 rounded-3xl px-3 text-sm w-[8rem] py-1">
            {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
          <div className="flex gap-9 pt-24">
            <Image src={Github} alt="github" className="w-6 h-6 opacity-80" />
            <Image
              src={Linkedin}
              alt="linkedin"
              className="w-6 h-6 opacity-80"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-20">
          <p className=" text-gray-300/50 font-thin text-sm">
            ©{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
      <div className="max-w-screen-2xl h-[504px] bg-[#0c0c0c] relative hidden sm:flex">
        <div className="absolute top-2 left-[305px]">
          <Image src={Vector} alt="svg" className="w-full h-full" />
        </div>
        <div className="flex flex-col space-y-3 absolute top-10 left-20">
          <p className="text-lime-500 pt-4">Ali Feruz</p>
          <p className="text-5xl text-gray-100 pt-9">
            Let&apos;s Build <br /> Something Together
          </p>
          <div className="flex gap-9 pt-9">
            <button className="flex items-center justify-center w-60 text-black rounded-3xl bg-[#0BB246] px-5 py-2">
              Get in touch
            </button>
            <button onClick={handleCopy} className="flex items-center justify-center w-60 text-gray-100 border border-gray-100 rounded-3xl px-5 py-2">
            {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-20">
          <p className=" text-gray-300/50 font-thin text-base">
            ©{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="absolute flex flex-col gap-9 top-1/2 right-20">
          <Image src={Github} alt="github" className="w-9 h-9 opacity-80" />
          <Image src={Linkedin} alt="linkedin" className="w-9 h-9 opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
