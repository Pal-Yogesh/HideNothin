"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const workData = [
  {
    id: 1,
    image: "/lunalaunch.svg",
    title: "Luna Launch",
    category: "UI/UX Design, Development",
    link: "/works/luna-launch",
  },
  {
    id: 2,
    image: "/aetherarc.svg",
    title: "Aether Arc",
    category: "UI/UX Design, Development",
    link: "/works/aether-arc",
  },
  {
    id: 3,
    image: "/Novanarrative.svg",
    title: "Nova Narrative",
    category: "Branding, Development",
    link: "/works/nova-narrative",
  },
  {
    id: 4,
    image: "/Spectrumtudio.svg",
    title: "Spectrum Studio",
    category: "Web Design",
    link: "/works/spectrum-studio",
  },
  {
    id: 5,
    image: "/lunalaunch.svg",
    title: "Prism Pulse",
    category: "UI/UX Design",
    link: "/works/prism-pulse",
  },
  {
    id: 6,
    image: "/lunalaunch.svg",
    title: "Mosaic Motion",
    category: "Mobile App Development",
    link: "/works/mosaic-motion",
  },
  {
    id: 7,
    image: "/lunalaunch.svg",
    title: "Mindscapes",
    category: "E-commerce Development",
    link: "/works/mindscapes",
  },
  {
    id: 8,
    image: "/lunalaunch.svg",
    title: "Word Play",
    category: "Marketing & SEO",
    link: "/works/word-play",
  },
  {
    id: 9,
    image: "/lunalaunch.svg",
    title: "Story Craft",
    category: "Web App Development",
    link: "/works/story-craft",
  },
  {
    id: 10,
    image: "/lunalaunch.svg",
    title: "Visionary",
    category: "Software Development",
    link: "/works/visionary",
  },
];

const Work = () => {
  return (
    <div className="custombevietnam px-[4%] overflow-hidden">
      <h2 className="text-[#202020] text-[96px] bigshoulderdisplay text-center py-10">
        Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workData.map((work) => (
          <Link href={work.link} key={work.id}>
            <div className="space-y-1 cursor-pointer">
              <Image
                src={work.image}
                width={1000}
                height={1000}
                alt={work.title}
                className="w-[630px] h-[345px] rounded-[20px]"
              />
              <div className="flex items-center gap-4">
                <h2 className="text-[24px] text-[#202020]">{work.title} /</h2>
                <h2 className="text-[20px] text-[#6A6C71]">{work.category}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
