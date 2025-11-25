"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Fade-up animation helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

// Single Card Component
const BCard = ({ icon, heading, text }: { icon: React.ReactNode; heading: string; text: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="w-full max-w-[280px] bg-[#181818]/95 border  border-white flex flex-col items-center py-24 text-white shadow-md hover:shadow-lg transition-all duration-300 min-h-[440px]"
    >
      <div className="py-6 flex justify-center">{icon}</div>
      <div className="flex flex-col items-center px-4 text-center flex-1">
        <h2 className="font-chakra text-lg sm:text-xl font-bold uppercase mb-4 leading-snug">{heading}</h2>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">{text}</p>
      </div>
    </motion.div>
  );
};

// Main Benefit Section
const BenefitSection: React.FC = () => {
  const cards = [
    {
      icon: (
        <Image
          src="/assets/star-brand.png"
          alt="Astra Nova Universe"
          width={80}
          height={80}
          className="sm:w-20 sm:h-20"
        />
      ),
      heading: "One Passport to the Astra Nova Universe",
      text: "Black Pass, through the free mint non-transferable Soulbound Token (SBT), stores all your information within the Astra Nova gaming ecosystem.",
    },
    {
      icon: (
        <Image
          src="/assets/user-brand.png"
          alt="Earn Rewards"
          width={80}
          height={80}
          className="sm:w-20 sm:h-20"
        />
      ),
      heading: "Earn Rewards at Every Turn",
      text: "Earn Shards for every quest in the portal! Your achievements are tracked and recorded on the Black Pass, unlocking exclusive benefits and rewards.",
    },
    {
      icon: (
        <Image
          src="/assets/logo-brand.png"
          alt="Endless Features"
          width={80}
          height={80}
          className="sm:w-20 sm:h-20"
        />
      ),
      heading: "One Platform, Endless Features",
      text: "With your Black Pass, you can collect Shards and gain exclusive access to upcoming digital collectible drops, IRL events, merchandise, and more! Plus, earn passive income with NFT staking opportunities.",
    },
    {
      icon: (
        <Image
          src="/assets/count-brand.png"
          alt="More Shards"
          width={80}
          height={80}
          className="sm:w-20 sm:h-20"
        />
      ),
      heading: "More Shards, More $RVV!",
      text: "Ready to elevate your game? Collect more Shards and unlock a treasure trove of $RVV tokens! Transform your Shards into Astra Nova tokens ($RVV) on the big day of TGE.",
    },
  ];

  return (
    <section className="w-full mt-16 mb-20 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <motion.h1
        {...fadeUp(0.1)}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-chakra"
      >
        Benefits of Having the Black Pass
      </motion.h1>

      {/* Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-24 justify-items-center ">
        {cards.map((card, index) => (
          <BCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
