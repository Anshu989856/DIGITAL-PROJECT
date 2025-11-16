import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InteractiveHotspot from "./InteractiveHotspot";
import socialImage from '@assets/generated_images/Women_gathering_at_stepwell_8a689e3f.png';

export default function SocialLifeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="min-h-screen py-24 px-4 bg-secondary/20"
      data-testid="section-social"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            First Landing: Social Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond their architectural beauty, stepwells were vibrant social hubs. Click the hotspots to discover the hidden stories of daily life.
          </p>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-md overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src={socialImage}
            alt="Women gathering at stepwell"
            className="w-full h-full object-cover"
          />
          
          <InteractiveHotspot 
            x={25}
            y={45}
            title="Water Collection Ritual"
            description="Every dawn, women descended the steps carrying brass and copper vessels. The cool morning hours were reserved for filling water for the day. This daily ritual created a rhythm to community life that lasted for centuries."
          />
          
          <InteractiveHotspot 
            x={65}
            y={35}
            title="Women's Social Space"
            description="Stepwells provided rare spaces where women could gather freely, share news, arrange marriages, and build support networks. Away from male oversight, these became crucial centers of feminine power and information exchange."
          />
          
          <InteractiveHotspot 
            x={45}
            y={70}
            title="Refuge from Heat"
            description="During scorching summer months when temperatures soared above 45°C, families would descend into the stepwell's cool depths. The temperature could drop 5-10 degrees, offering precious relief and making these structures vital for survival."
          />
          
          <InteractiveHotspot 
            x={80}
            y={55}
            title="Festival Gatherings"
            description="During religious festivals, stepwells transformed into ceremonial spaces. Oil lamps would line the steps, and communities would gather for prayers, music, and celebrations, the architecture amplifying sound in mesmerizing ways."
          />
        </motion.div>
      </div>
    </section>
  );
}
