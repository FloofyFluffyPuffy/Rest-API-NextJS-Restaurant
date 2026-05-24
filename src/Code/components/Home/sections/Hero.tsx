"use client";
import React from "react";
import Btn from "../../utilities/Btn";
import { useState, useEffect } from "react";
import { useContextData } from "../../../typescript/contexts/Provider";

const Hero = () => {
  const { scroll, setScroll } = useContextData();
  return (
    <div className="hero">
      <div className="hero-content ml-9">
        {/* Added anchor-placement to ensure it triggers immediately at the top */}
        <h1
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-amber-50"
        >
          Welcome to
        </h1>
        <br />
                <h1
          data-aos="slide-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-amber-50"
        >
          yammy
        </h1>
        <br />
        <h1
          data-aos="slide-right"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          className="text-9xl text-[#CDA45E]"
        >
          Restaurant
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="text-3xl text-amber-50"
        >
          Delivering great food for more than 18 years!
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
