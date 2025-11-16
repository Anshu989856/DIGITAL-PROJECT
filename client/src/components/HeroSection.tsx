import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollIndicator from "./ScrollIndicator";
import heroImage from '@assets/generated_images/Stepwell_aerial_golden_hour_2944db4d.png';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        <motion.img 
          src={heroImage}
          alt="Aerial view of ancient stepwell at golden hour"
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0002})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1 
          className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Descent into Rajasthan
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white/90 font-serif italic mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The Secret Life of Stepwells
        </motion.p>
        <motion.p 
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Journey into the forgotten architectural wonders of Rajasthan, where ancient engineering meets social history in depths unseen by most travelers.
        </motion.p>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
