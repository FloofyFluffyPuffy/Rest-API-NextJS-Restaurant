"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useContextData } from "../../../typescript/contexts/Provider";

const Hero = () => {
  const { scroll, setScroll } = useContextData();
  return (
    <div className="hero flex items-center justify-center text-center">
      
      {/* <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        disablePictureInPicture
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/homeHeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}


      <div className="hero-content mt-[-34px] px-4 sm:px-6 font-bold uppercase tracking-widest z-10">
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl sm:text-6xl lg:text-9xl text-amber-50"
        >
          Welcome to
        </h1>

        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl sm:text-6xl lg:text-9xl text-[#CDA45E]"
        >
          Downtown
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl sm:text-6xl lg:text-9xl text-[#CDA45E]"
        >
          Bistro
        </h1>
        <h2
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="text-xl sm:text-2xl lg:text-3xl text-amber-50 mt-8"
        >
          Made with <span className="text-[#CDA45E]">love</span>. Served with <span className="text-[#CDA45E]">Pride.</span>
        </h2>
        <div 
          className="flex justify-center gap-4 mt-8 w-full"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
        >
          <Link href="/menu" className="px-6 py-3 text-sm font-semibold tracking-widest text-[#CDA45E] uppercase transition-colors duration-300 border-2 border-[#CDA45E] hover:bg-[#CDA45E] hover:text-[#0c0b09]">
            View Menu
          </Link>
          <Link href="/about" className="px-6 py-3 text-sm font-semibold tracking-widest text-[#CDA45E] uppercase transition-colors duration-300 border-2 border-[#CDA45E] hover:bg-[#CDA45E] hover:text-[#0c0b09]">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;