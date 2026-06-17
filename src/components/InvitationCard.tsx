"use client";

import { motion } from "framer-motion";

export default function InvitationCard() {
  return (
    <section className="relative px-6 py-28 flex flex-col justify-center items-center overflow-hidden bg-[#FDFBF7]">
      
      {/* Elegant Radial Gradient Background */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at center, #ffffff 0%, #F5EFEB 100%)" }}></div>
      
      {/* Subtle Watermark Mandalas - Animated */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#c8a362]">
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
          {Array.from({ length: 16 }).map((_, i) => (
             <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos((i * 22.5 * Math.PI) / 180)} y2={50 + 40 * Math.sin((i * 22.5 * Math.PI) / 180)} strokeWidth="0.2" />
          ))}
        </svg>
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#c8a362]">
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
          {Array.from({ length: 16 }).map((_, i) => (
             <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos((i * 22.5 * Math.PI) / 180)} y2={50 + 40 * Math.sin((i * 22.5 * Math.PI) / 180)} strokeWidth="0.2" />
          ))}
        </svg>
      </motion.div>

      {/* Drifting Ambient Light Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#c8a362]/5 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ 
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c8a362]/5 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Header Accents */}
          <div className="flex justify-center items-center gap-3 mb-6 opacity-80">
             <div className="w-12 h-[1px] bg-[#c8a362]"></div>
             <div className="w-2 h-2 rotate-45 bg-[#c8a362]"></div>
             <div className="w-12 h-[1px] bg-[#c8a362]"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-[#5c4a3d] font-medium tracking-wide">
            The Grand Invitation
          </h2>
          
          <p className="mt-4 font-sans text-xs md:text-sm text-[#8a7b71] tracking-[0.2em] uppercase">
            We cordially invite you
          </p>
        </motion.div>
      </div>

      {/* The Invitation Card Presentation */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-[550px] z-20 group"
      >
        {/* Soft elegant glow */}
        <div className="absolute -inset-4 bg-[#c8a362]/10 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        
        {/* Ornate Frame */}
        <div className="relative bg-white p-3 md:p-5 rounded-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-[#e8dcc4] transition-transform duration-700 group-hover:-translate-y-2">
          
          {/* Inner Gold Trims */}
          <div className="absolute inset-2 border border-[#c8a362]/40 pointer-events-none z-10 rounded-sm"></div>
          <div className="absolute inset-3 border border-[#c8a362]/15 pointer-events-none z-10 rounded-sm"></div>

          {/* The Image */}
          <img 
            src="/images/invitationcard.jpeg" 
            alt="Wedding Invitation" 
            className="w-full h-auto object-contain block relative z-0"
          />
        </div>
      </motion.div>

      {/* Footer Ornament */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-16 text-center"
      >
         <div className="w-1.5 h-1.5 rounded-full bg-[#c8a362]/50 mx-auto mb-2"></div>
         <div className="w-[1px] h-12 bg-gradient-to-b from-[#c8a362]/40 to-transparent mx-auto"></div>
      </motion.div>

    </section>
  );
}
