"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
  "/images/hero/hero-4.jpeg",
  "/images/hero/hero-5.jpeg",
];

export default function HeroCarousel({ interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === index ? 0.4 : 0,
            zIndex: i === index ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt="Skier descending a snowy slope in Gulmarg"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
