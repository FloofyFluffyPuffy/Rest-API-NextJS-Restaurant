"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useContextData } from "@/Code/typescript/contexts/Provider";

const TopBar = () => {
  const { scroll, setScroll } = useContextData();
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div
      className={`topBar  ${scroll > 50 ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* translate-y-full mean move it up visually by it full height */}
      TopBar {scroll}
    </div>
  );
};

export default TopBar;
