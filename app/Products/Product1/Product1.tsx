"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Product1() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const zoomScale = 1 + Math.min(scrollY / 5000, 0.1);

  return (
<div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
      <Image
        
      
          src="https://assets.revolut.com/website/assets/retail/home-V4/Hero.jpg"
          alt="Revolut Background"
          fill
          className="transition-transform duration-300 ease-out will-change-transform object-[15%_center] md:object-center max-w-none"
          style={{
            objectFit: "cover",
            transform: `scale(${zoomScale})`,
          }}
          priority
        />

      <div className="absolute inset-0 py-20 md:flex items-center md:justify-center px-4">
        <div className="text-black md:text-left text-center max-w-3xl">
          <h1 className="text-2xl text-center md:text-5xl font-bold">
            Simple Affordable Reliable.
          </h1>
          <p className="py-4 text-center text-lg md:text-xl">
            Innovative solar solutions built for a cleaner, brighter tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
