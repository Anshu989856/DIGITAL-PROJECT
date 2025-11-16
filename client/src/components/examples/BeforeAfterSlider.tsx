import BeforeAfterSlider from '../BeforeAfterSlider';
import beforeImage from '@assets/generated_images/Abandoned_dry_stepwell_1057184f.png';
import afterImage from '@assets/generated_images/Restored_water-filled_stepwell_6ad63043.png';

export default function BeforeAfterSliderExample() {
  return (
    <div className="p-8 bg-background">
      <BeforeAfterSlider 
        beforeImage={beforeImage}
        afterImage={afterImage}
        beforeLabel="Abandoned"
        afterLabel="Restored"
      />
    </div>
  );
}
