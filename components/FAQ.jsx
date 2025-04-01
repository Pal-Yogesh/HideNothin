"use client"
import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing
      }
    },
  };

  return (
    <motion.div 
      className="mt-10 md:mt-22 mx-[4%] custombevietnam mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false}}
      variants={containerVariants}
    >
      <div className="md:flex md:justify-between">
        <motion.h2 
          className="text-[20px] text-[#EC5B37] pb-5 md:pb-10 md:w-[40%] md:pt-1"
          variants={itemVariants}
        >
          / <span className="text-[#202020]">some questions</span>
        </motion.h2>
        <div className="text-[#202020] text-[20px] md:text-[32px] md:w-[60%]">
          <motion.h2 variants={itemVariants}>
            Our <span className="text-[#EC5B37]">FAQ </span>section provides
            clear answers to common questions, helping you find the information
            you need quickly and easily.
          </motion.h2>

          <motion.div 
            className="mt-5 md:mt-10 border-b border-[#E2E3E4]"
            variants={containerVariants}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-[#E2E3E4] py-7 cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(index)}
                variants={itemVariants}
              >
                <div className="flex justify-between items-center text-[#202020] text-[16px] md:text-[24px]">
                  <h3
                    className={`transition-colors duration-500 ease-in-out ${
                      openIndex === index ? "text-[#EC5B37]" : "text-[#202020]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`text-[16px] md:text-[24px] transition-all duration-700 ease-in-out transform ${
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;