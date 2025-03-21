// import React, { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { Plus } from "lucide-react";

// const faqData = [
//   {
//     question: "What services do you offer?",
//     answer:
//       "We offer branding, web design, and development services tailored to your needs.",
//   },
//   {
//     question: "What is your typical project process?",
//     answer:
//       "You can reach us via our contact form or email us directly at support@example.com.",
//   },
//   {
//     question: "How long does it take to complete a project?",
//     answer:
//       "Yes, we provide custom solutions based on your specific requirements.",
//   },
//   {
//     question: "Do you offer post-launch support and maintenance?",
//     answer:
//       "Our pricing depends on the scope of the project. Contact us for a detailed quote.",
//   },
//   {
//     question: "How much do your services cost?",
//     answer:
//       "Timelines vary depending on project complexity. We will provide an estimate during the initial consultation.",
//   },
//   {
//     question: "What do I need to prepare before starting a project?",
//     answer: "Yes, we offer post-launch support and maintenance services.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out" });
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-32 mx-[4%] custombevietnam">
//       <div className="flex justify-between">
//         <h2 className="text-[20px] text-[#EC5B37] pb-10 w-[40%] pt-1">
//           / <span className="text-[#202020]">some questions</span>
//         </h2>
//         <div className="text-[#202020] text-[32px] w-[60%]">
//           <h2>
//             Our <span className="text-[#EC5B37]">FAQ </span>section provides
//             clear answers to common questions, helping you find the information
//             you need quickly and easily.
//           </h2>

//           <div className="mt-10 border-b border-[#E2E3E4]">
//             {faqData.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border-b border-[#E2E3E4] py-7 cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//                 data-aos="fade-up"
//               >
//                 <div className="flex justify-between items-center text-[#202020] text-[24px] transition-all duration-500 ease-in-out">
//                   <h3
//                     className={`transition-colors duration-500 ease-in-out ${
//                       openIndex === index ? "text-[#EC5B37]" : "text-[#202020]"
//                     }`}
//                   >
//                     {faq.question}
//                   </h3>
//                   <span
//                     className={`text-[24px] transform transition-transform duration-500 ease-in-out ${
//                       openIndex === index ? "rotate-45" : "rotate-0"
//                     }`}
//                   >
//                     <Plus />
//                   </span>
//                 </div>
//                 {openIndex === index && (
//                  <div
//                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//                  }`}
//                >
//                  <p className="mt-4 text-[#555] text-[18px]">{faq.answer}</p>
//                </div>
               
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
"use client"
import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer branding, web design, and development services tailored to your needs.",
  },
  {
    question: "What is your typical project process?",
    answer:
      "You can reach us via our contact form or email us directly at support@example.com.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Yes, we provide custom solutions based on your specific requirements.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Our pricing depends on the scope of the project. Contact us for a detailed quote.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Timelines vary depending on project complexity. We will provide an estimate during the initial consultation.",
  },
  {
    question: "What do I need to prepare before starting a project?",
    answer: "Yes, we offer post-launch support and maintenance services.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  

  useEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [faqData]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-22 mx-[4%] custombevietnam mb-10">
      <div className="flex justify-between">
        <h2 className="text-[20px] text-[#EC5B37] pb-10 w-[40%] pt-1">
          / <span className="text-[#202020]">some questions</span>
        </h2>
        <div className="text-[#202020] text-[32px] w-[60%]">
          <h2>
            Our <span className="text-[#EC5B37]">FAQ </span>section provides
            clear answers to common questions, helping you find the information
            you need quickly and easily.
          </h2>

          <div className="mt-10 border-b border-[#E2E3E4]">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E2E3E4] py-7 cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(index)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex justify-between items-center text-[#202020] text-[24px]">
                  <h3
                    className={`transition-colors duration-500 ease-in-out ${
                      openIndex === index ? "text-[#EC5B37]" : "text-[#202020]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`text-[24px] transition-all duration-700 ease-in-out transform ${
                      openIndex === index ? "text-[#EC5B37] rotate-45" : "rotate-0"
                    }`}
                    style={{
                      transformOrigin: "center",
                      transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }}
                  >
                    <Plus />
                  </span>
                </div>
                
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-900 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
                    opacity: openIndex === index ? 1 : 0,
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                  <div
                    className="transform transition-all duration-900 ease-in-out"
                    style={{
                      transform: openIndex === index ? "translateY(0)" : "translateY(40px)",
                      transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transitionDelay: openIndex === index ? "0.3s" : "0s"
                    }}
                  >
                    <p className="mt-4 text-[#555] text-[18px]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;