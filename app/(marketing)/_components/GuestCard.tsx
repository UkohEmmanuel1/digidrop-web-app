import { Button } from "@/components/ui/button";

interface GuestCardProps {
  points?: number;
}

const GuestCard = ({ points = 5 }: GuestCardProps) => {
  return (
    <div 
      className="relative w-full max-w-sm p-12 overflow-hidden"
      style={{ background: 'var(--gradient-card)' }}
    >
      {/* Rounded corner decoration on the right */}
      <div className="absolute -right-20 -bottom-20  rounded-full" />
      
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground tracking-wide">
          WE HAVE A<br />GUEST
        </h2>
        
        <Button 
          variant="secondary"
          className="w-full  bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 rounded-xl shadow-lg transition-all hover:scale-105"
        >
          {points} POINTS
        </Button>
      </div>
    </div>
  );
};

export default GuestCard;