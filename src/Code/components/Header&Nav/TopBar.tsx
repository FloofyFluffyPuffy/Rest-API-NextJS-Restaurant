"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useContextData } from "@/Code/typescript/contexts/Provider";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const TopBar = () => {
  const { scroll, setScroll } = useContextData();

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    // return () => {
    //   window.removeEventListener("scroll", onScroll);
    // };
  }, [setScroll]);

  return (
    <div
      className={`h-10 fixed top-0 left-0 right-0 flex items-center gap-3 sm:gap-6 px-3 sm:px-6 transition-transform duration-300 ease-in-out z-50 
        ${scroll > 50 ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* translate-y-full mean move it up visually by it full height */}
      <div className="topBarItemCon flex items-center gap-2">
        <div className="text-[#CDA45E]">
          <MdOutlinePhonelinkRing />
        </div>
        <span className="flex text-white">
          +1 5589 55488 55
        </span>
      </div>

      <div className="topBarItemCon2 flex items-center gap-2">
        <div className="text-[#CDA45E]">
          <BsClockHistory />
        </div>
        <span className="flex text-white">
          Mon-Sat: 11AM - 11PM
        </span>
      </div>
    </div>
  );
};

export default TopBar;