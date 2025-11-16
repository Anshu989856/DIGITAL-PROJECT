import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Compass, Grid3x3, Shield } from "lucide-react";
import architectureImage from '@assets/generated_images/Carved_pillar_architectural_detail_69c4fc89.png';
import patternImage from '@assets/generated_images/Geometric_pattern_detail_6914bd09.png';

export default function ArchitectureSection() {
  const ref = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const areCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen py-24 px-4 bg-background"
      data-testid="section-architecture"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            The Descent: Architectural Genius
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each step reveals mathematical precision and artistic mastery that modern engineers still marvel at.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.img 
            src={architectureImage}
            alt="Carved pillar details"
            className="w-full rounded-md shadow-lg"
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: 15 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.img 
            src={patternImage}
            alt="Geometric patterns"
            className="w-full rounded-md shadow-lg"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: -15 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate={areCardsInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="p-8 hover-elevate h-full" data-testid="card-symmetry">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Grid3x3 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Perfect Symmetry</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built without modern tools, stepwells achieve mirror-perfect symmetry across multiple axes. Each carved pillar matches its counterpart exactly, creating mesmerizing visual harmony.
              </p>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate={areCardsInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="p-8 hover-elevate h-full" data-testid="card-geometry">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Sacred Geometry</h3>
              <p className="text-muted-foreground leading-relaxed">
                Islamic geometric patterns merge with Hindu motifs, creating intricate designs that serve both aesthetic and structural purposes. Mathematics meets spirituality in stone.
              </p>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate={areCardsInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card className="p-8 hover-elevate h-full" data-testid="card-engineering">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Earthquake Resistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                The stepped structure distributes weight evenly and flexes during tremors. Many stepwells have survived for over 1,000 years without significant structural damage.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 p-8 bg-secondary/20 rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={areCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">Construction Methods</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Top-Down Excavation</h4>
              <p className="text-muted-foreground">Builders began at ground level and carved downward, removing thousands of tons of rock while simultaneously creating steps and decorative elements.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Carved Not Built</h4>
              <p className="text-muted-foreground">Unlike most architecture, stepwells were primarily carved from solid rock formations rather than constructed with individual stones, creating monolithic structures.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
