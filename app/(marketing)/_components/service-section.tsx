"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BenefitSection from "./benefit-section";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const ServiceSection = () => {
  const steps = [
    {
      id: 1,
      icon: "/assets/wallet-icon.png",
      title: "Connect an EVM Wallet",
      text: "If you don’t have one, create it here.",
      delay: 0.3,
    },
    {
      id: 2,
      icon: "/assets/mint-icon.png",
      title: "Mint the Black Pass",
      text: "Black Pass is a non-transferable Soulbound Token (SBT) linked to your wallet and stays there forever.",
      delay: 0.5,
    },
    {
      id: 3,
      icon: "/assets/star.png",
      title: "Begin Your Journey",
      text: "Start participating in quests and collecting your rewards.",
      delay: 0.7,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#1C1C1C]/90 bg-[url('/assets/pattern-bg.png')] bg-cover bg-no-repeat bg-center bg-blend-multiply sm:p-6 mb-8">

<div className="container mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
  {/* Left Column - Text */}
  <motion.div
    className="text-white text-left space-y-4"
    {...fadeUp(0.1)}
  >
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-chakra uppercase leading-snug tracking-tight">
      Complete multiple quests <br /> and collect as many points <br /> as you can.
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-gray-400 font-chakra">
      This pass serves as a platform to store and redeem rewards, such as Shards through task completion and social quests. During the game demo stage, you can accumulate shards to later convert them into <span className="text-purple-400 font-semibold">$DDX (DIGIDROP Token)</span>. Think of the Black Pass as a digital profile within Astra Nova, preserving a player’s on-chain achievements indefinitely.
    </p>

    <span className="text-sm text-purple-400 block">
      Only Black Pass holders will have access to claim the upcoming $DDX Airdrop.
    </span>

    <button className="mt-6 px-6 py-2 bg-purple-600 rounded font-semibold hover:bg-purple-700 transition">
      Step by Step
    </button>
  </motion.div>

  {/* Right Column - Visual */}
  <motion.div
    className="flex flex-col items-center justify-center text-center"
    {...fadeUp(0.3)}
  >
    <motion.h1
      className="text-8xl sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[180px] font-extrabold font-chakra text-purple-500 opacity-20 m-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      $DDX
    </motion.h1>

    <Image
      src="/assets/brand.png"
      alt="brand"
      width={350}
      height={350}
      className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto opacity-20 mt-4"
    />
  </motion.div>
</div>



      {/*TEST */}
      {/* Intro Section 
      <div className="container mx-auto lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Text *
        <motion.div
          className="max-w-2xl text-white text-center lg:text-left"
          {...fadeUp(0.1)}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-chakra uppercase leading-snug tracking-tight">
            Complete multiple quests and collect as many points as you can.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-chakra">
            This pass serves as a platform to store and redeem rewards such as
            Shards through task completion and social quests. During the game
            demo stage, you can accumulate Shards to later convert them into
            <span className="text-purple-400 font-semibold">
              {" "}
              $DDX (DIGIDROP Token)
            </span>
            . Think of the Black Pass as a digital profile within Astra Nova,
            preserving your on-chain achievements indefinitely. Only Black Pass
            holders can claim the upcoming $DDX Airdrop.
          </p>
        </motion.div>

        {/* Right Visual *
        <motion.div
          className="flex flex-col items-center justify-center gap-6 text-center opacity-20"
          {...fadeUp(0.3)}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-12xl lg:text-[120px] xl:text-[160px] bg-gradient-to-tr from-[#004bad8c] via-[#665bc982] to-[#cc6ce654] bg-clip-text text-transparent font-extrabold font-chakra"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {" "}
            $DDX{" "}
          </motion.h1>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[160px]  bg-clip-text text-transparent font-extrabold font-chakra"
            {...fadeUp(0.5)}
          >
            $DDX
          </motion.h1>
          <Image
            src="/assets/brand.png"
            alt="brand"
            width={350}
            height={350}
            className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[350px] h-auto opacity-20"
          />
        </motion.div>
      </div>*/}

      {/* Steps Section */}
      <div className="w-full py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white font-chakra tracking-tight mb-16 text-start"
            {...fadeUp(0.2)}
          >
            How to Get the Black Pass
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-36 lg:gap-20 max-w-6xl mx-auto text-white">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                {...fadeUp(step.delay)}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 180, damping: 10 }}
                className="flex flex-col justify-start items-center text-center p-6 rounded-2xl min-h-[320px] w-full md:w-[260px] transition-all duration-300"
              >
                <Image
                  src={step.icon}
                  alt={`${step.title}-icon`}
                  width={64}
                  height={64}
                  className="w-[64px] h-auto mx-auto mb-6"
                />
                <p className="text-base sm:text-lg md:text-xl font-chakra font-semibold mb-3 leading-6">
                  {step.id}. {step.title}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-300 leading-6 font-chakra">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitSection />
    </section>
  );
};

export default ServiceSection;
