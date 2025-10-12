"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BenefitSection from "./benefit-section";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const ServiceSection = () => {
  return (
    <section className="w-full min-h-screen -mt-auto mb-8 bg-[#1C1C1C]/90 bg-[url('/assets/pattern-bg.png')] bg-cover bg-no-repeat bg-center bg-blend-multiply p-4 sm:p-6">
      <div className="container py-12 sm:py-16 lg:py-24 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Text */}
              <motion.div
                className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                {...fadeUp(0.1)}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 px-2 lg:px-0 mb-4 tracking-tight font-bold font-chakra leading-snug uppercase">
                  Complete multiple quests and collect as many points as you
                  can.
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-normal text-white font-chakra max-w-xl mx-auto lg:mx-0">
                  His pass serves as a platform to store and redeem rewards,
                  such as Shards through task completion and social quests.
                  During the game demo stage, you can accumulate Shards to later
                  convert them into
                  <span className="font-semibold text-purple-400">
                    {" "}
                    $DDX (DIGIDROP Token)
                  </span>
                  . Think of the Black Pass as a digital profile within Astra
                  Nova, preserving a player's on-chain achievements
                  indefinitely. Only Black Pass holders will have access to
                  claim the upcoming $DDX Airdrop.
                </p>
              </motion.div>

              {/* Right Side (pushed down on large screens) */}
              <motion.div
                className="flex flex-col items-center justify-center gap-6 text-center mt-8 lg:mt-2 opacity-20"
                {...fadeUp(0.3)}
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[160px] bg-gradient-to-tr from-[#004AAD] via-[#665BC9] to-[#CB6CE6] bg-clip-text text-transparent font-extrabold font-chakra opacity-20 "
                  initial={{ opacity: 20, scale: 0.8 }}
                  whileInView={{ opacity: 20, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  $DDX
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/assets/brand.png"
                    alt="brand"
                    width={350}
                    height={350}
                    className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[350px] h-auto opacity-20 "
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white font-chakra tracking-tight mb-12"
            {...fadeUp(0.2)}
          >
            How to get the Black Pass
          </motion.h2>

          <div
            className="
        flex flex-col md:flex-row 
        justify-center items-center 
        gap-10 md:gap-12 lg:gap-16 
        w-full max-w-5xl mx-auto
        text-white
      "
          >
            {/* Step 1 */}
            <motion.div
              className="flex flex-col gap-3 w-full md:max-w-[240px] items-center text-center"
              {...fadeUp(0.3)}
            >
              <Image
                src="/assets/wallet-icon.png"
                alt="wallet-icon"
                width={63}
                height={63}
                className="w-[45px] sm:w-[55px] md:w-[63px] h-auto"
              />
              <p className="text-base sm:text-lg md:text-xl font-chakra font-semibold leading-6">
                1. Connect an EVM Wallet
              </p>
              <p className="text-sm sm:text-base font-medium tracking-tight leading-5 font-chakra">
                If you don’t have one, create it here
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col gap-3 w-full md:max-w-[240px] items-center text-center"
              {...fadeUp(0.5)}
            >
              <Image
                src="/assets/mint-icon.png"
                alt="mint-icon"
                width={63}
                height={63}
                className="w-[45px] sm:w-[55px] md:w-[63px] h-auto"
              />
              <p className="text-base sm:text-lg md:text-xl font-chakra font-semibold leading-6">
                2. Mint the Black Pass
              </p>
              <p className="text-sm sm:text-base font-normal tracking-tight leading-5 font-chakra">
                Black Pass is a non-transferable Soulbound Token (SBT)
                associated with your wallet and will be forever in your wallet.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col gap-3 w-full md:max-w-[240px] items-center text-center"
              {...fadeUp(0.7)}
            >
              <Image
                src="/assets/star.png"
                alt="star-icon"
                width={56}
                height={63}
                className="w-[40px] sm:w-[50px] md:w-[56px] h-auto"
              />
              <p className="text-base sm:text-lg md:text-xl font-chakra font-semibold leading-6">
                3. Begin your journey
              </p>
              <p className="text-sm sm:text-base font-normal tracking-tight leading-5 font-chakra">
                Start participating in the quests and collecting your rewards.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitSection />
    </section>
  );
};

export default ServiceSection;
