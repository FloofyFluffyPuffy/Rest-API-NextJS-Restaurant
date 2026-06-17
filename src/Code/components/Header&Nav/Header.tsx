"use client";
import { useState, useEffect } from "react";
import { useContextData } from "../../typescript/contexts/Provider";
import { usePathname } from "next/navigation";
import Btn from "../utilities/Btn";
import Nav, { navs } from "./Nav";
import Link from "next/link";

const Header = () => {
  const { scroll, setSectionHash } = useContextData();
  const pageName = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 640);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const reservationPath = "#reservation";

  return (
    <div
      className={`fixed right-0 left-0 top-0 z-50 grid grid-cols-3 items-center w-full h-16 transition-transform duration-300 ease-in-out text-white
        ${!isMobile 
          ? `px-6 lg:px-10 ${scroll > 50 ? "bg-black translate-y-0" : "translate-y-8 bg-black/50"}` 
          : "px-4 bg-black translate-y-0"
        }`}
    >
      
      {/* 1. BOOK A TABLE BUTTON */}
      <div className={`flex items-center ${isMobile ? "justify-start" : "order-3 justify-end"}`}>
        <Link
          href="#reservation"
          className={`inline-block text-white border-[#CDA45E] font-bold border-2 bg-transparent rounded-full px-3 py-1.5 sm:px-6 transition-all duration-300 hover:bg-[#CDA45E] hover:text-black cursor-pointer  text-[11px] sm:text-md whitespace-nowrap
  ${!isMobile ? "text-2xl" : ""}`}
          onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector(reservationPath);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            if (isMobile) setIsOpen(false);
          }}
        >
          BOOK A TABLE
        </Link>
      </div>

      {/* 2. LOGO SECTION */}
      <div className={`flex items-center justify-center ${!isMobile ? "order-1 justify-self-start" : ""}`}>
        {!isMobile ? (
          <div className="flex items-center gap-2 italic text-xl lg:text-2xl text-[#CDA45E]">
            <span>Downtown</span>
            <img src="/assets/logo.svg" alt="Logo" className="-mx-3 h-14 w-auto inline-block" />
            <span>Bistro</span>
          </div>
        ) : (
          <img src="/assets/logo.svg" alt="Logo" className="h-17 w-auto" /> 
        )}
      </div>

      {/* 3. NAV / DROPDOWN MENU */}
      <div className={`flex items-center ${!isMobile ? "order-2 justify-center" : "justify-end relative"}`}>
        {!isMobile ? (
          <Nav />
        ) : (
          <div className="flex flex-col items-end">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#CDA45E] text-2xl p-2 focus:outline-none font-medium"
            >
              {isOpen ? "✕" : "☰"}
            </button>

            {/* Floating Dropdown List */}
            {isOpen && (
              <div className="absolute top-full text-center right-0 mt-2 bg-black/95 border border-[#CDA45E]/30 p-4 rounded-md shadow-lg z-50 min-w-[120px] max-w-[80vw]">
                <div className="flex flex-col gap-2">
                  {navs.map((nav) => {
                    if(nav.name === "Others") return null;
                    return (
                      <div key={nav.id}>
                        <Link
                          href={`/${nav.name === "Home" ? "" : nav.name.toLocaleLowerCase()}`}
                          className="block py-1 text-sm text-[#A0A0A0] hover:text-[#CDA45E] rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {nav.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Header;