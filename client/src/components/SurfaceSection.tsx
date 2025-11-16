import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import InfoCard from "./InfoCard";
import { Calendar, Layers, Ruler } from "lucide-react";
import depthImage from '@assets/generated_images/Stepwell_vertical_depth_view_ba303786.png';

export default function SurfaceSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTextInView = useInView(textRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-24 px-4 bg-background"
      data-testid="section-surface"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            ref={textRef}
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-serif text-4xl md:text-5xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Surface
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              What appears as simple stone steps at ground level conceals an architectural marvel that descends deep into the earth. Rajasthan's stepwells, or <em>baoris</em>, represent one of humanity's most ingenious solutions to water scarcity.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Built between the 3rd and 19th centuries, these structures served not just as water sources, but as cool refuges from the desert heat and vital community gathering spaces. Yet most tourists pass by without ever discovering their depths.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: -15 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transform: `translateY(${(scrollY - 800) * 0.15}px)`
            }}
          >
            <img 
              src={depthImage}
              alt="Vertical view showing stepwell depth"
              className="w-full rounded-md shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard 
            icon={Calendar}
            label="Constructed"
            value="800-1700 CE"
            description="Peak during medieval period"
            delay={0}
          />
          <InfoCard 
            icon={Ruler}
            label="Average Depth"
            value="20-30m"
            description="Some exceed 100 feet"
            delay={0.2}
          />
          <InfoCard 
            icon={Layers}
            label="Steps"
            value="1,000-3,500"
            description="Descending in perfect symmetry"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
