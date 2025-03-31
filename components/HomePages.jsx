"use client";
import React from "react";
import Hero from "./Hero";
import AboutHero from "./AboutHero";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import Process from "./Process";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimonial from "./Testimonial";

const HomePages = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ 
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 1000,
         });
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutHero />
      <SelectedWork />
      <Services />
      <Process />
      <Testimonial />
    </>
  );
};

export default HomePages;
