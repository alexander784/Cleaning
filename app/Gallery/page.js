"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/images/CarpetCleaning.png",
      alt: "Carpet cleaning",
      title: "Carpet Cleaning",
    },
    {
      src: "/images/Cleaning2.jpg",
      alt: "Cleaned office",
      title: "Office",
    },
    {
      src: "/images/Cleaning.webp",
      alt: "Cleaned kitchen",
      title: "Kitchen",
    },
    {
      src: "/images/Sofa.webp",
      alt: "Cleaned sofa",
      title: "Sofas",
    },
  ];

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 3));
  };

  return (
    <section id="gallery" className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Work</h2>
        <div className="flex flex-col sm:flex-row justify-between mb-8 text-lg font-medium text-gray-800">
          <p className="text-center sm:text-left">Cleaning your house before moving in</p>
          <p className="text-center sm:text-right">cleaning your sofas and deep cleaning</p>
        </div>
        <div className="relative overflow-hidden w-full">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600/80 text-white rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex >= images.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-blue-600/80 text-white rounded-full hover:bg-blue-700 transition duration-300 disabled:opacity-50 z-10"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
          <div
            className="flex flex-row transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3 + 1)}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex-none w-1/3 px-2 image-slide ${
                  index < 3 ? `delay-${index}` : ""
                }`}
                style={{ width: `calc(33.333% - 1rem)` }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                  {image.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}