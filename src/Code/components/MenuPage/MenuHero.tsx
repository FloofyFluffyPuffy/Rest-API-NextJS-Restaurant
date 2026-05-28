
import React from "react";
import { useContextData } from "@/Code/typescript/contexts/Provider";
const MenuHero = () => {
  const { scroll, setScroll } = useContextData();
  return (
    <div className="menuHero justify-center text-center flex">
      <div className="hero-content ml-9">
        <h1
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-amber-50 mt-8"
        >
          Our
        </h1>
        <br />
        <h1
          data-aos="slide-right"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-[#CDA45E]"
        >
          Culinary Menu
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="text-3xl text-amber-50 mt-4"
        >
          Explore our finely crafted dishes and seasonal flavors
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

export default MenuHero;