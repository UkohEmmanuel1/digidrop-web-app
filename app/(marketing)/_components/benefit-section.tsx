"use client";
import React from "react";
import BCard from "./BCard";
import Image from "next/image";
import { motion } from "framer-motion";

// Fade up animation
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const BenefitSection = () => {
  return (
    <section className="w-full mt-12 mb-16 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-chakra"
        {...fadeUp(0.1)}
      >
        Benefits of Having the Black Pass
      </motion.h1>

      {/* Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {/* Card 1 */}
        <motion.div
          {...fadeUp(0.2)}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <BCard
            icon={
              <Image
                src={"/assets/star-brand.png"}
                alt="icon-1"
                width={80}
                height={80}
                className="sm:w-20 sm:h-20"
              />
            }
            heading="One Passport to the Astra Nova Universe"
            text="Black Pass, through the free mint non-transferable Soulbound Token (SBT), stores all your information within the Astra Nova gaming ecosystem."
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          {...fadeUp(0.3)}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <BCard
            icon={
              <Image
                src={"/assets/user-brand.png"}
                alt="icon-2"
                width={80}
                height={80}
                className="sm:w-20 sm:h-20"
              />
            }
            heading="Earn Rewards at Every Turn"
            text="Earn Shards for every quest in the portal! Your achievements are tracked and recorded on the Black Pass, unlocking exclusive benefits and rewards."
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          {...fadeUp(0.4)}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <BCard
            icon={
              <Image
                src={"/assets/logo-brand.png"}
                alt="icon-3"
                width={80}
                height={80}
                className="sm:w-20 sm:h-20"
              />
            }
            heading="One Platform, Endless Features"
            text="With your Black Pass, you can collect Shards, and gain exclusive access to upcoming digital collectible drops, IRL events, merchandise, and more! Plus, earn passive income with NFT staking opportunities."
          />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          {...fadeUp(0.5)}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <BCard
            icon={
              <Image
                src={"/assets/count-brand.png"}
                alt="icon-4"
                width={80}
                height={80}
                className="sm:w-20 sm:h-20"
              />
            }
            heading="More Shards, More $RVV!"
            text="Ready to elevate your game? Collect more Shards and unlock a treasure trove of $RVV tokens! Transform your Shards into Astra Nova tokens ($RVV) on the big day of TGE."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitSection;
