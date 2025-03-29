import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const solutionsData = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your goals, audience, and market to craft a strategic roadmap.",
      icon: "/Background.svg",
      image: "/Discovery.svg",
      points: [
        "Understanding your goals, audience, and challenges.",
        "Market research & competitive analysis.",
        "Defining project scope & roadmap.",
      ],
    },
    {
      id: 2,
      title: "Design & Development",
      description:
        "Transforming ideas into visually stunning, user-friendly interfaces with clean, scalable code.",
      icon: "/Background1.svg",
      image: "/designandd.svg",
      points: [
        "Create intuitive UI/UX with user-first design.",
        "Develop high-performance, scalable solutions.",
        "Ensure responsiveness & cross-platform compatibility.",
      ],
    },
    {
      id: 3,
      title: "Testing & Optimization",
      description:
        "Ensuring seamless functionality, security, and top-notch user experience.",
      icon: "/Background2.svg",
      image: "/Testing.svg",
      points: [
        "Perform rigorous functionality & security testing.",
        "Optimize speed, performance, and user experience.",
        "Gather feedback for refinements & improvements.",
      ],
    },
    {
      id: 4,
      title: "Launch & Support",
      description:
        "We launch your project with precision and provide ongoing support to ensure it continues to perform at its best.",
      icon: "/Background3.svg",
      image: "/Support.svg",
      points: [
        "Deploy seamlessly with real-time monitoring.",
        "Provide post-launch support & updates.",
        "Implement strategies for continuous growth & success.",
      ],
    },
  ];

  // Set up intersection observer for each section
  const { ref: timelineInViewRef, inView: timelineInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Handle scroll to change active solution
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const sections = document.querySelectorAll(".solution-section");

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveIndex(index);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="mt-28 md:mt-40 mx-[4%] overflow-hidden custombevietnam">
        <div>
          <div className="flex justify-center items-center gap-28">
            <div
              data-aos="fade-right"
              className="w-[414px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>

            <div data-aos="fade-up" className="flex flex-col items-center">
              <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

              <div className="w-[322px] bigshoulderdisplay text-[64px] lg:text-[96px] text-[#202020] text-center mt-2">
                <h2 className="leading-tight">
                  Our <span className="text-[#EC5B37]">Solutions</span> For You{" "}
                </h2>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="w-[414px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>
          </div>

          <div className="flex justify-between mt-10 md:mt-20 mb-8">
            <h2 className="text-[20px] text-[#EC5B37] pb-10">
              / <span className="text-[#202020]">our process</span>
            </h2>

            <div className="text-right">
              <h2 className="text-[16px] mb-1 text-[#6A6C71]">
                Scroll to explore
              </h2>
              <p className="text-[16px] text-[#6A6C71]">
                {activeIndex + 1} / {solutionsData.length} works
              </p>
            </div>
          </div>

          <div
            ref={(el) => {
              timelineRef.current = el;
              timelineInViewRef(el);
            }}
            className=" flex flex-col relative justify-center items-center "
          >
            {/* Left timeline line */}
            <div className="absolute left-0 lg:left-[47.5%] top-0 w-[2px] h-full bg-[#E2E3E4]">
              <div
                className="absolute left-0 top-0 w-full bg-[#EC5B37] transition-all duration-1000 ease-in-out"
                style={{
                  height: `${
                    ((activeIndex + 1) * 100) / solutionsData.length
                  }%`,
                }}
              ></div>
            </div>


            {/* Solution Sections */}
            {solutionsData.map((solution, index) => (
              <div
                key={solution.id}
                className={`solution-section flex gap-16 mb-20 md:mb-32 px-10 py-1 md:py-8 transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-40 translate-y-4"
                }`}
                data-aos="fade-up"
                data-aos-delay={(index * 100).toString()}
              >
                <div className="hidden lg:block w-[428px] h-[240px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col md:ml-12">
                  <div className="md:flex items-center mb-4">
                    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#EC5B37]  mr-4 transition-all duration-500 ease-in-out transform hover:scale-110">
                      <Image
                        src={solution.icon}
                        alt="icon"
                        width={1000}
                        height={1000}
                        className="w-[48px] h-[48px]"
                      />
                    </div>
                    <h2 className="text-[28px] font-semibold text-[#202020] pt-3 md:pt-0">
                      {solution.title}
                    </h2>
                  </div>

                  <p className="text-[#6A6C71] text-[16px] mb-6 max-w-lg">
                    {solution.description}
                  </p>

                  <div className="space-y-3">
                    {solution.points.map((point, i) => (
                      <div key={i} className="flex items-center">
                        <Image
                          src="/star.svg"
                          alt="bullet"
                          width={13}
                          height={13}
                          className="w-[13px] h-[13px] mr-3"
                        />
                        <p className="text-[#555] text-[14px]">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
