import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" data-testid="scroll-indicator">
      <span className="text-sm font-serif text-foreground/80">Scroll to descend</span>
      <ChevronDown className="w-6 h-6 text-foreground/60" />
    </div>
  );
}
