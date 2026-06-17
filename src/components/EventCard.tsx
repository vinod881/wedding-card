"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

interface EventProps {
  title: string;
  description: string;
  time: string;
  day: string;
  dateStr: string; // e.g. "26 / 11"
  year: string;
  phone: string;
  mapUrl: string;
  image: string;
  locationText?: string;
}

const eventsData: EventProps[] = [
  {
    title: "Haldi Ceremony",
    description: "A beautiful evening of turmeric blessings, traditional music, and joyful celebrations.",
    time: "At 07:00 PM",
    day: "Friday",
    dateStr: "03 / 07",
    year: "2026",
    phone: "+919876543210",
    mapUrl: "https://maps.google.com",
    image: "/images/supriya 1.jpeg",
    locationText: "Our Residence, Khasampur (P)",
  },
  {
    title: "Pre-Wedding Celebration",
    description: "Join us on the eve of our wedding for an enchanting evening of joyous celebrations, traditional rituals, and heartfelt moments with family.",
    time: "At 08:05 PM",
    day: "Sunday",
    dateStr: "05 / 07",
    year: "2026",
    phone: "+919876543210",
    mapUrl: "https://maps.google.com",
    image: "/images/supriya 7.jpeg",
    locationText: "Our Residence, Khasampur (P)",
  },
];

export default function EventCard() {
  const haldiEvent = eventsData[0];
  const atHomeEvent = eventsData[1];

  return (
    <section className="relative px-4 py-24 overflow-hidden">
      {/* Professional Soft Sage Green Background */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #F0F3F0 0%, #DCE2DB 100%)" }}></div>
      {/* Subtle top + bottom fade to blend with neighbouring sections */}
      <div className="absolute inset-x-0 top-0 h-16 z-0" style={{ background: "linear-gradient(to bottom, rgba(253,251,247,0.18), transparent)" }}></div>
      <div className="absolute inset-x-0 bottom-0 h-16 z-0" style={{ background: "linear-gradient(to top, rgba(253,251,247,0.18), transparent)" }}></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs text-gold-600 tracking-[0.25em] uppercase font-semibold mb-3">
            Celebrate with us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 tracking-wide">
            Event Details
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Stacked Cards Layout */}
        <div className="flex flex-col items-center gap-16 w-full max-w-3xl mx-auto">
          
          {/* Card 1: Haldi Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="w-full bg-[#FAF7F2] border border-gold-300/30 rounded-[40px] shadow-xl p-8 pt-28 pb-10 text-center relative flex flex-col items-center hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Overlapping Arched Couple Image - Made Transparent */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-40 overflow-hidden rounded-t-full z-10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={haldiEvent.image} 
                alt={haldiEvent.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-maroon-900 mb-3 mt-4">
              {haldiEvent.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-xs md:text-sm text-stone-500 leading-relaxed mb-6 max-w-md">
              {haldiEvent.description}
            </p>

            {/* Time */}
            <p className="font-sans text-xs text-stone-700 tracking-wide uppercase font-semibold mb-1">
              {haldiEvent.time}
            </p>

            {/* Location */}
            {haldiEvent.locationText && (
              <p className="font-sans text-xs text-stone-500 tracking-wide uppercase font-medium flex items-center justify-center gap-1 mb-2">
                <MapPin className="w-3 h-3 text-gold-500" />
                {haldiEvent.locationText}
              </p>
            )}

            {/* Custom Date Strip (Double line dividers) */}
            <div className="w-full flex items-center justify-center gap-4 my-6 max-w-md">
              {/* Left column: Line | Day | Line */}
              <div className="flex items-center gap-2 flex-1">
                <div className="h-[1px] bg-stone-300 flex-1"></div>
                <span className="font-sans text-[10px] text-stone-500 font-semibold uppercase tracking-wider">{haldiEvent.day}</span>
                <div className="h-[1px] bg-stone-300 flex-1"></div>
              </div>
              
              {/* Center column: Date */}
              <span className="font-serif text-2xl md:text-3xl text-gold-600 font-bold tracking-tight px-1">
                {haldiEvent.dateStr}
              </span>
              
              {/* Right column: Line | Year | Line */}
              <div className="flex items-center gap-2 flex-1">
                <div className="h-[1px] bg-stone-300 flex-1"></div>
                <span className="font-sans text-[10px] text-stone-500 font-semibold uppercase tracking-wider">{haldiEvent.year}</span>
                <div className="h-[1px] bg-stone-300 flex-1"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <a 
                href={`tel:${haldiEvent.phone}`}
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 z-10"
                title="Call Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href={haldiEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 z-10"
                title="View Map Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Divider Line */}
          <div className="flex items-center justify-center w-full py-4 max-w-md">
            <div className="h-[1px] bg-gold-400/30 flex-1"></div>
            <div className="mx-4 text-gold-500 font-serif text-sm tracking-widest">✦ ❦ ✦</div>
            <div className="h-[1px] bg-gold-400/30 flex-1"></div>
          </div>

          {/* Card 2: At Home */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="w-full bg-[#FAF7F2] border border-gold-300/30 rounded-[40px] shadow-xl p-8 pt-28 pb-10 text-center relative flex flex-col items-center hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Overlapping Arched Couple Image - Made Transparent */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-40 overflow-hidden rounded-t-full z-10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={atHomeEvent.image} 
                alt={atHomeEvent.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-maroon-900 mb-3 mt-4">
              {atHomeEvent.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-xs md:text-sm text-stone-500 leading-relaxed mb-6 max-w-md">
              {atHomeEvent.description}
            </p>

            {/* Time */}
            <p className="font-sans text-xs text-stone-700 tracking-wide uppercase font-semibold mb-1">
              {atHomeEvent.time}
            </p>

            {/* Location */}
            {atHomeEvent.locationText && (
              <p className="font-sans text-xs text-stone-500 tracking-wide uppercase font-medium flex items-center justify-center gap-1 mb-2">
                <MapPin className="w-3 h-3 text-gold-500" />
                {atHomeEvent.locationText}
              </p>
            )}

            {/* Custom Date Strip (Double line dividers) */}
            <div className="w-full flex items-center justify-center gap-4 my-6 max-w-md">
              {/* Left column: Line | Day | Line */}
              <div className="flex items-center gap-2 flex-1">
                <div className="h-[1px] bg-stone-300 flex-1"></div>
                <span className="font-sans text-[10px] text-stone-500 font-semibold uppercase tracking-wider">{atHomeEvent.day}</span>
                <div className="h-[1px] bg-stone-300 flex-1"></div>
              </div>
              
              {/* Center column: Date */}
              <span className="font-serif text-2xl md:text-3xl text-gold-600 font-bold tracking-tight px-1">
                {atHomeEvent.dateStr}
              </span>
              
              {/* Right column: Line | Year | Line */}
              <div className="flex items-center gap-2 flex-1">
                <div className="h-[1px] bg-stone-300 flex-1"></div>
                <span className="font-sans text-[10px] text-stone-500 font-semibold uppercase tracking-wider">{atHomeEvent.year}</span>
                <div className="h-[1px] bg-stone-300 flex-1"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <a 
                href={`tel:${atHomeEvent.phone}`}
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 z-10"
                title="Call Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href={atHomeEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 z-10"
                title="View Map Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
