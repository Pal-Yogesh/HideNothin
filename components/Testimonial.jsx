"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "./ScrollbarHide.css";

const testimonials = [
  {
    id: 1,
    image: "/timepass.svg",
    image2: "/Branding.svg",
    rating: 5,
    text: "Referred by a friend, I chose Hidenothin for branding. Their strategic approach, creative expertise, and flexible pricing made the entire process seamless and impactful.",
    name: "John Doe",
    company: "ABC Corp / Founder",
  },
  {
    id: 2,
    image: "/timepass.svg",
    image2: "/Branding.svg",
    rating: 4,
    text: "Working with Hidenothin was a game-changer for our brand. Their creativity and execution were top-notch.",
    name: "Jane Smith",
    company: "XYZ Ltd / CEO",
  },
  {
    id: 3,
    image: "/timepass.svg",
    image2: "/Branding.svg",
    rating: 5,
    text: "Absolutely loved the experience! The team was professional and delivered beyond expectations.",
    name: "David Johnson",
    company: "Tech Innovations / Manager",
  },
  {
    id: 4,
    image: "/timepass.svg",
    image2: "/Branding.svg",
    rating: 4,
    text: "The branding solutions provided were fantastic and truly elevated our presence.",
    name: "Emma Brown",
    company: "Creative Studios / Director",
  },
  {
    id: 5,
    image: "/timepass.svg",
    image2: "/Branding.svg",
    rating: 5,
    text: "Seamless process with a highly skilled team. Would definitely recommend!",
    name: "Michael Lee",
    company: "Startup Hub / Co-Founder",
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (id) => {
    setActiveTestimonial(id);

    const cardElement = document.getElementById(`testimonial-${id}`);
    if (cardElement && scrollContainerRef.current) {
      const containerLeft =
        scrollContainerRef.current.getBoundingClientRect().left;
      const cardLeft = cardElement.getBoundingClientRect().left;
      const scrollOffset = cardLeft - containerLeft - 100; 

      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="mt-32 overflow-hidden">
        <div className="mx-[4%]">
          <div className="flex justify-center items-center gap-28">
            <div
              data-aos="fade-right"
              className="w-[414px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>

            <div data-aos="fade-up">
              <div className="flex flex-col items-center">
                <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

                <div className="w-[322px] bigshoulderdisplay text-[64px] lg:text-[96px] text-[#202020] text-center mt-2">
                  <h2>
                    Client <span className="text-[#EC5B37]">Stories</span>
                  </h2>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="w-[414px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
            ></div>
          </div>

          <div className="flex justify-between md:items-center mt-6 md:mt-0  mb-10">
            <h2 className="text-[20px] custombevietnam text-[#EC5B37]">
              / <span className="text-[#202020]">testimonials</span>
            </h2>
            <h2 className="text-right text-[#6A6C71] text-[16px]">
              Scroll to explore <br />5 works
            </h2>
          </div>
        </div>

        <div className="bg-[#202020] py-8 p-[4%] custombevietnam relative">
          {/* Navigation Arrows */}
          {/* <div className="absolute top-1/2 left-4 right-4 flex justify-between z-10">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-[#EC5B37] text-white flex items-center justify-center hover:bg-opacity-90 transition transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-[#EC5B37] text-white flex items-center justify-center hover:bg-opacity-90 transition transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar  gap-4 md:gap-5 lg:gap-6 pb-8 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                id={`testimonial-${testimonial.id}`}
                className={`flex-shrink-0 transition-all duration-800 snap-both md:snap-center
                  ${
                    activeTestimonial === testimonial.id
                      ? "w-[75%] md:w-[70%] lg:w-[55%]"
                      : "w-[196px] cursor-pointer"
                  }`}
                onClick={() =>
                  activeTestimonial !== testimonial.id &&
                  handleCardClick(testimonial.id)
                }
              >
                <div
                  className={`flex bg-white rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[70px] lg:rounded-br-[70px] overflow-hidden h-[190px] md:h-[300px] lg:h-[434px]
                  ${
                    activeTestimonial !== testimonial.id
                      ? "hover:shadow-lg hover:scale-105 transition-transform"
                      : ""
                  }`}
                >
                  <div
                    className={`relative flex-shrink-0 
                    ${
                      activeTestimonial === testimonial.id
                        ? "w-[80px] md:w-[196px] h-[190px] md:h-[300px] lg:h-[434px]"
                        : "w-[80px] md:w-[196px] h-[190px] md:h-[300px] lg:h-[434px]"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      width={1000}
                      height={1000}
                      alt="testimonial"
                      className=  "w-[80px] md:w-full h-[190px] md:h-[300px] lg:h-[434px] rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[70px] lg:rounded-br-[70px] object-cover"
                    />
                  </div>

                  {activeTestimonial === testimonial.id && (
                    <div className="text-[#202020] p-4 md:p-6 lg:p-10 flex flex-col animate-fadeIn">
                      <div className="flex mb-2 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#EC5B37]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="text-[10px] md:text-[16px] lg:text-[24px] md:mb-6 flex-grow">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="pt-2 md:pt-4 flex gap-4 items-center">
                        <div className="md:w-[64px] md:h-[64px] w-[26px] h-[26px] rounded-full overflow-hidden relative">
                          <Image
                            src={testimonial.image2}
                            width={1000}
                            height={1000}
                            alt="testimonial"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[8.18px] md:text-[18px] lg:text-[20px]">
                            {testimonial.name}
                          </p>
                          <p className="text-[6.54px] md:text-[14px] lg:text-[16px] text-[#EC5B37]">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

     
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => handleCardClick(testimonial.id)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer
                  ${
                    activeTestimonial === testimonial.id
                      ? " bg-[#EC5B37]"
                      : " bg-white bg-opacity-50"
                  }`}
                aria-label={`View testimonial ${testimonial.id}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Testimonial;
