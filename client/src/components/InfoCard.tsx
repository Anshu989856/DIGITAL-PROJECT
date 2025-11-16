import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  description?: string;
  delay?: number;
}

export default function InfoCard({ icon: Icon, label, value, description, delay = 0 }: InfoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-6 hover-elevate" data-testid={`card-info-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex items-start gap-4">
          <motion.div 
            className="p-3 rounded-md bg-primary/10"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{label}</p>
            <p className="text-3xl font-serif font-semibold mt-1">{value}</p>
            {description && (
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
