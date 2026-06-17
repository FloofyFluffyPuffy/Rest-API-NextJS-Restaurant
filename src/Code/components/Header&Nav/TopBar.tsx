"use client";
import { useState, useEffect } from "react";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 640);
    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      {!isMobile && <div
      className={`h-8 fixed top-0 left-0 right-0 flex items-center gap-3 sm:gap-6 px-3 sm:px-6 transition-transform duration-300 ease-in-out z-50 
        ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}
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
    </div>}
    </div>
  );
};

export default TopBar;