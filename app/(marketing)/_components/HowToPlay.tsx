"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const HowToPlay: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#ffffff] to-[#aaa] bg-clip-text text-transparent">
            Welcome to Black Pass Season 1
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            We’re excited to have you here!
          </p>
        </div>

        {/* Introduction */}
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
          <p>
            <strong>1.</strong> TheBlack Pass is a SocialFi  platform
            accessible through a free soulbound NFT, minable at the time of joining.
            On this platform, you’ll undertake social quests and farm points to earn
            the DDR token airdrop,  the official token of the DIGIDROP ecosystem.
          </p>
          <p>
            It all begins with Season 1, centered around DIGIDROP’s upcoming
            game demo. 
          </p>
        </div>

        {/* Subheading */}
        <h2 className="text-center font-semibold text-sm sm:text-base uppercase tracking-wider text-gray-200 mb-4">
          Rules, Points, and Demo Game Playtest
        </h2>

        {/* Rules Section */}
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            <strong>1.</strong> The Black Pass is a Social FI platform accessible
through a free soulbound NFT, minable at the time of
joining. On this platform, you’ll undertake social quests and farm points to earn the DDR token airdrop, the official token of the DIGIDROP ecosystem. It all begins with Season 1!, centred around DIGIDROP’s upcoming game demo
          </p>
          
        </div>

             
      </div>
    </div>
  );
};

export default HowToPlay;
