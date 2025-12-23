"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MintSection: React.FC = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#4B3D73] to-[#2C4DA3] text-white px-4 py-20">
      {/* Header Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center font-chakra uppercase"
      >
        WELCOME{" "}
        <span className="bg-gradient-to-r from-[#c471ed] to-[#12c2e9] text-transparent bg-clip-text">
          DIGIVERSE
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-center font-semibold"
      >
        Mint your{" "}
        <span className="bg-gradient-to-r from-[#c471ed] to-[#c471ed] text-transparent bg-clip-text">
          soul-bound NFT
        </span>{" "}
        pass
      </motion.p>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 backdrop-blur-lg p-6 flex flex-col items-center hover:shadow-purple-700/30 transition"
      >
        <div className="relative w-[240px] sm:w-[280px] md:w-[300px]">
          <Image
            src="/assets/gold.png"  //the card image
            alt="Voyager NFT Card"
            width={300}
            height={400}
            className="rounded-xl"
          />
        </div>

        <p className="mt-6 text-sm sm:text-base text-purple-400 font-semibold">
          Mint White Pass for $5
        </p>

        <button className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition">
          Mint
        </button>
      </motion.div>
    </section>
  );
};

export default MintSection;
