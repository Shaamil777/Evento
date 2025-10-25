import React from "react";

export default function VideoSection() {
  return (
    <section className="relative w-full mt-10 h-screen overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto"
            src="https://www.youtube.com/embed/ASJiHYNoSgQ?autoplay=1&mute=1&loop=1&playlist=ASJiHYNoSgQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3"
            title="Auditorium Highlight Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              transform: "translate(-50%, -50%)",
              pointerEvents: "none"
            }}
          ></iframe>
        </div>
      </div>

      {/* Elegant overlay with vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Subtle vignette on sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {/* Optional: Content overlay area */}
      <div className="relative z-10 flex items-end justify-center h-full pb-20">
        <div className="text-center text-white px-4">
          {/* You can add text content here if needed */}
        </div>
      </div>
    </section>
  );
}