"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Loader2, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; contact?: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.contact.trim()) newErrors.contact = "Please enter your email or phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire confetti burst!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#58111a", "#d4ab48", "#faf6eb", "#8c6b24"],
      });
    }, 1800);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      contact: "",
      attending: "yes",
      guests: "1",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section className="px-4 py-20 bg-cream-100 bg-mandala-pattern relative overflow-hidden">
      <div className="max-w-2xl mx-auto bg-white border border-cream-200 shadow-xl rounded-2xl p-8 md:p-12 relative">
        {/* Gold Accent Borders inside the card */}
        <div className="absolute inset-2.5 border border-gold-300/30 rounded-xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center mb-8 relative z-10">
          <p className="font-sans text-xs text-gold-600 tracking-[0.25em] uppercase font-semibold mb-3">
            Will you join us?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-maroon-800 tracking-wide font-normal">
            Kindly RSVP
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-3"></div>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="rsvp-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-stone-600 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-cream-50/50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 font-sans text-sm transition-all duration-300 ${
                    errors.name ? "border-red-400" : "border-stone-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.name}</p>
                )}
              </div>

              {/* Contact Field */}
              <div>
                <label htmlFor="contact" className="block text-xs uppercase tracking-wider text-stone-600 font-semibold mb-2">
                  Contact details (Phone / Email)
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter phone number or email"
                  className={`w-full px-4 py-3 bg-cream-50/50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 font-sans text-sm transition-all duration-300 ${
                    errors.contact ? "border-red-400" : "border-stone-200"
                  }`}
                />
                {errors.contact && (
                  <p className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.contact}</p>
                )}
              </div>

              {/* Message / Greetings Field */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-stone-600 font-semibold mb-2">
                  Wishes & Blessings for the Couple
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your warm wishes..."
                  className="w-full px-4 py-3 bg-cream-50/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 font-sans text-sm transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-maroon-800 hover:bg-maroon-900 border border-gold-400/50 text-gold-200 hover:text-white font-serif tracking-widest text-lg font-normal rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-gold-200" />
                    Sending RSVP...
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-gold-200 group-hover:scale-125 transition-transform duration-300" />
                    Confirm Attendance
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8 relative z-10 flex flex-col items-center"
            >
              <CheckCircle2 className="w-16 h-16 text-gold-500 mb-6 animate-bounce" />
              <h3 className="font-serif text-2xl md:text-3xl text-maroon-900 mb-4 font-normal">
                Thank You, {formData.name}!
              </h3>
              <p className="font-sans text-sm text-stone-600 max-w-sm leading-relaxed mb-8">
                Your RSVP has been recorded. We are excited to celebrate with you!
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-cream-100 hover:bg-cream-200 text-maroon-800 border border-gold-300/80 rounded-lg text-sm font-sans tracking-wide transition-all duration-300 cursor-pointer font-semibold"
              >
                Submit another RSVP
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
