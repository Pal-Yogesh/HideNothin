import Image from "next/image";
import FAQSection from "./FAQSection";

export default function ServicePageClient({ serviceData }) {
  return (
    <div className="px-[4%]">
      <h2 className="text-[96px] bigshoulderdisplay text-center py-8">
        {serviceData.title}
      </h2>
      <Image
        src={serviceData.image}
        width={1000}
        height={1000}
        alt={serviceData.title}
        className="w-full h-full object-cover"
      />
      <FAQSection faqs={serviceData.faq} />
    </div>
  );
}