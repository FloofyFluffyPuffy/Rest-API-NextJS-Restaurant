"use client";
import { useContextData } from "@/Code/typescript/contexts/Provider";
import React, { useContext } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const BackTopBtn = () => {
  const { scroll, setScroll } = useContextData();
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a
      className={`backTopBtn ${scroll < 50 ? "opacity-0" : "opacity-100"}`}
      onClick={backToTop}
    >
      <FaArrowUpLong />
    </a>
  );
};

export default BackTopBtn;
