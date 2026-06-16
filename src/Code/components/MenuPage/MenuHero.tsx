"use client"
import React from "react";
import { useContextData } from "@/Code/typescript/contexts/Provider";
const MenuHero = () => {
  return (
    <div className="menuHero justify-center text-center flex px-4 sm:px-6">
      <div className="hero-content ml-0 sm:ml-9">
        <h1
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl sm:text-6xl lg:text-9xl text-[#CDA45E] mt-8"
        >
          Downtown Bistro's
        </h1>
        <br />
        <h1
          data-aos="slide-right"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl sm:text-6xl lg:text-9xl text-amber-50"
        >
          Culinary Menu
        </h1>
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

export default MenuHero;