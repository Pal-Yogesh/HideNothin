"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const workData = [
  {
    id: 1,
    image: "/UIUX.svg",
    title: "PCSS Softech",
    category: "UI/UX Design, Development",
    link: "/works/luna-launch",
  },
  {
    id: 2,
    image: "/UIUX2.svg",
    title: "PCSS Softech",
    category: "UI/UX Design, Development",
    link: "/works/aether-arc",
  },
  {
    id: 3,
    image: "/UIUX3.svg",
    title: "PCSS Softech",
    category: "Branding, Development",
    link: "/works/nova-narrative",
  },
 
];

const Work = () => {
  return (
    <div className="custombevietnam px-[4%] overflow-hidden">
      <h2 className="text-[#202020] text-[96px] bigshoulderdisplay text-center py-10">
        Works
      </h2>
      <div className="">
        {workData.map((work) => (
          <Link href={work.link} key={work.id}>
            <div className="space-y-5 mb-12 md:mb-16 cursor-pointer">
              <Image
                src={work.image}
                width={1000}
                height={1000}
                alt={work.title}
                className="w-full h-[190px] md:h-[527px] rounded-2xl object-cover"
              />
              <div className="flex items-center gap-4">
                <h2 className="text-[16px] md:text-[24px] text-[#202020]">{work.title} /</h2>
                <h2 className="text-[16px] md:text-[20px] text-[#6A6C71]">{work.category}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
