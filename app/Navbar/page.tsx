"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide navbar on scroll direction
      if (currentY < 50 || currentY < lastY) {
        setShow(true);
      } else {
        setShow(false);
      }

      // Apply background only when scrolled
      setScrolled(currentY > 10);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/70 backdrop-blur-md text-black hover:bg-white hover:text-black"
          : "bg-transparent text-[#AAAAAA]"
      }`}
    >
      <div className="flex justify-evenly px-10 py-4">
        <div className="flex gap-6">
          <Link href='/'><div>Panjar</div></Link>
          <Link href='/Products'><div>Products</div></Link>
          <Link href='/Services'><div>Services</div></Link>
          <Link href='/Career'><div>Career</div></Link> 
          <div>Login</div>
          
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
