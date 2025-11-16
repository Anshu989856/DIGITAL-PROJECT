import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface ProgressHeaderProps {
  currentDepth?: number;
  maxDepth?: number;
}

export default function ProgressHeader({ currentDepth = 0, maxDepth = 30 }: ProgressHeaderProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayDepth = Math.round((scrollProgress / 100) * maxDepth);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      data-testid="header-progress"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="font-serif text-xl font-semibold">Descent into Rajasthan</h1>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm" data-testid="text-depth-counter">
            <span className="text-muted-foreground">Depth:</span>
            <span className="font-mono font-semibold text-primary">{displayDepth}m</span>
            <span className="text-muted-foreground">/ {maxDepth}m</span>
          </div>
          
          <Button 
            size="icon" 
            variant="ghost"
            onClick={() => {
              setIsMuted(!isMuted);
              console.log(isMuted ? 'Sound enabled' : 'Sound muted');
            }}
            data-testid="button-toggle-sound"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      <div className="h-1 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          data-testid="progress-bar"
        />
      </div>
    </header>
  );
}
