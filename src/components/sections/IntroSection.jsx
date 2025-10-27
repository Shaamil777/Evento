import React from 'react';
import bg1 from '../../assets/background1.jpg';
import ImageCollage from '../ImageCollage';

export default function IntroSection() {
  return (
    <div className="min-h-[70vh] sm:h-[70vh] featureBackground relative flex items-center justify-center py-12 sm:py-0">
      {/* Background Image with Low Opacity */}
      {/* <div className="absolute inset-0 opacity-10">
        <img 
          src={bg1}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-gray-800/0 to-gray-900/0"></div>

      {/* Intro Section */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-24 relative mt-20 z-10 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl carousal-title font-bold leading-tight">
              Celebrate in Style at
              <span className="block text-yellow-400 mt-1">
                Evento
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-md carousal-text leading-relaxed opacity-80 max-w-xl mx-auto md:mx-0">
                Evento is your premier destination for hosting unforgettable events. From elegant 
                weddings and corporate conferences to grand celebrations, our state-of-the-art 
                facilities and professional services ensure every gathering is seamless and 
                memorable. Step into Evento, where every event shines and every moment is celebrated in style.
              </p>

              <p className="text-sm sm:text-base md:text-md carousal-text leading-relaxed opacity-80 max-w-xl mx-auto md:mx-0">
                With years of experience and a passion for excellence, we take pride in transforming
                your vision into reality. Whether you’re planning an intimate ceremony or a grand-scale
                performance, our dedicated team ensures every detail reflects sophistication and perfection.
                Experience the elegance, comfort, and innovation that make Evento truly exceptional.
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <ImageCollage className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
