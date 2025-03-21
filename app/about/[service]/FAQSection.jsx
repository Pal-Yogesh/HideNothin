"use client";
import { Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    setHeights(contentRefs.current.map((ref) => ref?.scrollHeight || 0));
  }, [faqs]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 border-b border-[#E2E3E4] ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-[#E2E3E4] py-7 cursor-pointer overflow-hidden"
          onClick={() => toggleFAQ(index)}
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          <div className="flex justify-between items-center text-[#202020] text-[24px] bigshoulderdisplay">
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
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
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
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div
              className="transform transition-all duration-900 ease-in-out"
              style={{
                transform:
                  openIndex === index ? "translateY(0)" : "translateY(40px)",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: openIndex === index ? "0.3s" : "0s",
              }}
            >
              <p className="mt-4 text-[#555] text-[18px]">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
