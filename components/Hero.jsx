"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <div className="md:relative w-full">
        <div className="text-center mt-5 md:mt-10">
          <div className="leading-tight bigshoulderdisplay text-[40px] mx-auto lg:hidden ">
            <div className="">
              <h2>
                Designs That<span className="text-[#EC5B37]"> Speak</span>,
              </h2>
              <h2>
                Code That <span className="text-[#EC5B37]">Performs</span>,
              </h2>
              <h2>
                Brand That <span className="text-[#EC5B37]"> Shine</span>!
              </h2>
            </div>
          </div>
          <div className="leading-tight bigshoulderdisplay text-[72px]  w-[80%] mx-auto hidden lg:block">
            <h2 className="">
              Designs That
              <span className="text-[#EC5B37]"> Speak</span>, Code That
            </h2>
            <h2 className="">
              <span className="text-[#EC5B37]">Performs</span>, Brand That
              <span className="text-[#EC5B37]"> Shine</span>!
            </h2>
          </div>
          <h2 className="text-[16px] md:text-[20px] custombevietnam text-[#2020204d] pt-4 md:py-4 px-4">
            Here designs speaks and technology performs - your brand&apos;s
            digital presence, redefined.
          </h2>
        </div>

        <div className="flex justify-center items-center mt-8  lg:absolute lg:top-0 lg:w-[100%] ">
          <Image
            src="/laptop.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full h-full hidden lg:block"
          />
          <Image
            src="/mobilelaptop.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="w-[90%] h-[235px] lg:hidden"
          />
        </div>

        <div className="md:mt-[40%]">
          <Marquee className="text-[#202020] text-[20px] md:text-[36px] poppins-thin font-thin text-center md:mt-8 border-t border-b border-[#202020] flex">
            Evolve your business • Control your website • Evolve your business •
            Control your website • Evolve your business • Control your website •
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Hero;
