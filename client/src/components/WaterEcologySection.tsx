import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Card } from "@/components/ui/card";
import { Droplets, Leaf, ThermometerSun, Wind } from "lucide-react";
import beforeImage from '@assets/generated_images/Abandoned_dry_stepwell_1057184f.png';
import afterImage from '@assets/generated_images/Restored_water-filled_stepwell_6ad63043.png';
import reflectionImage from '@assets/generated_images/Water_reflection_symmetry_7622458b.png';

export default function WaterEcologySection() {
  const ref = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const areCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const ecologyCards = [
    { icon: Droplets, title: "Water Storage", description: "Collected and stored monsoon rainwater for year-round use", testId: "water" },
    { icon: ThermometerSun, title: "Cool Refuge", description: "5-10°C cooler than surface temperatures", testId: "temperature" },
    { icon: Wind, title: "Aquifer Recharge", description: "Helped maintain regional groundwater levels", testId: "groundwater" },
    { icon: Leaf, title: "Biodiversity", description: "Supported unique ecosystems in arid regions", testId: "biodiversity" },
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen py-24 px-4 bg-primary/5"
      data-testid="section-water"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            The Depths: Water & Ecology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At the deepest point lies the water that sustained entire communities. Witness the transformation from abandonment to restoration.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BeforeAfterSlider 
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel="Abandoned & Dry"
            afterLabel="Restored & Filled"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl font-semibold mb-4">Ecological Engineering</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stepwells weren't just wells—they were sophisticated water management systems that recharged groundwater, filtered rainwater through layers of sand and stone, and maintained temperature-controlled microclimates.
            </p>
            <motion.img 
              src={reflectionImage}
              alt="Water reflections in stepwell"
              className="w-full rounded-md shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {ecologyCards.map((card, index) => (
              <motion.div
                key={card.testId}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={areCardsInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 30, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              >
                <Card className="p-6 h-full" data-testid={`card-ecology-${card.testId}`}>
                  <card.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="p-8 bg-background rounded-md border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="font-serif text-2xl font-semibold mb-6">Seasonal Changes</h3>
          <div className="space-y-4">
            <motion.div 
              className="flex gap-4"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Monsoon</div>
              <div className="flex-1">
                <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                  <motion.div 
                    className="bg-primary h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '90%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">July-September: Maximum water level, steps submerged</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-4"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-accent">Summer</div>
              <div className="flex-1">
                <div className="w-full bg-muted rounded-full h-3 mb-2 overflow-hidden">
                  <motion.div 
                    className="bg-accent h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '30%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">March-June: Lowest level, deepest steps exposed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
