import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import InvitationCard from "@/components/InvitationCard";
import EventCard from "@/components/EventCard";
import CelebrationTimeline from "@/components/CelebrationTimeline";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <WelcomePopup />

      {/* Floating Music player controller */}
      <MusicPlayer />

      {/* Hero split-screen image banner with name details */}
      <Hero />

      {/* Formal invitation card details from the Bride's side */}
      <InvitationCard />

      {/* Event detail cards */}
      <EventCard />

      {/* Decorative Page Division Line */}
      <div className="flex items-center justify-center my-6 max-w-3xl mx-auto px-6">
        <div className="h-[1px] bg-gold-400/30 flex-1"></div>
        <div className="mx-4 text-gold-500 font-serif text-sm tracking-widest">✦ ❦ ✦</div>
        <div className="h-[1px] bg-gold-400/30 flex-1"></div>
      </div>

      {/* Celebration timeline schedules */}
      <CelebrationTimeline />

      {/* Alternating vertical relationship history timeline */}
      <LoveStory />

      {/* 3D perspective rotated albums of pre-wedding shoot */}
      <Gallery />

      {/* Heartfelt thank-you closing note footer */}
      <Footer />
    </main>
  );
}

