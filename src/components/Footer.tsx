export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#0A0A0A] text-cream-100/90 py-24 text-center px-4 overflow-hidden border-t border-gold-500/20">
      
      {/* Modern Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-maroon-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-2xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
        
        {/* Modern Monogram Logo */}
        <div className="w-16 h-16 rounded-full border border-gold-500/40 flex items-center justify-center bg-gold-900/10 backdrop-blur-sm shadow-[0_0_15px_rgba(212,171,72,0.15)]">
           <span className="font-serif text-3xl text-gold-400">S</span>
        </div>

        <div>
          <h3 className="font-serif text-4xl md:text-5xl text-white font-light tracking-wide mb-2">
            Thank You
          </h3>
          <p className="font-sans text-xs md:text-sm text-gold-300 tracking-[0.3em] uppercase font-medium">
            From the Sutar Family
          </p>
        </div>

        <p className="font-sans text-xs md:text-sm text-white/50 max-w-md mx-auto leading-relaxed font-light">
          We deeply appreciate your presence. Thank you for being a part of our lives, sharing our joy, and showering us with your blessings.
        </p>

        <div className="w-12 h-[1px] bg-gold-500/40 mx-auto my-4"></div>

        <p className="font-serif text-xl md:text-2xl text-white/80 italic tracking-widest font-light">
          #SupriyaWedsVeeresh
        </p>

        <p className="font-sans text-[9px] md:text-[10px] text-white/30 tracking-widest pt-12 uppercase">
          © 2026 Sutar Family. Designed with love.
        </p>

      </div>
    </footer>
  );
}
