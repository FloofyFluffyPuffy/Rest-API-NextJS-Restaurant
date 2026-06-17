"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type DropdownItem = {
  id: number;
  name: string;
  path: string;
  page: string;
};

type NavItem = {
  id: number;
  name: string;
  target: string;
  page: string;
  dropdown?: DropdownItem[];
};

export const navs: NavItem[] = [
  { id: 1, name: "Home", target: "hero", page: "/" },
  { id: 2, name: "Menu", target: "menu", page: "/menu" },
  { id: 3, name: "About", target: "about", page: "/about" },
  {
    id: 4,
    name: "Others",
    target: "others",
    page: "/",
    dropdown: [
      { id: 40, name: "Booking", path: "#reservation", page: "/" },
      { id: 41, name: "Catering", path: "#events", page: "/" },
      { id: 42, name: "Chefs", path: "#chefs", page: "/about" },
      { id: 43, name: "Gallery", path: "#gallery", page: "/" },
    ],
  },
];

const Nav = () => {
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth <= 640);
    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
    setActiveDropdownId((current) => (current === id ? null : id));
  };

  return (
    <div>
      {!isMobile ? (
        <nav id="navbar" className="navbar" ref={navRef}>
          <ul className="navBtn flex flex-wrap justify-center gap-3 items-center">
            {navs.map((nav) => {
              if (nav.dropdown) {
                const isCurrentDropdownOpen = activeDropdownId === nav.id;
                return (
                  <li key={nav.id} className="relative group">
                    <button
                      onClick={() => handleDropdownToggle(nav.id)}
                      className={`flex items-center text-12px font-medium transition-colors duration-200 focus:outline-none cursor-pointer ${
                        isCurrentDropdownOpen ? "text-[#CDA45E]" : "text-white"
                      }`}
                    >
                      <span>{nav.name}</span>
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isCurrentDropdownOpen ? "rotate-180 text-[#CDA45E]" : "text-white"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isCurrentDropdownOpen && (
                      <div className="absolute left-0 mt-3 w-44 rounded-md shadow-2xl bg-[#0c0b09] border border-neutral-800 py-1 z-50">
                        {nav.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            href={`${item.page}${item.path}`}
                            className="block px-4 py-2.5 text-sm text-white hover:bg-neutral-900 hover:text-[#CDA45E] transition-colors duration-150"
                            onClick={() => setActiveDropdownId(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={nav.id}>
                  <Link
                    href={nav.page}
                    className="text-12px text-white transition-colors duration-200 hover:text-[#CDA45E]"
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <div className="mobileNavCon">
          <nav id="navbar" className="navbar" ref={navRef}>
            <ul className="navBtn flex flex-wrap justify-center gap-3 items-center">
              {navs
                .filter((nav) => nav.name !== "Others")
                .map((nav) => (
                  <li key={nav.id}>
                    <Link
                      href={nav.page}
                      className="text-12px text-white transition-colors duration-200 hover:text-[#CDA45E]"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
