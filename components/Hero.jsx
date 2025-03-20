"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="text-center mt-10">
          <h2 className="bigshoulderdisplay text-[72px] w-[80%] mx-auto">
            You deserve a beautiful website that{" "}
            <span className="text-[#EC5B37]">grows</span> with your brand
          </h2>
          <h2 className="text-[20px] custombevietnam text-[#2020204d] py-4">
            Craft ongoing updates & strategies without the hassle of web
            development
          </h2>
        </div>

        <div className="flex justify-center items-center mt-8  absolute top-0 w-[100%] ">
          <Image
            src="/Laptop.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="mt-[40%]">
          <Marquee className="text-[#202020] text-[36px] poppins-thin font-thin text-center mt-8 border-t border-b border-[#202020] flex">
            Evolve your business • Control your website • Evolve your business •
            Control your website • Evolve your business • Control your website •
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Hero;
