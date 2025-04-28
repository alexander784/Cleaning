"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/images/Cleaning.jpg", "/images/Cleaning2.avif", "/images/Clean.avif"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative text-white py-20 h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Professional Cleaning Services
        </h2>
        <p className="text-lg mb-6 drop-shadow-md">
          Transform your space with our top-notch cleaning solutions.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}