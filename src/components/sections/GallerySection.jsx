import React, { useState } from "react";
import { X } from "lucide-react";
import VideoSection from "../VideoSection";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&q=80",
      alt: "Modern auditorium stage with lighting",
      span: "row-span-2 col-span-2",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80",
      alt: "Auditorium seating view",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
      alt: "Stage performance view",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1465925783360-4c8c85c44ed8?w=800&q=80",
      alt: "Concert hall interior",
      span: "col-span-2",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Theater seating arrangement",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      alt: "Auditorium ceiling lights",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
      alt: "Lighting setup and sound system",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80",
      alt: "Stage lighting from audience view",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
      alt: "Empty auditorium before event",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      alt: "Spotlight and lighting grid",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80",
      alt: "Performers on stage",
      span: "col-span-2",
    },
  ];

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="py-16 px-4 pt-50 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Auditorium Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art auditorium facilities designed to host
            memorable events and performances.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group ${image.span}`}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold tracking-wide">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-white text-center text-lg px-4">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </div>
      <VideoSection/>
    </section>
  );
};

export default GallerySection;
