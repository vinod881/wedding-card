"use client";

import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "26 April 2026",
    title: "The First Meeting",
    description: "A cherished day when Veeresh's family visited to meet Supriya. Conversations flowed, smiles were shared, and two families took the first beautiful step toward becoming one.",
    image: "/images/1st image.jpg",
  },
  {
    year: "10 May 2026",
    title: "The Ring Ceremony",
    description: "Surrounded by our loved ones, we exchanged rings as a symbol of our everlasting love and commitment. A beautiful milestone marking our promise to forever.",
    image: "/images/ringceremony .jpeg",
  },
  {
    year: "06 July 2026",
    title: "Our Wedding Day",
    description: "The day we've been waiting for! We are thrilled to officially begin our happily ever after, surrounded by the blessings of our family and friends.",
    image: "/images/Finley .jpeg",
  },
];

export default function LoveStory() {
  return (
    <section className="relative px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/images/bg.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      ></div>
      
      {/* Soft Light Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-gold-600 tracking-[0.25em] uppercase font-semibold mb-3">
            How it all began
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 tracking-wide">
            Our Love Story
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Timeline Path */}
        <div className="relative mt-12">
          
          {/* Vertical central line (hidden on mobile, centered on desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-300 via-maroon-200 to-gold-300 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-28">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-16 relative`}
                >
                  {/* central node on timeline (desktop only) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-maroon-800 border-2 border-gold-300 z-10 hidden md:block"></div>

                  {/* Left Side (Content/Text Card) */}
                  <motion.div 
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4"
                  >
                    <span className="font-serif text-3xl md:text-4xl text-gold-500 font-bold block mb-2 md:text-right md:w-full md:px-0">
                      {item.year}
                    </span>
                    <h3 className={`font-serif text-2xl text-maroon-900 mb-3 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      {item.title}
                    </h3>
                    <p className={`font-sans text-sm text-stone-600 leading-relaxed max-w-lg mx-auto ${
                      isEven ? "md:text-right md:ml-auto md:mr-0" : "md:text-left md:mr-auto md:ml-0"
                    }`}>
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Right Side (Photo Card) */}
                  <motion.div 
                    initial={{ opacity: 0, y: -80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.15 }}
                    className="w-full md:w-1/2 px-4"
                  >
                    <div className="relative group max-w-md mx-auto aspect-4/3 overflow-hidden rounded-xl shadow-lg border border-gold-300/40 p-2 bg-white">
                      <div className="relative w-full h-full overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-contain bg-[#FAF7F2] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-maroon-950/10 group-hover:bg-maroon-950/0 transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
