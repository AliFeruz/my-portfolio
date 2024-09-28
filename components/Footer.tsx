import React, { useState } from "react";
import Vector from "@/public/Vector.svg";
import Image from "next/image";
import Github from "@/public/icons/github_dark.png";
import Linkedin from "@/public/icons/linkedin_dark.png";
import confetti from "canvas-confetti";
import useMediaQuery from "@/hooks";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleGetInTouch = () => {
    const email = "aliferuzcode@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi Ali, I would like to get in touch with you.";
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;
  };

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
    <footer className="w-full bg-[#0c0c0c]">
      {isAboveMediumScreens ? (
        <div className="w-full container mx-auto h-[504px] relative flex">
          <div className="absolute top-0 left-[305px]">
            <Image src={Vector} alt="svg" className="w-full h-full" />
          </div>
          <div className="flex flex-col space-y-3 absolute top-10 left-20">
            <p className="text-lightgreen pt-4">Ali Feruz</p>
            <p className="text-5xl text-[#FFFFFF] pt-9">
              Let&apos;s Build <br /> Something Together
            </p>
            <div className="flex gap-9 pt-9">
              <button
                onClick={handleGetInTouch}
                className="flex items-center justify-center w-60 text-black rounded-3xl bg-lightgreen px-5 py-2"
              >
                Get in touch
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center w-60 gap-4 text-gray-100 border border-gray-100 rounded-3xl px-5 py-2"
              >
                {copied ? "Email copied" : "Copy email"}
                {copied ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <ClipboardDocumentIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-20">
            <p className="text-gray-300/50 font-thin text-base">
              ©{new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="absolute flex flex-col gap-9 top-1/2 right-20">
            <a href="https://github.com/aliferuz" target="_blank" rel="noreferrer">
              <Image src={Github} alt="github" className="w-7 h-7 opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/aliferuz" target="_blank" rel="noreferrer">
              <Image src={Linkedin} alt="linkedin" className="w-7 h-7 opacity-80" />
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full h-[528px] relative flex overflow-hidden">
          <div className="absolute top-20 right-0 overflow-hidden">
            <Image src={Vector} alt="svg" className="w-full h-full" />
          </div>
          <div className="flex flex-col space-y-3 absolute top-10 left-10">
            <p className="text-lime-500 pt-4 text-sm">Ali Feruz</p>
            <p className="text-5xl text-gray-200 pt-9">
              Let&apos;s Build <br /> Something Together
            </p>
            <div className="flex gap-9 pt-16">
              <button className="flex items-center justify-center text-black rounded-3xl bg-lightgreen px-3 py-1 text-sm w-[8rem]">
                Get in touch
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 justify-center text-gray-100 border border-gray-100 rounded-3xl px-3 text-sm w-[8rem] py-1"
              >
                {copied ? "Email copied" : "Copy email"}
                {copied ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <ClipboardDocumentIcon className="w-4 h-4 ml-1" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-start gap-9 pt-10 px-3">
              <a href="https://github.com/aliferuz" target="_blank" rel="noreferrer">
                <Image src={Github} alt="github" className="w-6 h-6 opacity-80" />
              </a>
              <a href="https://www.linkedin.com/in/aliferuz" target="_blank" rel="noreferrer">
                <Image src={Linkedin} alt="linkedin" className="w-6 h-6 opacity-80" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-5 left-10">
            <p className="text-gray-300/50 font-thin text-sm">
              ©{new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
