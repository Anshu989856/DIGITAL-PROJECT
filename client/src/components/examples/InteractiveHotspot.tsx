import InteractiveHotspot from '../InteractiveHotspot';
import backgroundImage from '@assets/generated_images/Women_gathering_at_stepwell_8a689e3f.png';

export default function InteractiveHotspotExample() {
  return (
    <div className="relative w-full aspect-video bg-background">
      <img 
        src={backgroundImage} 
        alt="Background"
        className="w-full h-full object-cover rounded-md"
      />
      <InteractiveHotspot 
        x={30}
        y={40}
        title="Water Collection Ritual"
        description="Women would gather at dawn to collect fresh water for their households. The stepwell served as a vital community water source, especially during dry seasons when surface wells ran dry."
      />
      <InteractiveHotspot 
        x={70}
        y={60}
        title="Social Gathering"
        description="Stepwells were important social spaces where women could meet, share news, and build community bonds away from the watchful eyes of men. These gatherings formed the backbone of local information networks."
      />
    </div>
  );
}
