"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExternalImageProducts() {
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
<div className="relative w-full h-screen">
  

  <Image

    src="https://assets.revolut.com/published-assets-v3/31b6da6b-e096-48c3-b544-62789de96c0e/a9e3fee0-5224-433e-90ac-88e278e48ea8.png"
    alt="Revolut Background"
    fill
    className="transition-transform duration-300 ease-out will-change-transform object-[80%_center] md:object-center max-w-none"
    style={{
      objectFit: "cover",
      transform: `scale(${zoomScale})`,
    }}
    priority
  />

  <div className="absolute inset-0 py-20 md:flex items-center md:justify-center px-4">
    <div className="text-white md:text-left text-center max-w-3xl">
      <h1 className="text-2xl text-center md:text-6xl font-bold">
      Shape Future with Panjar </h1>
      <p className="py-4 text-center text-lg md:text-xl">
     Join our mission to drive sustainable innovation and redefine what’s possible with clean energy.
      </p>
      
    </div>
  </div>
</div>

  );
}
