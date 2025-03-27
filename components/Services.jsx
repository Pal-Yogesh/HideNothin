// "use client"

// import Image from "next/image";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const servicescontent = [
//   { title: "Branding", image: "/Branding.svg" },
//   { title: "Web Design", image: "/Webdesign.svg" },
//   { title: "Development", image: "/development.svg" },
// ];

// const ServiceItem = ({ service }) => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end start", "start end"],
//   });
//   const width = useTransform(scrollYProgress, [0, 1], [200, 600]);

//   return (
//     <div ref={ref} className="flex justify-between items-center mt-16 gap-10">
//       <div className="bg-[#F4F5F5] flex-1 h-[224px] flex justify-center items-center rounded-md">
//         <h2 className="text-[24px]">{service.title}</h2>
//       </div>
//       <motion.div
//         className="h-[224px] flex justify-center items-center rounded-md overflow-hidden"
//         style={{ width }}
//       >
//         <Image
//           src={service.image}
//           alt={service.title}
//           width={1000}
//           height={1000}
//           className="h-full object-cover"
//           style={{ width: '100%' }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <div className="mt-32 mx-[4%]">
//       <div>
//         <h2 className="text-[20px] custombevietnam text-[#EC5B37] pb-10">
//           / <span className="text-[#202020]">our services</span>
//         </h2>
//         <div className="flex justify-between items-center">
//           <div className="text-[#202020] text-[96px] text-left w-[550px] leading-tight bigshoulderdisplay">
//             <h2 className="text-[#EC5B37]">You Request.</h2>
//             We Build!
//           </div>
//           <div className="text-right custombevietnam">
//             <h2>Scroll to explore</h2>3 works
//           </div>
//         </div>
//       </div>

//       <div className="bigshoulderdisplay">
//         {servicescontent.map((service, index) => (
//           <ServiceItem key={index} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const servicescontent = [
  { title: "Branding", image: "/Branding.svg" },
  { title: "Web Design", image: "/Webdesign.svg" },
  { title: "Development", image: "/development.svg" },
];

const ServiceItem = ({ service }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], [700, 300]);

  return (
    <div ref={ref} className="flex justify-start items-center mt-16 gap-10">
      <div className="bg-[#F4F5F5] w-[50%] h-[224px] flex justify-center items-center rounded-md">
        <h2 className="text-[24px]">{service.title}</h2>
      </div>

      <motion.div
        className="h-[224px] flex justify-center items-center rounded-md overflow-hidden"
        style={{ width }}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={1000}
          height={1000}
          className="h-full object-cover"
          style={{ width: "100%" }}
        />
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mt-32 mx-[4%]">
      <div>
        <h2 className="text-[20px] custombevietnam text-[#EC5B37] pb-10">
          / <span className="text-[#202020]">our services</span>
        </h2>
        <div className="flex justify-between items-center">
          <div className="text-[#202020] text-[96px] text-left w-[550px] leading-tight bigshoulderdisplay">
            <h2 className="text-[#EC5B37]">You Request.</h2>
            We Build!
          </div>
          <div className="text-right custombevietnam">
            <h2>Scroll to explore</h2>3 works
          </div>
        </div>
      </div>

      {/* Service Items */}
      <div className="bigshoulderdisplay">
        {servicescontent.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
