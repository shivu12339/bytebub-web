import React, { useEffect, useState } from "react";
import video1 from "../assets/video1.webm";
import video2 from "../assets/video2.webm";
import video3 from "../assets/video3.webm";

export default function Hero() {
  const slides = [video1, video2, video3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden font-sans">
      {/* Video slides */}
      {slides.map((src, idx) => (
        <video
          key={idx}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
        >
          <source
            src={src}
            type={src.endsWith(".mp4") ? "video/mp4" : "video/webm"}
          />
        </video>
      ))}

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          ByteBub - Digital Engineering Experts
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-gray-200">
          We build modern web applications, mobile apps, and full-stack solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-lg text-center"
          >
            Get Free Consultation
          </a>
          <a
            href="#portfolio"
            className="bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-lg transition shadow-lg text-center"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
