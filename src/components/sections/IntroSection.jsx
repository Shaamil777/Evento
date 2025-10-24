import React from 'react';
import bg1 from '../../assets/background1.jpg'
import ImageCollage from '../ImageCollage';

export default function IntroSection() {
  return (
    <div className="min-h-[70vh] sm:h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative flex items-center justify-center py-8 sm:py-0">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={bg1}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 via-gray-800/0 to-gray-900/0"></div>
      
      {/* Intro Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl carousal-title font-bold text-white leading-tight">
              Celebrate in Style at
              <span className="block text-yellow-500 mt-2">
                Evento
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-md carousal-text text-yellow-300 leading-relaxed opacity-80 max-w-xl mx-auto md:mx-0">
              Evento is your premier destination for hosting unforgettable events. From elegant 
              weddings and corporate conferences to grand celebrations, our state-of-the-art 
              facilities and professional services ensure every gathering is seamless and 
              memorable. Step into Evento, where every event shines and every moment is celebrated in style.
            </p>
          </div>

          {/* Image Collage */}
          <div className="flex justify-center items-center mt-6 md:mt-0">
            <ImageCollage className="w-full h-auto max-w-md md:max-w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}