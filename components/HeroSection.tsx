import React from "react";
import HeroImg from "@/public/heroimg.svg";
import Image from "next/image";

const HeroSection = () => {
  
  const handleGetInTouch = () => {
    const email = "aliferuzcode@gmail.com"; 
    const subject = "Let's Connect!"; 
    const body = "Hi Ali, I would like to get in touch with you."; 

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  
    window.location.href = mailtoURL;
  };

  return (
    <section className="min-h-screen flex flex-col px-8 md:px-32 relative">
      <Image
        src={HeroImg}
        alt="hero"
        className="absolute bottom-0 right-0 w-auto h-auto"
        priority
      />
      <div className="pt-[9.5rem]">
        <h1 className="md:text-3xl text-xl font-semibold outline-black text-white  not-italic ">
          Hi, I&apos;m Ali
        </h1>
        <h1 className="md:text-6xl text-4xl leading-[40px] font-medium text-start md:leading-[82px] not-italic md:pb-6 pb-2">
          Building Future-Ready Products that Scale with Precision and
          Creativity
        </h1>
        <p className="md:text-xl text-base">
          From design to deployment, get seamless, high-performing<br/> web
          solutions—all in one place.
        </p>
      </div>
      <div className="flex md:mt-10 mt-6">
        <button   onClick={handleGetInTouch}
        className="flex items-center  justify-center  text-black rounded-3xl bg-lightgreen md:px-6 px-3 py-1 md:py-2 cursor-pointer">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
