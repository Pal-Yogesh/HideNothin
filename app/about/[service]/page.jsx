// "use client"
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { Plus } from "lucide-react";

// const servicesData = {
//   branding: {
//     title: "Branding",
//     image: "/brandinghero.svg",
//     faq: [
//       { question: "What is Brand Strategy?", answer: "Brand strategy is a long-term plan for the development of a successful brand to achieve specific goals." },
//       { question: "What is Visual Identity Design?", answer: "Visual identity design includes logo, color palettes, typography, and other visual elements representing your brand." },
//       { question: "Why is Brand Storytelling Important?", answer: "Brand storytelling creates a deeper emotional connection with your audience, making your brand more memorable." },
//       { question: "What is Packaging and Collateral?", answer: "Packaging and collateral design involve creating physical and digital brand materials like brochures, business cards, and product packaging." },
//     ],
//   },
//   webdesign: {
//     title: "Web Design",
//     image: "/webdesignhero.svg",
//     faq: [
//       { question: "Why is UX/UI important?", answer: "UX/UI design enhances user experience by making websites intuitive, engaging, and accessible." },
//       { question: "What is Responsive Web Design?", answer: "Responsive web design ensures websites look great and function well on all screen sizes." },
//       { question: "How does SEO affect web design?", answer: "Good web design includes SEO best practices for better search engine rankings and visibility." },
//       { question: "What are the latest trends in Web Design?", answer: "Some trends include dark mode, 3D elements, micro-interactions, and AI-driven personalization." },
//     ],
//   },
//   development: {
//     title: "Development",
//     image: "/developmenthero.svg",
//     faq: [
//       { question: "What is Full-Stack Development?", answer: "Full-stack development covers both front-end and back-end development, ensuring complete project functionality." },
//       { question: "What are the benefits of using React?", answer: "React allows for fast, scalable, and modular web applications with a strong developer community." },
//       { question: "What is API Development?", answer: "API development enables different software systems to communicate and share data efficiently." },
//       { question: "Why is Performance Optimization Important?", answer: "Performance optimization ensures fast load times, better user experience, and improved SEO rankings." },
//     ],
//   },
// };

// export default  async function ServicePage({ params }) {
//   const { service } = await  params;
//   const serviceData = servicesData[service];

//   if (!serviceData) {
//     return <h1 className="text-center text-2xl">Service Not Found</h1>;
//   }

//   return (
//     <div className="px-[4%]">
//       <h2 className="text-[96px] bigshoulderdisplay text-center py-8">
//         {serviceData.title}
//       </h2>
//       <Image
//         src={serviceData.image}
//         width={1000}
//         height={1000}
//         alt={serviceData.title}
//         className="w-full h-full object-cover"
//       />
//       <FAQSection faqs={serviceData.faq} />
//     </div>
//   );
// }

// function FAQSection({ faqs }) {
//   const [openIndex, setOpenIndex] = useState(null);
//   const contentRefs = useRef([]);
//   const [heights, setHeights] = useState([]);

//   useEffect(() => {
//     setHeights(contentRefs.current.map((ref) => ref?.scrollHeight || 0));
//   }, [faqs]);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-10 border-b border-[#E2E3E4]">
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className="border-b border-[#E2E3E4] py-7 cursor-pointer overflow-hidden"
//           onClick={() => toggleFAQ(index)}
//           data-aos="fade-up"
//           data-aos-delay={index * 50}
//         >
//           <div className="flex justify-between items-center text-[#202020] text-[24px]">
//             <h3
//               className={`transition-colors duration-500 ease-in-out ${
//                 openIndex === index ? "text-[#EC5B37]" : "text-[#202020]"
//               }`}
//             >
//               {faq.question}
//             </h3>
//             <span
//               className={`text-[24px] transition-all duration-700 ease-in-out transform ${
//                 openIndex === index ? "text-[#EC5B37] rotate-45" : "rotate-0"
//               }`}
//               style={{
//                 transformOrigin: "center",
//                 transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
//               }}
//             >
//               <Plus />
//             </span>
//           </div>
//           <div
//             ref={(el) => (contentRefs.current[index] = el)}
//             className="overflow-hidden transition-all duration-900 ease-in-out"
//             style={{
//               maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
//               opacity: openIndex === index ? 1 : 0,
//               transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
//             }}
//           >
//             <div
//               className="transform transition-all duration-900 ease-in-out"
//               style={{
//                 transform: openIndex === index ? "translateY(0)" : "translateY(40px)",
//                 transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
//                 transitionDelay: openIndex === index ? "0.3s" : "0s",
//               }}
//             >
//               <p className="mt-4 text-[#555] text-[18px]">{faq.answer}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import ServicePageClient from "./ServicePageClient";

const servicesData = {
  branding: {
    title: "Branding",
    image: "/brandinghero.svg",
    faq: [
      {
        question: "What is Brand Strategy?",
        answer:
          "Brand strategy is a long-term plan for the development of a successful brand to achieve specific goals.",
      },
      {
        question: "What is Visual Identity Design?",
        answer:
          "Visual identity design includes logo, color palettes, typography, and other visual elements representing your brand.",
      },
      {
        question: "Why is Brand Storytelling Important?",
        answer:
          "Brand storytelling creates a deeper emotional connection with your audience, making your brand more memorable.",
      },
      {
        question: "What is Packaging and Collateral?",
        answer:
          "Packaging and collateral design involve creating physical and digital brand materials like brochures, business cards, and product packaging.",
      },
    ],
  },
  webdesign: {
    title: "Web Design",
    image: "/webdesignhero.svg",
    faq: [
      {
        question: "Why is UX/UI important?",
        answer:
          "UX/UI design enhances user experience by making websites intuitive, engaging, and accessible.",
      },
      {
        question: "What is Responsive Web Design?",
        answer:
          "Responsive web design ensures websites look great and function well on all screen sizes.",
      },
      {
        question: "How does SEO affect web design?",
        answer:
          "Good web design includes SEO best practices for better search engine rankings and visibility.",
      },
      {
        question: "What are the latest trends in Web Design?",
        answer:
          "Some trends include dark mode, 3D elements, micro-interactions, and AI-driven personalization.",
      },
    ],
  },
  development: {
    title: "Development",
    image: "/developmenthero.svg",
    faq: [
      {
        question: "What is Full-Stack Development?",
        answer:
          "Full-stack development covers both front-end and back-end development, ensuring complete project functionality.",
      },
      {
        question: "What are the benefits of using React?",
        answer:
          "React allows for fast, scalable, and modular web applications with a strong developer community.",
      },
      {
        question: "What is API Development?",
        answer:
          "API development enables different software systems to communicate and share data efficiently.",
      },
      {
        question: "Why is Performance Optimization Important?",
        answer:
          "Performance optimization ensures fast load times, better user experience, and improved SEO rankings.",
      },
    ],
  },
};

export default async function ServicePage({ params }) {
  const { service } = await params;
  const serviceData = servicesData[service];

  if (!serviceData) {
    return <h1 className="text-center text-2xl">Service Not Found</h1>;
  }

  return <ServicePageClient serviceData={serviceData} />;
}
