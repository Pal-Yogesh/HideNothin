// "use client";
// import Image from "next/image";
// import React, { useEffect, useState, useRef } from "react";
// import { useInView } from "react-intersection-observer";


// const timelineData = [
//   {
//     title: "Our Mission",
//     description:
//       "We empower brands by seamlessly integrating inspired design with advanced technology, crafting digital experiences that captivate and drive success.",
//   },
//   {
//     title: "Our Vision",
//     description:
//       "In a world rapidly shifting online, no one should be left behind. We believe in breaking barriers, making the digital space open, meaningful, and transformative for brands, businesses, and individuals.",
//   },
//   {
//     title: "Our Goal",
//     description:
//       "To craft authentic digital experiences that not only look good but also connect, convert, and create lasting impressions. We are here to help brands grow, stand out, and lead in the digital age.",
//   },
// ];


// const AboutUS = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const timelineRef = useRef(null);


//   const timelineItems = timelineData.map((item, index) => {
//     const { ref, inView } = useInView({
//       threshold: 0.9,
//       triggerOnce: false,
//     });

//     useEffect(() => {
//       if (inView) {
//         setActiveIndex(index);
//       }
//     }, [inView]);

//     return (
//       <div
//         ref={ref}
//         key={index}
//         className="  text-[#202020] overflow-hidden"
    
//       >
//         <h3 className=" text-[24px] mb-4">{item.title}</h3>
//         <p className="text-[16px]">{item.description}</p>
//       </div>
//     );
//   });

//   return (
//     <>
//       <div className="custombevietnam px-[4%] overflow-hidden">
//         <div>
//           <h2 className="text-[#202020] text-[64px] lg:text-[96px] bigshoulderdisplay text-center py-10">
//             About Us
//           </h2>
//           <div className="">
//             <Image
//               src="/aboutus.svg"
//               width={1000}
//               height={1000}
//               alt="About Us"
//               className="w-full h-[300px] rounded-xl md:h-full object-cover"
//             />
//           </div>

//           <div className="md:flex md:justify-between py-14">
//             <h2 className="text-[20px] text-[#EC5B37] pb-10 lg:w-[35%] pt-1">
//               / <span className="text-[#202020]">about us</span>
//             </h2>
//             <div className="text-[#202020] text-[24px] md:text-[32px] lg:w-[61%]">
//               <h2>
//                 We are creative designers and tech experts, committed to
//                 elevating your{" "}
//                 <span className="text-[#EC5B37]">digital presence</span> through
//                 <span className="text-[#EC5B37]"> inspired design</span> and
//                 <span className="text-[#EC5B37]">
//                   {" "}
//                   cutting-edge technology.
//                 </span>
//               </h2>
//               <div className="flex gap-5 md:gap-16 pt-20" ref={timelineRef}>
//                 <div className="relative w-[2px] flex-shrink-0">
//                   <div
//                     className="absolute left-0 w-[2px] bg-[#EC5B37] transition-all duration-500 ease-in-out"
//                     style={{
//                       height: `${
//                         ((activeIndex + 1) / timelineData.length) * 100
//                       }%`,
//                     }}
//                   ></div>
//                 </div>

//                 <div className="space-y-10 md:space-y-12  ">
//                   {timelineItems}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>   
//     </>
//   );
// };

// export default AboutUS;

"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Our Mission",
    description:
      "We empower brands by seamlessly integrating inspired design with advanced technology, crafting digital experiences that captivate and drive success.",
  },
  {
    title: "Our Vision",
    description:
      "In a world rapidly shifting online, no one should be left behind. We believe in breaking barriers, making the digital space open, meaningful, and transformative for brands, businesses, and individuals.",
  },
  {
    title: "Our Goal",
    description:
      "To craft authentic digital experiences that not only look good but also connect, convert, and create lasting impressions. We are here to help brands grow, stand out, and lead in the digital age.",
  },
];

const AboutUS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const timelineItems = timelineData.map((item, index) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        setActiveIndex(index);
      }
    }, [inView]);

    return (
      <motion.div
        ref={ref}
        key={index}
        className="text-[#202020] overflow-hidden"
        variants={timelineItemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={index}
      >
        <h3 className="text-[24px] mb-4">{item.title}</h3>
        <p className="text-[16px]">{item.description}</p>
      </motion.div>
    );
  });

  return (
    <>
      <motion.div 
        className="custombevietnam px-[4%] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div>
          <motion.h2 
            className="text-[#202020] text-[64px] lg:text-[96px] bigshoulderdisplay text-center py-10"
            variants={titleVariants}
          >
            About Us
          </motion.h2>
          
          <motion.div 
            className=""
            variants={imageVariants}
          >
            <Image
              src="/aboutus.svg"
              width={1000}
              height={1000}
              alt="About Us"
              className="w-full h-[300px] rounded-xl md:h-full object-cover"
            />
          </motion.div>

          <div className="md:flex md:justify-between py-14">
            <motion.h2 
              className="text-[20px] text-[#EC5B37] pb-10 lg:w-[35%] pt-1"
              variants={headingVariants}
            >
              / <span className="text-[#202020]">about us</span>
            </motion.h2>
            
            <div className="text-[#202020] text-[24px] md:text-[32px] lg:w-[61%]">
              <motion.h2
                variants={headingVariants}
              >
                We are creative designers and tech experts, committed to
                elevating your{" "}
                <span className="text-[#EC5B37]">digital presence</span> through
                <span className="text-[#EC5B37]"> inspired design</span> and
                <span className="text-[#EC5B37]">
                  {" "}
                  cutting-edge technology.
                </span>
              </motion.h2>
              
              <div className="flex gap-5 md:gap-16 pt-20" ref={timelineRef}>
                <div className="relative w-[2px] flex-shrink-0">
                  <motion.div
                    className="absolute left-0 w-[2px] bg-[#EC5B37]"
                    initial={{ height: "0%" }}
                    animate={{ 
                      height: `${((activeIndex + 1) / timelineData.length) * 100}%` 
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>

                <motion.div 
                  className="space-y-10 md:space-y-12"
                  variants={containerVariants}
                >
                  {timelineItems}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>   
    </>
  );
};

export default AboutUS;