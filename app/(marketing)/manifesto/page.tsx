"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Assuming you have lucide-react, if not, remove the icon

const ManifestoPage = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col font-chakra text-white"
      style={{
        background:
          "linear-gradient(179.5deg, rgba(59, 31, 131, 0.3) 0.44%, rgba(0, 74, 173, 0.5) 49.67%, rgba(28, 28, 28, 0.75) 99.57%)",
      }}
    >
      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        
        {/* Title Section */}
        <div className="mb-20">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            The DigiDrop <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Constellation Manifesto
            </span>
          </h1>
        </div>

        {/* Content Flow */}
        <div className="space-y-16 text-lg leading-relaxed text-gray-200 md:text-xl">
          
          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Drift beyond the noise.
            </h2>
            <p>
              Digi Drop is a living constellation an ever expanding SocialFi universe where
              identity is soulbound, curiosity is rewarded, and participation becomes a journey.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Here, explorers do not speculate. They arrive.
            </h2>
            <p>
              Each voyage begins with a DigiDrop Pass, minted before entry, unlocking the
              dashboard the command deck where quests unfold, paths diverge, and communities
              form their own orbits.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <p>
              We designed DigiDrop to feel light, playful, and human. A place where creativity
              replaces pressure, and presence matters more than prediction. Stardust marks your
              movement through the stars not as currency, but as memory, progress, and proof of
              participation.
            </p>
          </section>

          {/* Closing Statement */}
          <section className="border-t border-white/10 pt-12">
            <p className="mx-auto max-w-2xl italic text-gray-400">
              "This manifesto is not a promise of returns. It is an invitation to wander,
              collaborate, and leave a trace in a shared digital sky."
            </p>
          </section>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              className="group relative h-auto rounded-xl border border-purple-500/50 bg-purple-900/40 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-sm transition-all hover:scale-105 hover:bg-purple-800/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              <span className="flex items-center gap-3">
                <Download className="h-5 w-5 text-purple-300 group-hover:text-white" />
                Download the Manifesto (PDF)
              </span>
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ManifestoPage;