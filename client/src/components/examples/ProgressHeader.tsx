import ProgressHeader from '../ProgressHeader';

export default function ProgressHeaderExample() {
  return (
    <div>
      <ProgressHeader maxDepth={30} />
      <div className="h-[200vh] pt-20 p-8 bg-background">
        <h2 className="text-2xl font-serif mb-4">Scroll to see progress</h2>
        <p className="text-muted-foreground">The header shows your descent depth and overall progress.</p>
      </div>
    </div>
  );
}
