"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setShow(false), 1000); 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        >
          {/* Modern Central Modal */}
          <motion.div 
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/60 p-8 flex flex-col items-center overflow-hidden"
          >
            {/* Elegant Background Accents inside modal */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-200/40 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-maroon-100/40 rounded-full blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-full border border-gold-300 bg-gold-50 flex items-center justify-center mb-5 shadow-sm">
                <span className="font-serif text-3xl text-gold-600">S</span>
              </div>

              <h2 className="font-serif text-2xl text-maroon-900 mb-2">
                A Warm Welcome
              </h2>
              
              <p className="font-sans text-[10px] text-stone-500 mb-8 uppercase tracking-[0.2em] text-center">
                From the Sutar Family
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsOpen(true)}
                className="group flex items-center gap-3 bg-maroon-900 text-[#FDFBF7] px-8 py-3.5 rounded-full font-sans text-xs tracking-widest uppercase shadow-xl hover:bg-maroon-800 transition-all border border-maroon-700/50"
              >
                Open Invitation
                <MailOpen className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
              </motion.button>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
