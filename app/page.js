"use client";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <Services />

      <FAQ />

      <Process />

      <Footer />
    </>
  );
}
