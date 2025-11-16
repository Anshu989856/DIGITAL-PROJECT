import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface InteractiveHotspotProps {
  x: number;
  y: number;
  title: string;
  description: string;
  image?: string;
}

export default function InteractiveHotspot({ x, y, title, description, image }: InteractiveHotspotProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 group"
        style={{ left: `${x}%`, top: `${y}%` }}
        data-testid={`button-hotspot-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary hover-elevate active-elevate-2 border-2 border-primary-border shadow-lg">
          <Info className="w-5 h-5 text-primary-foreground" />
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent data-testid={`dialog-hotspot-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed mt-4">
              {description}
            </DialogDescription>
          </DialogHeader>
          {image && (
            <img 
              src={image} 
              alt={title}
              className="w-full rounded-md mt-4"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
