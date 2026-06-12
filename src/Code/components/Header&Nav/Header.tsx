"use client";
import { useState, useEffect } from "react";
import { useContextData } from "../../typescript/contexts/Provider";
import { usePathname } from "next/navigation";
import Btn from "../utilities/Btn";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const { scroll, setScroll, setSectionHash } = useContextData();
  const pageName = usePathname();

  // Target values matching your reservation path setup
  const reservationPage = "/";
  const reservationPath = "#reservation";

  return (
    <div
      className={`header ${scroll > 50 ? " bg-black translate-y-0" : "translate-y-8 bg-black/50 "}`}
    >
      <div className="logo flex text-[#CDA45E] items-center gap-2 italic text-2xl pl-12">
        <span>Downtown</span>
        <img src="/assets/logo.svg" alt="Logo" className="-mx-3 h-14 w-auto inline-block" />
        <span>Bistro</span>
      </div>
      <Nav />
      <div className="pr-12 justify-self-end">
        <Link
          href={pageName === reservationPage ? reservationPath : reservationPage}
          className="inline-block text-white border-2 border-[#CDA45E] bg-transparent rounded-full px-6 py-2 transition-all duration-300 hover:bg-[#CDA45E] hover:text-black cursor-pointer font-medium text-md"
          onClick={(e) => {
            // ONLY smooth scroll and prevent default if we are ALREADY on that target page
            if (pageName === reservationPage) {
              e.preventDefault();
              const targetElement = document.querySelector(reservationPath);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
            // If we are NOT on the correct page, do NOT call e.preventDefault(). 
            // Let Next.js natively navigate to the href link!
            else {
              setSectionHash(reservationPath);
            }
          }}
        >
          Book A Table
        </Link>
      </div>
      
    </div>
  );
};

export default Header;