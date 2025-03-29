"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AnimateButton from "./AnimateButton";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/works" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <div className="text-[#FFFFFF] bg-[#202020]">
        <div className="flex justify-center items-center py-12 md:py-20">
          <div className=" md:w-[55%] px-3">
            <h2 className="text-[16px] custombevietnam text-center pb-5 md:pb-10">
              Let&apos; s Create Together
            </h2>
            <h2 className="text-[48px] md:text-[64px] bigshoulderdisplay text-center">
              Let&apos;s craft digital experiences that don&apos;t just
              exist—they lead.
            </h2>
            <div className="flex justify-center items-center pt-10">
              <Link href="/contact">
                <div>
                  <AnimateButton label="Contact Us" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Marquee>
            <Image
              src="/Container.svg"
              alt="container"
              width={1000}
              height={1000}
              className="w-[100vw] h-full"
            />
          </Marquee>
        </div>
        <Marquee className="py-3">
          <div className="flex  items-center space-x-4 p-5">
            <Image
              src="/shape.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
            <h2> Crafting Limitless Ideas, Shaping Bold Futures</h2>
            <Image
              src="/shape2.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
          </div>
          <div className="flex  items-center space-x-4 p-5">
            <Image
              src="/shape.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
            <h2> Crafting Limitless Ideas, Shaping Bold Futures</h2>
            <Image
              src="/shape2.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
          </div>
          <div className="flex  items-center space-x-4 p-5">
            <Image
              src="/shape.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
            <h2> Crafting Limitless Ideas, Shaping Bold Futures</h2>
            <Image
              src="/shape2.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
          </div>
          <div className="flex  items-center space-x-4 p-5">
            <Image
              src="/shape.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
            <h2> Crafting Limitless Ideas, Shaping Bold Futures</h2>
            <Image
              src="/shape2.svg"
              alt="shape"
              width={1000}
              height={1000}
              className="w-[32px] h-[32px]"
            />
          </div>
        </Marquee>
      </div>
      <footer className="w-full md:pt-20 py-10 px-[5%] md:px-[4%] custombevietnam">
        <div className=" ">
          <div className="lg:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src="./logo.svg"
                alt="logo"
                width={120}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>
          <div className="  md:flex md:justify-between  md:items-center">
            <div className="mb-6 md:mb-0 text-[32px] hidden lg:block">
              <p className="text-[#202020]">
                <a href="tel:+917060362403" className="hover:underline">
                  +91 7060362403
                </a>
              </p>
              <p className="text-[#202020] my-2">
                <a
                  href="mailto:info@hidenothin.com"
                  className="hover:underline"
                >
                  info@hidenothin.com
                </a>
              </p>
              <p className="text-[#202020] ">HideNothin</p>
            </div>

            <div className="flex justify-between py-6 md:space-x-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  <div className="text-[#202020] text-[14px] hover:text-[#EC5B37] transition-colors duration-300 cursor-pointer">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className=" text-[32px] lg:hidden">
              <p className="text-[#202020]">
                <a href="tel:+917060362403" className="hover:underline">
                  +91 7060362403
                </a>
              </p>
              <p className="text-[#202020] my-2">
                <a
                  href="mailto:info@hidenothin.com"
                  className="hover:underline"
                >
                  info@hidenothin.com
                </a>
              </p>
            </div>

            <div className="">
              <div className="lg:flex justify-end items-end hidden">
                <Link href="/contact">
                  <div>
                    <AnimateButton label="Contact Us" />
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between lg:space-x-4 pt-10">
                <Link href="#" aria-label="Facebook">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#EC5B37] transition-colors duration-300">
                    <Image
                      src="/fb.svg"
                      alt="fb"
                      width={1000}
                      height={1000}
                      className="w-16 h-16"
                    />
                  </div>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#EC5B37] transition-colors duration-300">
                    <Image
                      src="/insta.svg"
                      alt="fb"
                      width={1000}
                      height={1000}
                      className="w-16 h-16"
                    />
                  </div>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#EC5B37] transition-colors duration-300">
                    <Image
                      src="/linkdin.svg"
                      alt="fb"
                      width={1000}
                      height={1000}
                      className="w-16 h-16"
                    />
                  </div>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#EC5B37] transition-colors duration-300">
                    <Image
                      src="/x.svg"
                      alt="fb"
                      width={1000}
                      height={1000}
                      className="w-16 h-16"
                    />
                  </div>
                </Link>
                <div className="lg:hidden ">
                  <Link href="/contact">
                    <div>
                      <AnimateButton label="Contact Us" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[14px]">
            <div className="mb-4 md:mb-0 hidden lg:block">
              <Link href="/" className="flex items-center">
                <Image
                  src="./logo.svg"
                  alt="logo"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </Link>
            </div>
            <div className="text-[#6A6C71]">
              © {new Date().getFullYear()} Copyright -{" "}
              <span className="text-[#202020]">Hidenothin</span>
            </div>

            <div
              className="mt-4 md:mt-0 hidden lg:block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="h-10 w-10 bg-gray-900 hover:bg-[#EC5B37] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
