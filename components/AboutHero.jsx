import Link from "next/link";
import React from "react";
import AnimateButton from "./AnimateButton";

const AboutHero = () => {
  return (
    <>
      <div className="mt-28 flex md:gap-44 justify-center items-center text-center custombevietnam overflow-hidden">
        <div
          data-aos="fade-right"
          className="w-[240px] h-[2px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
        ></div>
        <div data-aos="fade-up">
          <div className="md:w-[533px] px-3 md:px-0">
            <h2 className=" text-[#202020] text-[20px] ">
              <span className="text-[#EC5B37]">/</span>about us
            </h2>

            <h2 className="text-[#202020] text-[24px] md:text-[32px] leading-relaxed mt-5">
              Hidenothin® is a creative studio specializing in{" "}
              <span className="text-[#EC5B37]">Branding</span>,{" "}
              <span className="text-[#EC5B37]">Web Design</span>, and{" "}
              <span className="text-[#EC5B37]">Development</span>. We help
              brands grow, enhance visibility, and make a lasting impact with
              innovative digital experiences.
            </h2>
            <div className="flex justify-center items-center mt-10 md:mt-20">
              <Link href="/contact">
                <div>
                  <AnimateButton label="Discover More" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-[240px] h-[2px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
        ></div>
      </div>
    </>
  );
};

export default AboutHero;
