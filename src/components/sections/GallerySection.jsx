import React, { useState } from "react";
import { X, Play } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Add your videos to public/videos folder, reference as /videos/filename.mp4
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
      url: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80",
      alt: "Auditorium seating view",
    },
    {
      id: 4,
      type: "video",
      videoUrl: "/videos/event-tour.mp4", // Your local video path
      thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
      alt: "Stage performance video",
      span: "col-span-2",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1465925783360-4c8c85c44ed8?w=800&q=80",
      alt: "Concert hall interior",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Theater seating arrangement",
    },
    {
      id: 7,
      type: "video",
      videoUrl: "/videos/promo.mp4", // Another local video sample
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      alt: "Auditorium tour video",
      span: "row-span-2",
    },
    {
      id: 8,
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
      type: "video",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80",
      alt: "Event highlights video",
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
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      alt: "Stage setup before event"
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      alt: "Conference lighting and equipment"
    }
  ];

  const openLightbox = (item) => {
    if (item.type === "video") {
      setSelectedVideo(item);
    } else {
      setSelectedImage(item);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <section className="pt-8 pb-16 px-4 featureBackground from-gray-50 to-white">
      <div className="max-w-7xl mt-10 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl carousal-title font-bold text-gray-900 mb-4">
            Our Auditorium Gallery
          </h2>
          <p className=" carousal-text text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art auditorium facilities designed to host
            memorable events and performances.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group ${item.span || ""}`}
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.type === "video" ? item.thumbnail : item.url}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Video Play Button Overlay */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 rounded-full p-4 group-hover:bg-opacity-80 transition-all duration-300">
                    <Play size={32} className="text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold tracking-wide">
                  {item.type === "video" ? "Play Video" : "View Image"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Lightbox */}
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
              onClick={e => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-white text-center text-lg px-4">
              {selectedImage.alt}
            </p>
          </div>
        )}

        {/* Video Lightbox */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVideo.videoUrl ? (
                <video
                  className="w-full h-full rounded-lg"
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                />
              ) : (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&controls=1`}
                  title={selectedVideo.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <p className="absolute bottom-8 text-white text-center text-lg px-4">
              {selectedVideo.alt}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
