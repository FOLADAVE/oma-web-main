"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const images = [
  "/images/DSC_6546.JPG", // Updated to uppercase
  "/images/DSC_6811.JPG",
  "/images/DSC_6546.JPG",
  "/images/DSC_6561.JPG",
  "/images/DSC_6524[40].JPG",
  "/images/DSC_6538.JPG",
  "/images/DSC_6544.JPG",
  "/images/DSC_6697.JPG",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className=" my-12 px-12" id="home">
      {/* Image Slider */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
           objectFit="cover" // Ensures the image fills the container
      objectPosition="top"
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-blue-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          &#8592;
        </button>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          &#8594;
        </button>
      </div>

      {/* Hero Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-customGrey mb-4 text-4xl sm:text-5xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-950">
              Welcome to {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "The Diction Oracle website",
                1000,
                "OMA DICTION",
                1000,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="text-paragraphColor text-base sm:text-lg mb-6 lg:text-lg">
            OMA is a place where we teach both young and old how to read, write,
            and speak impeccable standard English.
          </p>
          <div>
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold shadow-lg transition-all">
                Contact Us
              </button>
            </a>
            <a href="#services">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full font-semibold bg-transparent hover:bg-rose-800 hover:text-white text-indigo-950 border-2 border-rose-800 mt-3 shadow-lg transition-all">
                Our Services
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-indigo-950 border-rose-900 border-8 w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] relative items-center justify-center animate-bounce-slow max-920:animate-pulse-slow">
            <Image
              src="/images/oma-hero.png"
              alt="oma image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={310}
              height={310}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
