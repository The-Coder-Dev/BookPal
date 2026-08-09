import HeroSection from "@/components/web/Hero-section";
import EthosSection from "@/components/web/Ethos-section";
import CuratedShelves from "@/components/web/Curated-shelves";
import InteractiveReaderPreview from "@/components/web/Interactive-reader-preview";
import TestimonialsSection from "@/components/web/Testimonials-section";
import NewsletterCta from "@/components/web/Newsletter-cta";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section & Spotlight Deck */}
      <HeroSection />

      {/* 2. Ethos & Anti-Algorithm Manifesto */}
      <EthosSection />

      {/* 3. Curated Shelves & Volume Catalog */}
      <CuratedShelves />

      {/* 4. Interactive Live Reader Workstation */}
      <InteractiveReaderPreview />

      {/* 5. Reader Acclaim & Testimonials */}
      <TestimonialsSection />

      {/* 6. Dispatch Newsletter & Final Invitation */}
      <NewsletterCta />
    </div>
  );
}