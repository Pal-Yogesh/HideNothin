"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const timelineData = [
  {
    title: "Our Mission",
    description:
      "We reimagine your brand's digital presence and change how individuals interact with your brand online in an ever-evolving digital world.",
  },
  {
    title: "Our Vision",
    description:
      "We reimagine your brand's digital presence and change how individuals interact with your brand online in an ever-evolving digital world.",
  },
  {
    title: "Our Goal",
    description:
      "We reimagine your brand's digital presence and change how individuals interact with your brand online in an ever-evolving digital world.",
  },
];

const servicesData = [
  {
    title: "Branding",
    description:
      "Empowering businesses with distinctive brand identities, compelling visuals, and strategic storytelling to leave a lasting impression and build meaningful connections.",
    image: "/brandinghero.svg",
    link: "/about/branding",
  },
  {
    title: "Web Design",
    description:
      "Delivering exceptional web design services that combine stunning visuals, user-centric experiences, and seamless functionality to elevate your online presence and drive engagement.",
    image: "/webdesignhero.svg",
    link: "/about/webdesign",
  },
  {
    title: "Development",
    description:
      "Providing top-notch development services that transform ideas into robust, scalable, and high-performing digital solutions tailored to your business needs.",
    image: "/developmenthero.svg",
    link: "/about/development",
  },
];

const AboutUS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000 });
    }
  }, []);
  

  const timelineItems = timelineData.map((item, index) => {
    const { ref, inView } = useInView({
      threshold: 0.9,
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        setActiveIndex(index);
      }
    }, [inView]);

    return (
      <div
        ref={ref}
        key={index}
        className=" duration-1000 text-[#202020] overflow-hidden"
        data-aos="fade-left"
        
      >
        <h3 className=" text-[24px] mb-4">{item.title}</h3>
        <p className="text-[14px]">{item.description}</p>
      </div>
    );
  });

  return (
    <>
      {/* about us */}
      <div className="custombevietnam px-[4%] overflow-hidden">
        <div>
          <h2 className="text-[#202020] text-[96px] bigshoulderdisplay text-center py-10">
            About Us
          </h2>
          <div className="">
            <Image
              src="/aboutus.svg"
              width={1000}
              height={1000}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between py-14">
            <h2 className="text-[20px] text-[#EC5B37] pb-10 w-[35%] pt-1">
              / <span className="text-[#202020]">about us</span>
            </h2>
            <div className="text-[#202020] text-[32px] w-[65%]">
              <h2>
                We are creative designers and technology experts dedicated to{" "}
                <span className="text-[#EC5B37]">growing</span> your digital{" "}
                <span className="text-[#EC5B37]">presence</span> by blending
                inspired design with advanced technology.
              </h2>
              <div className="flex gap-16 pt-20" ref={timelineRef}>
                <div className="relative w-[2px] flex-shrink-0">
                  <div
                    className="absolute left-0 w-[2px] bg-[#EC5B37] transition-all duration-500 ease-in-out"
                    style={{
                      height: `${
                        ((activeIndex + 1) / timelineData.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>

                <div className="space-y-12 ">{timelineItems}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our services */}

      <div className=" px-[4%] mt-24 custombevietnam overflow-hidden">
        <div>
          <div className="flex justify-center items-center gap-28">
            <div
              data-aos="fade-right"
              className="w-[441px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] "
            ></div>

            <div data-aos="fade-up" className="flex flex-col items-center">
              <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

              <div className="w-[322px] bigshoulderdisplay text-[96px] text-[#202020] text-center mt-2">
                <h2>
                  Our <span className="text-[#EC5B37]">Services</span>{" "}
                </h2>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="w-[441px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] "
            ></div>
          </div>

          <div className="flex justify-between items-center mb-14">
            <h2 className="text-[20px]  text-[#EC5B37]">
              / <span className="text-[#202020]">services</span>
            </h2>
            <h2 className="text-right">
              Scroll to explore <br />3 works
            </h2>
          </div>
        </div>

        <div>
          {servicesData.map((service, index) => (
            <div key={index} className="">
              <div>
                <div data-aos="flip-down"
                data-aos-duration="2000">
                  <Image
                    src={service.image}
                    width={1000}
                    height={1000}
                    alt="Services"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="flex justify-between py-12 text-[#202020]">
                  <h2 className="text-[24px] bigshoulderdisplay">
                    {service.title}
                  </h2>
                  <h2 className="w-[482px] text-[20px]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUS;
