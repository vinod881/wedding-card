"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/24/7a/84/247a8472ced66b9fa7523d46ba2d8f34.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Invitation Card (Glassmorphism & Gold border) */}
      <motion.div 
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 14 }}
        className="relative z-10 w-[90%] max-w-lg bg-white/10 md:bg-white/15 backdrop-blur-md border border-white/20 p-8 md:p-12 text-center rounded-xl shadow-2xl flex flex-col items-center"
      >
        {/* Fine gold border overlay */}
        <div className="absolute inset-2 border border-gold-300/40 rounded-lg pointer-events-none"></div>
        <div className="absolute inset-3 border border-gold-400/20 rounded pointer-events-none"></div>

        <p className="font-sans text-xs md:text-sm text-gold-200 tracking-[0.25em] uppercase mb-4 animate-pulse">
          Together with their families
        </p>

        {/* Wedding Names (Serif Font) */}
        <h1 className="font-serif text-5xl md:text-6xl text-white font-normal leading-tight tracking-wide mb-1">
          Supriya
        </h1>
        <span className="font-serif text-3xl md:text-4xl text-gold-300 my-1 block">
          &
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-normal leading-tight tracking-wide mb-6">
          Veeresh
        </h1>

        {/* Custom date separator line */}
        <div className="w-full flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-gold-400 flex-1"></div>
          <p className="font-serif text-sm md:text-base text-gold-200 tracking-wider">
            MONDAY, 06 JULY 2026
          </p>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-gold-400 flex-1"></div>
        </div>

        <p className="font-sans text-xs md:text-sm text-white/90 tracking-widest uppercase mb-6">
          At 11:30 AM
        </p>

        <p className="font-sans text-xs text-cream-100/70 italic max-w-xs leading-relaxed">
          &ldquo;Two souls, one heart. Join us in celebrating a lifetime of love and beautiful memories.&rdquo;
        </p>
      </motion.div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer">
        <span className="font-sans text-[10px] text-white/60 tracking-[0.2em] uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold-300" />
        </motion.div>
      </div>
    </section>
  );
}
