"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";



const servicesData = [
  {
    title: "Branding",
    description:
      "Strategic brand storytelling that makes your business unforgettable. We create bold, distinct identities that communicate your vision and connect with your audience at every touchpoint.",
    image: "/brandinghero.svg",
    link: "/our-services/branding",
  },
  {
    title: "Web Design",
    description:
      "We design seamless, visually compelling digital experiences that combine strategy, aesthetics, and usability—ensuring your brand stands out in a crowded online space.",
    image: "/webdesignhero.svg",
    link: "/our-services/webdesign",
  },
  {
    title: "Development",
    description:
      "From interactive websites to custom-built platforms, we deliver high-performance solutions that enhance user experience and scale with your business growth.",
    image: "/developmenthero.svg",
    link: "/our-services/development",
  },
];

const OurServices = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <>
      <div className=" px-[4%] mt-16 md:mt-24 custombevietnam overflow-hidden">
        <div>
          <div className="flex justify-center items-center gap-28">
            <div
              data-aos="fade-right"
              className="w-[441px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>

            <div data-aos="fade-up" className="flex flex-col items-center">
              <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

              <div className="w-[70%] md:w-[322px] bigshoulderdisplay text-[64px] lg:text-[96px] text-[#202020] text-center mt-2">
                <h2>
                  Our <span className="text-[#EC5B37]">Services</span>{" "}
                </h2>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="w-[441px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>
          </div>

          <div className="flex justify-between items-center mb-14">
            <h2 className="text-[20px]  text-[#EC5B37]">
              / <span className="text-[#202020]">services</span>
            </h2>
            <h2 className="text-right text-[#6A6C71] text-[16px]">
              Scroll to explore <br />3 works
            </h2>
          </div>
        </div>

        <div>
          {servicesData.map((service, index) => (
            <div key={index} className="">
              <div>
                <div data-aos="flip-down" data-aos-duration="2000">
                  <Link href={service.link}>
                    <Image
                      src={service.image}
                      width={1000}
                      height={1000}
                      alt="Services"
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </Link>
                </div>
                <div className="py-10 md:py-12 text-[#202020]">
                  <div className="flex justify-between ">
                    <h2 className="text-[24px] bigshoulderdisplay">
                      {service.title}
                    </h2>
                    <h2 className="w-[482px] text-[20px] hidden lg:block">
                      {service.description}
                    </h2>
                    <Link href={service.link}>
                      <Image
                        src="/arrow.svg"
                        width={1000}
                        height={1000}
                        alt="arrow"
                        className="w-[30px] h-[30px] cursor-pointer"
                      />
                    </Link>
                  </div>
                  <h2 className=" text-[20px] lg:hidden pt-2">
                    {service.description}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
