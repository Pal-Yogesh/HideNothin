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

const HomePages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Hero />
      <AboutHero />
      <SelectedWork />
      <Services />
      <Process />
    </>
  );
};

export default HomePages;
