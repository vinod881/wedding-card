"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Use a royalty free traditional sitar track hosted on Internet Archive
  const audioUrl = "https://archive.org/download/dni.ncaa.CCRT-506-SP/dni.ncaa.CCRT-506-SP.mp3";

  useEffect(() => {
    // Initialize audio element
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Clean up audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch((err) => {
        console.error("Audio playback blocked or failed:", err);
      });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <span className="bg-maroon-800 text-cream-100 text-xs px-3 py-1.5 rounded-full border border-gold-300 shadow-md font-sans tracking-wide animate-pulse hidden md:inline-block">
          Tap to play music 🎵
        </span>
      )}
      <button
        onClick={togglePlayback}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-maroon-900 border border-gold-400 text-gold-200 hover:text-white hover:bg-maroon-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none relative"
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse-slow" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        
        {/* Subtle decorative pulsing ring when not playing */}
        {!isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-gold-400/30 animate-ping opacity-75"></span>
        )}
      </button>
    </div>
  );
}
