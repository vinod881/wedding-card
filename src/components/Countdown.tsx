"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target wedding date: November 27, 2026 at 10:15 AM
  const targetDate = new Date("2026-11-27T10:15:00").getTime();

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const displayDays = mounted ? String(timeLeft.days).padStart(2, "0") : "00";
  const displayHours = mounted ? String(timeLeft.hours).padStart(2, "0") : "00";
  const displayMinutes = mounted ? String(timeLeft.minutes).padStart(2, "0") : "00";
  const displaySeconds = mounted ? String(timeLeft.seconds).padStart(2, "0") : "00";

  return (
    <section className="relative px-4 py-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Clean Elegant Background */}
      <div className="absolute inset-0 z-0 bg-[#FAF7F2]"></div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="relative w-full max-w-3xl bg-maroon-950 rounded-[40px] shadow-xl border border-gold-300/30 overflow-hidden flex flex-col pt-12 pb-16 px-6 md:px-16 text-center z-10"
      >
        {/* Solid elegant background instead of full image */}
        <div className="absolute inset-0 bg-maroon-950 z-0"></div>
        <div className="absolute inset-0 bg-maroon-950/85 z-0"></div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
          
          <p className="font-sans text-[10px] text-gold-300 tracking-[0.25em] uppercase font-semibold mb-4">
            We are starting the countdown
          </p>

          {/* Overlapping Heart Indicator */}
          <div className="relative w-14 h-12 flex items-center justify-center mb-6">
            <Heart className="w-11 h-11 text-cream-100 fill-cream-100" />
            <Heart className="w-5 h-5 text-red-600 fill-red-600 absolute bottom-0 right-1.5" />
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-3 w-full">
            {/* Days */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-1 text-center shadow-md flex flex-col justify-center h-24">
              <span className="block font-sans text-2xl text-white font-light mb-1">
                {displayDays}
              </span>
              <span className="block font-sans text-[9px] text-gold-200 uppercase tracking-widest font-normal">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-1 text-center shadow-md flex flex-col justify-center h-24">
              <span className="block font-sans text-2xl text-white font-light mb-1">
                {displayHours}
              </span>
              <span className="block font-sans text-[9px] text-gold-200 uppercase tracking-widest font-normal">
                Hour
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-1 text-center shadow-md flex flex-col justify-center h-24">
              <span className="block font-sans text-2xl text-white font-light mb-1">
                {displayMinutes}
              </span>
              <span className="block font-sans text-[9px] text-gold-200 uppercase tracking-widest font-normal">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-1 text-center shadow-md flex flex-col justify-center h-24">
              <span className="block font-sans text-2xl text-white font-light mb-1">
                {displaySeconds}
              </span>
              <span className="block font-sans text-[9px] text-gold-200 uppercase tracking-widest font-normal">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
