"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const HowToPlay: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="relative max-w-lg w-full bg-gray-600 text-white rounded-xl p-6 sm:p-8 shadow-xl">
        {/* Close Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Welcome to Black Pass Season 1
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6">
            We’re excited to have you here
          </p>
        </div>

        {/* First Paragraph */}
        <div className="text-gray-400 text-sm sm:text-base space-y-4">
          <p>
            1. The Black Pass is a Social FI platform accessible through a free
            soulbound NFT, minable at the time of joining. On this platform,
            you’ll undertake social quests and farm points to earn the DDR token
            airdrop, the official token of the DIGIDROP ecosystem. It all begins
            with Season 1!, centred around DIGIDROP’s upcoming game demo.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Subheading */}
        <h2 className="text-center font-semibold text-sm sm:text-base uppercase tracking-wide mb-4">
          Rules, Points, and Demo Game Playtest
        </h2>

        {/* Second Paragraph */}
        <div className="text-gray-400 text-sm sm:text-base space-y-4">
          <p>
            1. The Black Pass is a Social FI platform accessible through a free
            soulbound NFT, minable at the time of joining. On this platform,
            you’ll undertake social quests and farm points to earn the DDR token
            airdrop, the official token of the DIGIDROP ecosystem. It all begins
            with Season 1!, centred around DIGIDROP’s upcoming game demo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
