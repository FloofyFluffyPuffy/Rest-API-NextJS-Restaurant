"use client";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const BackTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      className={`backTopBtn ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={backToTop}
    >
      <FaArrowUpLong />
    </a>
  );
};

export default BackTopBtn;
