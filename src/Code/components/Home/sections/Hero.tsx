"use client";
import React from "react";
import Btn from "../../utilities/Btn";
import { useState, useEffect } from "react";
import { useContextData } from "../../../typescript/contexts/Provider";

const Hero = () => {
  const { scroll, setScroll } = useContextData();
  return (
    <div className="hero flex items-center justify-center min-h-screen text-center">
      <div className="hero-content mt-[-34] bold uppercase tracking-widest">
        <h1
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-amber-50"
        >
          Welcome to
        </h1>

        <h1
          data-aos="slide-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-[#CDA45E]"
        >
          Downtown
        </h1>
               <h1
          data-aos="slide-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-[#CDA45E]"
        >
          Bistro
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="text-3xl text-amber-50 mt-8"
        >
          Made with <span className="text-[#CDA45E]">love</span>. Served with <span className="text-[#CDA45E]">Pride.</span>
        </h2>
        <div
          data-aos="zoom-in"
          data-aos-delay="700"
          data-aos-anchor-placement="top-bottom"
        >
        </div>
      </div>
    </div>
  );
};

export default Hero;