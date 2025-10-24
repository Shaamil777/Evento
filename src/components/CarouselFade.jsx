import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    image: () => import("../assets/background1.jpg"),
    title: "Where Moments Become Memories",
    titleFont: "font-serif",
    text: "Host your weddings, receptions, and grand celebrations in a space designed to inspire joy and create unforgettable experiences.",
    textFont: "font-sans",
    cta: { label: "Book Now", link: "#contact" },
  },
  {
    image: () => import("../assets/background2.jpg"),
    title: "A Stage for Every Occasion",
    titleFont: "font-serif",
    text: "From corporate events to cultural programs, our auditorium offers world-class facilities and ambiance for every gathering.",
    textFont: "font-sans",
    cta: { label: "Explore Facilities", link: "#facilities" },
  },
  {
    image: () => import("../assets/background3.png"),
    title: "Elegance. Space. Comfort.",
    titleFont: "font-serif",
    text: "Enjoy a perfect blend of modern architecture, advanced lighting, and superior sound systems — crafted for excellence in every event.",
    textFont: "font-sans",
    cta: { label: "Know More", link: "#about" },
  },
];

function CarouselFade() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    slides.forEach((slide, index) => {
      slide.image().then((img) => {
        setLoadedImages((prev) => ({ ...prev, [index]: img.default }));
        loadedCount++;
        if (loadedCount === slides.length) setIsReady(true);
      });
    });
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isReady]);

  if (!isReady) {
    return (
      
      <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-light">Loading Experience...</p>
        </div>
      </div>
    );
  }

  return (
    
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {slides.map((slide, index) => {
        const imageSrc = loadedImages[index];
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imageSrc}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out transform ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text + CTA */}
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 max-w-3xl mx-auto">
              <h3
                className={`${slide.titleFont} text-4xl md:text-5xl lg:text-6xl font-extrabold carousal-title mb-2 leading-snug drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)] animate-fade-in`}
              >
                {slide.title}
              </h3>
              <p
                className={`${slide.textFont} text-base md:text-lg lg:text-m text-gray-200 carousal-text leading-relaxed mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-fade-in-delay`}
              >
                {slide.text}
              </p>

              {/* Animated CTA Button */}
              {/* Animated CTA Button */}
              <motion.a
                href={slide.cta.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gray-700 text-yellow-400 font-semibold text-base md:text-lg px-8 py-4 rounded-full shadow-xl 
                          hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 animate-fade-in-delay"
              >
                {slide.cta.label}
              </motion.a>

            </div>
          </div>
        );
      })}

      {/* Dots / Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-white/40"
            } hover:bg-white/70`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselFade;
