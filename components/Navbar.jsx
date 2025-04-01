"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimateButton from "./AnimateButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/our-services" },
    { name: "Works", path: "/works" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-[#FFFFFF] py-5 px-4 md:px-6 lg:px-10  z-50 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/HideNothinLogo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[80px] md:w-[130px] h-[30px] object-contain"
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
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block w-6 h-[2px] bg-[#202020] transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-[2px] bg-[#202020] transition-all duration-200 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-[2px] bg-[#202020] transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-300 delay-${index * 100} ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`custombevietnam text-3xl font-medium ${
                    pathname === item.path ? "text-[#EC5B37]" : "text-[#202020]"
                  }`}>
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className={`mt-auto mb-12 transform transition-all duration-300 delay-400 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-[#EC5B37] text-white py-3 px-6 rounded-full text-lg font-medium text-center">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;