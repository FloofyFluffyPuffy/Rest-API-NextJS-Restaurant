"use client";
import { useState, useEffect } from "react";
import { useContextData } from "../../typescript/contexts/Provider";
import Btn from "../utilities/Btn";
import Nav from "./Nav";
const Header = () => {
  const { scroll, setScroll } = useContextData();
  return (
    <div
      className={`header ${scroll > 50 ? " bg-black translate-y-0" : "translate-y-8 bg-black/50 "}`}
    >
      <div className="logo text-2xl pl-12">Yamming</div>
      <Nav />
      <div className="pr-12 justify-self-end">
        <Btn name="BOOK A TABLE"/>
      </div>
      
    </div>
  );
};

export default Header;
