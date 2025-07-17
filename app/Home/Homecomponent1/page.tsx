"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExternalImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Limit the zoom level: min 1.0, max 1.1 (on scrollY up to 300px)
  const zoomScale = 1 + Math.min(scrollY / 5000, 0.1);

  return (
<div className="relative w-screen h-screen overflow-hidden overflow-x-hidden">      <Image
  src="https://assets.revolut.com/published-assets-v3/295390de-9798-4a4f-9872-2f2250864e44/e1e76086-0bc8-49af-a1ca-159e8895bf06.png"
  alt="Revolut Background"
  fill
  className="transition-transform duration-300 ease-out will-change-transform object-[85%_center] md:object-center max-w-none"
  style={{
    objectFit: "cover",
    transform: `scale(${zoomScale})`,
  }}
  priority
/>

      <div className="absolute inset-0 items-center justify-center md:py-20 text-white md:grid md:grid-cols-2 md:gap-4 px-4">
        <div className="md:pl-20 py-25">
          <div className="md:text-6xl text-2xl font-bold">
            EMPOWERING LIVES WITH SOLAR ENERGY
          </div>
          <div className="py-4 text-xl">
            Panjar helps you power, save, and grow smarter.
            <br /> Welcome to your new favourite way to do all things solar.
          </div>
          <div
            className="bg-steel-500 px-5 py-2.5 rounded-full bg-white text-black text-center text-base"
            style={{
              width: "150px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Try Panjar now
          </div>
        </div>
      </div>
    </div>
  );
}
