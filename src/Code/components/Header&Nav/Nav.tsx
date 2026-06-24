"react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { useContextData } from "@/Code/typescript/contexts/Provider";
import { DiVim } from "react-icons/di";
export const navs = [
  {
    id: 1,
    name: "Home",
    target: "hero",
    active: true,
  },
  {
    id: 2,
    name: "Menu",
    target: "menu",
    active: false,
  },
  {
    id: 3,
    name: "About",
    target: "about",
    active: false,
  },
  {
    id: 4,
    name: "Others",
    target: "others",
    active: false,
    dropdown: [
      { id: 40, name: "Booking", path: "#reservation", page: "/"},
      { id: 41, name: "Catering", path: "#events", page: "/" },
      { id: 42, name: "Chefs", path: "#chefs", page: "/about" },
      { id: 43, name: "Gallery", path: "#gallery", page: "/" },
      { id: 44, name: "Location", path: "#location", page: "/" },
    ],
  },
];

const Nav = () => {
  const [navList, setNavList] = useState(navs);
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pageName = usePathname();
  const { sectionHash, setSectionHash } = useContextData();
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const updateSize = () => setIsMobile(window.innerWidth <= 640)
      updateSize()
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }, [])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (id: number) => {
    if (activeDropdownId === id) {
      setActiveDropdownId(null);
    } else {
      setActiveDropdownId(id);
    }
  };
  return (
    <div>
       {!isMobile ? <nav id="navbar" className="navbar" ref={navRef}>
      <ul className="navBtn flex flex-wrap justify-center gap-3 items-center">
        {navList.map((nav) => {
          
          if (nav.dropdown) {
            const isCurrentDropdownOpen = activeDropdownId === nav.id;
            // this line mean if activeDropdownid is same value as nav.id then
            //set isCurrentDropdownOpen to activeDropdownId
            return (
              <li key={nav.id} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(nav.id)}
                  // Active state turns text gold (#CDA45E), default text is gray (#A0A0A0), turns white/gold on hover
                  className={`flex group items-center text-12px font-medium transition-colors duration-200 focus:outline-none cursor-pointer group-hover:text-[#CDA45E] ${
                    isCurrentDropdownOpen && "text-[#CDA45E]"
                  }`}
                >
                  <span>{nav.name}</span>
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform group-hover:text-[#CDA45E] duration-200 ${isCurrentDropdownOpen ? "rotate-180 text-[#CDA45E]" : "text-white"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isCurrentDropdownOpen && (
                  /* Dropdown container: 
                    - bg-[#0c0b09] (bistro dark background tint) 
                    - border border-neutral-800 to cleanly separate it from the background video/image
                  */
                  <div className="absolute left-0 mt-3 w-44 rounded-md shadow-2xl bg-[#0c0b09] border border-neutral-800 py-1 z-50">
                    {nav.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        // This evaluates the condition and returns just the string path to the href attribute
                        href={ item.name === "Booking" || item.name === "Location" ? item.path : pageName === item.page ? item.path : item.page}
                        className="block px-4 py-2.5 text-sm text-white hover:bg-neutral-900 hover:text-[#CDA45E] transition-colors duration-150 cursor-pointer"
                        onClick={async (e) => {
                          // ONLY smooth scroll and prevent default if we are ALREADY on that target page
                          if (pageName === item.page) {
                            e.preventDefault(); 
                            const targetElement = document.querySelector(item.path);
                            if (targetElement) {
                              targetElement.scrollIntoView({ behavior: "smooth" });
                            }
                            setActiveDropdownId(null);
                          }
                          // If we are NOT on the correct page, do NOT call e.preventDefault(). 
                          // Let Next.js natively navigate to the href link!
                          else if (item.name !== "Booking" && item.name !== "Location") {
                              setSectionHash(item.path)
                            }}}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          }

          const navHref = `/${nav.name === "Home" ? "" : nav.name.toLocaleLowerCase()}`;
          const isActiveNav = pageName === navHref;
          return (
            <li key={nav.id}>
              <Link
                href={navHref}
                className={`text-12px transition-colors duration-200 hover:text-[#CDA45E] ${isActiveNav ? "text-[#CDA45E]" : "text-white"}`}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav> : 
    /*annoying mobile stuff */
    <div className="mobileNavCon">
      <nav id="navbar" className="navbar" ref={navRef}>
      <ul className="navBtn flex flex-wrap justify-center gap-3 items-center">
        {navList.map((nav) => {
          if (nav.name === "Others") return null;
          const navHref = `/${nav.name === "Home" ? "" : nav.name.toLocaleLowerCase()}`;
          const isActiveNav = pageName === navHref;
          return (
            <li key={nav.id}>
              <Link
                href={navHref}
                className={`text-12px transition-colors duration-200 hover:text-[#CDA45E] ${isActiveNav ? "text-[#CDA45E]" : "text-white"}`}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>}
    </div>
   
  );
};

export default Nav;