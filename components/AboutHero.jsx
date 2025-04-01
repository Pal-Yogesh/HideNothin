// import Link from "next/link";
// import React from "react";
// import AnimateButton from "./AnimateButton";

// const AboutHero = () => {
//   return (
//     <>
//       <div className="mt-28 flex md:gap-44 justify-center items-center text-center custombevietnam overflow-hidden">
//         <div className="w-[240px] h-[2.5px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"></div>
//         <div>
//           <div className="md:w-[533px] px-3 md:px-0">
//             <h2 className=" text-[#202020] text-[20px] ">
//               <span className="text-[#EC5B37]">/</span>about us
//             </h2>

//             <h2 className="text-[#202020] text-[24px] md:text-[32px] leading-relaxed mt-5">
//               Hidenothin® is a creative studio specializing in{" "}
//               <span className="text-[#EC5B37]">Branding</span>,{" "}
//               <span className="text-[#EC5B37]">Web Design</span>, and{" "}
//               <span className="text-[#EC5B37]">Development</span>. We help
//               brands grow, enhance visibility, and make a lasting impact with
//               innovative digital experiences.
//             </h2>
//             <div className="flex justify-center items-center mt-10 md:mt-20">
//               <Link href="/about">
//                 <div>
//                   <AnimateButton label="Discover More" />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="w-[240px] h-[2.5px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"></div>
//       </div>
//     </>
//   );
// };

// export default AboutHero;


"use client"
import Link from "next/link";
import React from "react";
import AnimateButton from "./AnimateButton";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <>
      <div className="mt-28 flex md:gap-44 justify-center items-center text-center custombevietnam overflow-hidden">
        <motion.div 
          className="w-[240px] h-[2.5px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
          initial={{ x: -240, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
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
              <Link href="/about">
                <div>
                  <AnimateButton label="Discover More" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="w-[240px] h-[2.5px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
          initial={{ x: 240, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </>
  );
};

export default AboutHero;