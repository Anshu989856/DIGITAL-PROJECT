import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Camera } from "lucide-react";
import modernImage from '@assets/generated_images/Modern_stepwell_daily_use_b7bfb4e6.png';

export default function ModernContextSection() {
  const ref = useRef(null);
  const wellsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const areWellsInView = useInView(wellsRef, { once: true, margin: "-50px" });

  const stepwells = [
    { name: "Chand Baori", location: "Abhaneri", status: "Preserved", visits: "50K+/year" },
    { name: "Panna Meena", location: "Jaipur", status: "Restored", visits: "30K+/year" },
    { name: "Toorji Ka Jhalra", location: "Jodhpur", status: "Active", visits: "20K+/year" },
    { name: "Neemrana Baori", location: "Neemrana", status: "Preserved", visits: "15K+/year" },
    { name: "Agrasen Ki Baoli", location: "Delhi", status: "Protected", visits: "40K+/year" },
    { name: "Adalaj Stepwell", location: "Gandhinagar", status: "Restored", visits: "25K+/year" },
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen py-24 px-4 bg-background"
      data-testid="section-modern"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Ascent: Modern Context
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Today, these architectural treasures face new challenges and opportunities. Some have been restored to their former glory, while others remain forgotten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src={modernImage}
              alt="Modern stepwell usage"
              className="w-full rounded-md shadow-lg mb-6"
              whileHover={{ scale: 1.02 }}
            />
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-serif text-xl font-semibold mb-2">Conservation Efforts</h3>
                <p className="text-muted-foreground">
                  Organizations like the Archaeological Survey of India and local heritage groups work tirelessly to preserve these structures, balancing tourism with conservation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="font-serif text-xl font-semibold mb-2">Living Heritage</h3>
                <p className="text-muted-foreground">
                  Some stepwells continue to serve their original purpose, providing water and cool refuge to local communities while attracting curious travelers.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div ref={wellsRef} className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold mb-6">Notable Stepwells of Rajasthan</h3>
            {stepwells.map((well, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={areWellsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card 
                  className="p-4 hover-elevate cursor-pointer"
                  onClick={() => console.log(`Exploring ${well.name}`)}
                  data-testid={`card-stepwell-${well.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{well.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        {well.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {well.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{well.visits}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="bg-secondary/20 rounded-md p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">Explore More Heritage</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Rajasthan holds countless architectural wonders waiting to be discovered. Each stepwell tells a unique story of the community that built and used it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="default"
                onClick={() => console.log('Planning visit')}
                data-testid="button-plan-visit"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Plan Your Visit
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                onClick={() => console.log('Supporting preservation')}
                data-testid="button-support"
              >
                <Heart className="w-4 h-4 mr-2" />
                Support Preservation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                onClick={() => console.log('Viewing gallery')}
                data-testid="button-gallery"
              >
                <Camera className="w-4 h-4 mr-2" />
                Photo Gallery
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
