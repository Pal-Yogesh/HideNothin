import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="mt-28 flex gap-44 justify-center items-center text-center custombevietnam overflow-hidden">
        <div
          data-aos="fade-right"
          className="w-[240px] h-[2px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF]"
        ></div>
        <div data-aos="fade-up" className="w-[533px]">
          <h2 className=" text-[#202020] text-[20px] ">
            <span className="text-[#EC5B37]">/</span>about us
          </h2>

          <h2 className="text-[#202020] text-[32px] leading-relaxed mt-5">
            Hidenothin® is a creative studio specializing in{" "}
            <span className="text-[#EC5B37]">Branding</span>,{" "}
            <span className="text-[#EC5B37]">Web Design</span>, and{" "}
            <span className="text-[#EC5B37]">Development</span>. We help clients
            elevate their brands, expand their reach, and stand out with
            innovative solutions.
          </h2>
          <div className="flex justify-center items-center mt-20">
            <Link href="/contact">
              <div className=" text-[16px] flex justify-center items-center bg-[#EC5B37] hover:bg-[#EC5B37] text-white w-[155px] h-[47px] rounded-full transition-colors duration-300">
                Discover More
              </div>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-[240px] h-[2px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF]"
        ></div>
      </div>
    </>
  );
};

export default AboutHero;
