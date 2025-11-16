import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState([50]);

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden" data-testid="slider-before-after">
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position[0]}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={beforeLabel}
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${position[0]}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-l-2 border-r-2 border-foreground" />
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">
        {afterLabel}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64">
        <Slider 
          value={position} 
          onValueChange={setPosition}
          min={0}
          max={100}
          step={1}
          className="cursor-ew-resize"
          data-testid="input-slider-position"
        />
      </div>
    </div>
  );
}
