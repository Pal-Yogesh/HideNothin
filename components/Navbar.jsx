"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AnimateButton from "./AnimateButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-[#FFFFFF] py-5 px-6 md:px-12">
      <div className=" flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[113px] h-[24px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div
                className={`custombevietnam w-[80px] h-[40px] rounded-full flex justify-center items-center text-[14px] transition-colors duration-300 ${
                  pathname === item.path
                    ? "bg-[#EC5B37] text-white"
                    : "text-[#202020] hover:text-[#FFFFFF] hover:bg-[#EC5B37]"
                }`}
              >
                {" "}
                {item.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/contact">
          <div>
            <AnimateButton label="Contact Us" />
          </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
