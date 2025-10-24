import React from 'react';
import img1 from '../assets/collage1.jpg'
import img2 from '../assets/collage2.jpg'
import img3 from '../assets/collage3.jpg'
/**
 * A modern, two-column image collage component.
 * Features a large image on the left and two smaller images stacked on the right.
 */
export default function ImageCollage() {
  return (
    <div className="grid grid-cols-2 gap-4 h-96">
      {/* Large Image - Top Left */}
      <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl opacity-90">
        <img 
          src={img1} 
          alt="Main feature"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Small Image 1 - Top Right */}
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src={img2}
          alt="Gallery item 1"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Small Image 2 - Bottom Right */}
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src={img3} 
          alt="Gallery item 2"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
}