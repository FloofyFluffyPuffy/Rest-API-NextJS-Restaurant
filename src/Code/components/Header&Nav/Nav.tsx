import React, { useState, useEffect } from "react";
import { navs } from "@/Code/typescript/data/data";
import Link from "next/link";
const Nav = () => {
  const [navList, setNavList] = useState(navs);
  const [scroll, setScroll] = useState();
  const [open, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleScrollTo = (section: string) => {};
  const handleNavActive = () => {};
  return (
    <nav id="navbar" className={`navbar ${open ? `nav-mobile` : undefined}`}>
      <ul className="navBtn">
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link
              href={`/${nav.name === "Home" ? "" : nav.name.toLocaleLowerCase()}`}
              className={`hover:text-[#CDA45E] nav-link scrollto ${nav.active ? "active" : undefined}`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
