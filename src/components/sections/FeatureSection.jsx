import React, { useState, useEffect, useRef } from "react";
import { Award } from "lucide-react";

const FeatureSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrolled = windowHeight - sectionTop;
        const total = windowHeight + sectionHeight;
        const progress = Math.min(Math.max(scrolled / total, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Spacious Halls",
      description:
        "Our modern halls provide elegant spaces for weddings, corporate events, and special occasions with top-notch facilities.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      title: "Premium Amenities",
      description:
        "Enjoy air-conditioned interiors, luxury seating, premium sound, and lighting setups tailored for your event’s needs.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Event Planning Support",
      description:
        "Our experienced event management team ensures every detail—from decoration to coordination—is perfectly handled.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      title: "Ample Parking",
      description:
        "Convenient, secure parking with dedicated areas for guests and staff ensures a hassle-free experience for everyone.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      title: "Catering & Hospitality",
      description:
        "Delight your guests with customizable menus, top-tier catering, and hospitality services that make your event memorable.",
    },
  ];

  const pathD =
    "M 250 0 Q 350 100, 250 200 Q 150 300, 250 400 Q 350 500, 250 600 Q 150 700, 250 800 Q 350 900, 250 1000 Q 150 1100, 250 1200";
  const pathLength = 1800;

  return (
    <div className="featureBackground py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl carousal-title font-bold text-gray-900 mb-4">
            Why Choose <span className="text-yellow-500">Evento</span>
          </h2>
          <p className="text-gray-600 carousal-text max-w-2xl mx-auto px-4">
            Discover why we're the most preferred destination for celebrations,
            conferences, and memories that last forever.
          </p>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Features Curve Section - Desktop */}
        <div ref={sectionRef} className="relative min-h-[1600px] hidden lg:block pb-32">
          {/* SVG Path */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 500 1300"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d={pathD}
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d={pathD}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength - scrollProgress * pathLength}
                style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
              />
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Feature Cards - Desktop */}
          <div className="relative">
            {features.map((feature, index) => {
              const totalCards = features.length;
              const triggerStart = index / totalCards - 0.08;
              const triggerEnd = (index + 1) / totalCards + 0.15;
              const isActive =
                scrollProgress >= triggerStart &&
                scrollProgress <= triggerEnd;

              const isLeft = index % 2 === 0;
              const yPosition = index * 260;

              return (
                <div
                  key={index}
                  className={`absolute w-96 ${isLeft ? "left-0" : "right-0"}`}
                  style={{ top: `${yPosition}px` }}
                >
                  <div
                    className={`transform transition-all duration-700 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : isLeft
                        ? "-translate-x-20 opacity-0"
                        : "translate-x-20 opacity-0"
                    }`}
                  >
                    <div
                      className={`relative rounded-2xl p-[2px] transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-yellow-400 via-white to-amber-400 shadow-2xl scale-[1.04]"
                          : "bg-gradient-to-br from-gray-200 via-white to-gray-100"
                      }`}
                    >
                      <div className="bg-white rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                          <h5 className="text-xl font-semibold card-title text-gray-900 mb-2">
                            {feature.title}
                          </h5>
                          <p className="text-gray-700 card-text mb-4 text-sm">
                            {feature.description}
                          </p>
                          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Simple Grid */}
        <div className="lg:hidden grid gap-6 max-w-md mx-auto pb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-400 via-white to-amber-400 rounded-2xl p-[2px] shadow-lg"
            >
              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-xl font-semibold card-title text-gray-900 mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-gray-700 card-text mb-4 text-sm">
                    {feature.description}
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
