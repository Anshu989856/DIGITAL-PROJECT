import { useEffect } from "react";
import ProgressHeader from "@/components/ProgressHeader";
import HeroSection from "@/components/HeroSection";
import SurfaceSection from "@/components/SurfaceSection";
import SocialLifeSection from "@/components/SocialLifeSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import WaterEcologySection from "@/components/WaterEcologySection";
import ModernContextSection from "@/components/ModernContextSection";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          console.log(`Viewing section ${index + 1}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <ProgressHeader maxDepth={30} />
      
      <main>
        <HeroSection />
        <SurfaceSection />
        <SocialLifeSection />
        <ArchitectureSection />
        <WaterEcologySection />
        <ModernContextSection />
      </main>

      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            This interactive experience aims to bring visibility to Rajasthan's under-represented architectural heritage.
          </p>
          <p className="text-sm text-muted-foreground">
            Created to showcase the hidden cultural treasures often overlooked by conventional tourism.
          </p>
        </div>
      </footer>
    </div>
  );
}
