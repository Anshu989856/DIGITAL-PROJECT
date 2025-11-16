import InfoCard from '../InfoCard';
import { Calendar, Ruler, Users } from 'lucide-react';

export default function InfoCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-background">
      <InfoCard 
        icon={Calendar} 
        label="Built" 
        value="800 CE" 
        description="During Rajput era"
      />
      <InfoCard 
        icon={Ruler} 
        label="Depth" 
        value="30 meters" 
        description="Approximately 100 feet"
      />
      <InfoCard 
        icon={Users} 
        label="Steps" 
        value="3,500+" 
        description="Perfectly symmetrical"
      />
    </div>
  );
}
