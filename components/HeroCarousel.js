"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const images = [
  withBasePath("/images/hero/hero-1.jpg"),
  withBasePath("/images/hero/hero-2.jpeg"),
  withBasePath("/images/hero/hero-3.jpeg"),
  withBasePath("/images/hero/hero-4.jpg"),
  withBasePath("/images/hero/hero-5.jpeg"),
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
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Skier descending a snowy slope in Gulmarg"
          fill
          priority={i === 0}
          unoptimized
          className={`object-cover opacity-40 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
