"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen bg-gaming-bg flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gaming-text mb-4">
            DIGIDROP Black Pass
          </h1>
          <p className="text-xl text-gaming-text-muted max-w-2xl mx-auto leading-relaxed">
            Welcome to the ultimate Social Fi gaming experience. 
            Join Season 1 and start your journey in the DIGIDROP ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setShowModal(true)}
            className="bg-gaming-accent hover:bg-gaming-accent/80 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all hover:shadow-lg hover:shadow-gaming-accent-glow"
          >
            View Season Info
          </Button>
          <Button 
            variant="outline" 
            className="border-gaming-border text-gaming-text hover:bg-gaming-surface-hover px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gaming-accent-glow blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gaming-accent-glow blur-3xl opacity-20" />
        </div>
      </div>

    </div>
  );
};

export default Index;