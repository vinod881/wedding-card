"use client";

import React, { useState } from 'react';

// Real photos mapped out
const galleryItems = [
  { image: "/images/supriya 1.jpeg", title: "Supriya" },
  { image: "/images/Veeresh 1.jpeg", title: "Veeresh" },
  { image: "/images/supriya 2.jpeg", title: "Beautiful Details" },
  { image: "/images/Veeresh 2.jpeg", title: "Getting Ready" },
  { image: "/images/supriya 3.jpeg", title: "Bridal Glow" },
  { image: "/images/Veeresh 3.jpeg", title: "Groom's Side" },
  { image: "/images/supriya 4.jpeg", title: "Radiant" },
  { image: "/images/Veeresh 4.jpeg", title: "Anticipation" },
  { image: "/images/supriya 5.jpeg", title: "Traditional Elegance" },
  { image: "/images/supriya 6.jpeg", title: "Together" },
  { image: "/images/supriya 7.jpeg", title: "Joy" },
  { image: "/images/supriya 8.jpeg", title: "Forever" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-24 bg-white flex flex-col items-center justify-center min-h-screen overflow-hidden">
      
      {/* Section Headers */}
      <div className="text-center mb-16">
        <p className="font-sans text-xs text-gray-500 tracking-[0.2em] uppercase font-semibold mb-2">
          OUR SWEET MOMENTS
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#5c4a3d] tracking-wide font-medium">
          A Journey of Love
        </h2>
      </div>

      {/* 3D Coverflow Carousel Container */}
      <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] flex items-center justify-center perspective-[1200px]">
        
        {/* Navigation Left */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-50 w-10 h-10 md:w-12 md:h-12 bg-[#5c4a3d] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3a2f26] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {galleryItems.map((item, index) => {
          // Calculate the offset from the currently active index
          let offset = index - activeIndex;
          
          // Handle infinite wrapping math for smooth looping
          if (offset < -Math.floor(galleryItems.length / 2)) {
            offset += galleryItems.length;
          }
          if (offset > Math.floor(galleryItems.length / 2)) {
            offset -= galleryItems.length;
          }

          // Calculate CSS Transforms for the Coverflow effect
          const isCenter = offset === 0;
          const translateX = offset * 280; // Increased distance for wider cards
          const translateZ = Math.abs(offset) * -150; // Less push back so they don't look tiny
          const rotateY = offset * -25; // Gentler tilt to prevent squeezing width
          const zIndex = galleryItems.length - Math.abs(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : 1; // Hide cards too far out

          return (
            <div
              key={index}
              onClick={() => isCenter ? setSelectedImage(item.image) : setActiveIndex(index)}
              // Changed from portrait to perfect squares (wider width)
              className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                pointerEvents: opacity === 0 ? 'none' : 'auto'
              }}
            >
              {/* Image Frame */}
              <div className={`w-full h-full rounded-xl overflow-hidden bg-[#faf9f5] shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${isCenter ? 'ring-4 ring-[#c8a362]' : ''}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-2 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          );
        })}

        {/* Navigation Right */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-50 w-10 h-10 md:w-12 md:h-12 bg-[#5c4a3d] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3a2f26] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
      
      {/* Fullscreen Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen View" 
            className="max-w-full max-h-full object-contain rounded-md shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
          />
        </div>
      )}

    </section>
  );
}