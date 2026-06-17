"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Heart } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const schedule: ScheduleItem[] = [
  {
    time: "05th July 2026 at 08:05 PM",
    title: "Bhuvanada Programme",
    description: "At Our Residence, Khashempur, Tq & Dist: Bidar",
    icon: <Sparkles className="w-6 h-6 text-gold-600 stroke-[1.5]" />,
  },
  {
    time: "06th July 2026 at 11:30 AM",
    title: "Wedding Ceremony",
    description: "Venue: S.B. Function Hall, Chitta, Tq & Dist: Bidar",
    icon: <Heart className="w-6 h-6 text-gold-600 stroke-[1.5]" />,
  },
];

export default function CelebrationTimeline() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2026-07-06T11:30:00").getTime();

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
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
    <section className="relative px-4 py-20 flex items-center justify-center overflow-hidden">
      {/* Professional Warm Sand Background */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #E4DCD0 100%)" }}></div>

      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-[40px] shadow-2xl border border-gold-300/30 overflow-hidden flex flex-col pt-12 pb-16 px-6 md:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-[10px] text-gold-600 tracking-[0.25em] uppercase font-semibold mb-2">
            The Wedding of Supriya & Veeresh
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-maroon-900 font-normal">
            Program Details
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Integrated Countdown */}
        <div className="bg-maroon-950 rounded-3xl p-6 md:p-8 text-center shadow-lg mb-12 relative overflow-hidden">
           <div className="absolute inset-0 bg-maroon-950/85 z-0"></div>
           <div className="relative z-10 flex flex-col items-center">
             <p className="font-sans text-[9px] text-gold-300 tracking-[0.2em] uppercase font-semibold mb-4">
               Countdown to the Ceremony
             </p>
             <div className="flex gap-2 md:gap-4 w-full justify-center">
               <div className="bg-white/10 border border-white/20 rounded-xl py-3 px-1 text-center w-16 md:w-20">
                 <span className="block font-sans text-xl md:text-2xl text-white font-light mb-1">{displayDays}</span>
                 <span className="block font-sans text-[8px] md:text-[9px] text-gold-200 uppercase tracking-widest">Days</span>
               </div>
               <div className="bg-white/10 border border-white/20 rounded-xl py-3 px-1 text-center w-16 md:w-20">
                 <span className="block font-sans text-xl md:text-2xl text-white font-light mb-1">{displayHours}</span>
                 <span className="block font-sans text-[8px] md:text-[9px] text-gold-200 uppercase tracking-widest">Hours</span>
               </div>
               <div className="bg-white/10 border border-white/20 rounded-xl py-3 px-1 text-center w-16 md:w-20">
                 <span className="block font-sans text-xl md:text-2xl text-white font-light mb-1">{displayMinutes}</span>
                 <span className="block font-sans text-[8px] md:text-[9px] text-gold-200 uppercase tracking-widest">Mins</span>
               </div>
               <div className="bg-white/10 border border-white/20 rounded-xl py-3 px-1 text-center w-16 md:w-20">
                 <span className="block font-sans text-xl md:text-2xl text-white font-light mb-1">{displaySeconds}</span>
                 <span className="block font-sans text-[8px] md:text-[9px] text-gold-200 uppercase tracking-widest">Secs</span>
               </div>
             </div>
           </div>
        </div>

        {/* Timeline List */}
        <div className="relative w-full px-2">
          {/* Vertical central line */}
          <div className="absolute left-[26px] top-2 bottom-2 w-[1px] bg-stone-300"></div>

          {/* Timeline Schedule Items */}
          <div className="space-y-10 relative">
            {schedule.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 relative"
              >
                {/* Left Side: SVG Icon inside a small circle */}
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border border-stone-200 shadow-sm z-10 flex-shrink-0 mt-1">
                  {item.icon}
                </div>

                {/* Right Side: Timing, Title, and Description */}
                <div className="flex-1 text-left pt-1">
                  <h3 className="font-serif text-xl md:text-2xl text-maroon-900 font-medium mb-1">
                    {item.title}
                  </h3>
                  <span className="block font-sans text-xs text-gold-600 font-semibold tracking-wide mb-1.5 uppercase">
                    {item.time}
                  </span>
                  <p className="font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Filigree Repeating Pattern Border */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 width=%2220%22 height=%2220%22><path d=%22M0 10 L10 0 L20 10 L10 20 Z M5 10 L10 5 L15 10 L10 15 Z%22 fill=%22%23d4ab48%22 fill-opacity=%220.45%22/></svg>')] bg-repeat-x opacity-80"></div>

      </div>
    </section>
  );
}
