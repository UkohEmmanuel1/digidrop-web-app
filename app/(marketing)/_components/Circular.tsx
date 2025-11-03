"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Circular() {
  return (
    <>
      {/* Main Section */}
      <section className="relative w-full min-h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-no-repeat flex items-center justify-center px-6 py-12">
        
        {/* Floating Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 40, 0, -40, 0],
            y: [0, -20, -40, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-16 sm:-top-24 left-4 sm:left-16 z-10"
        >
          <Image
            src="/assets/sky-2.png"
            alt="second-image"
            width={800}
            height={500}
            className="object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-6xl z-20">
          
          {/* Column 1 — Daily Login */}
          <div className="relative flex items-start justify-center">
            <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
              text-white p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
              transform md:-translate-y-8 hover:-translate-y-10
              transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-2xl font-bold mb-4">DAILY LOGIN</h2>
              <button
                className="px-8 py-3 bg-[rgba(161,118,214,0.8)]
                  border border-white/30 text-gray-100 text-lg font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                20 POINTS
              </button>
            </div>
          </div>

          {/* Column 2 — Middle Two Boxes */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* Mint Golden Pass */}
            <div className="relative flex items-start justify-center">
              <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
                text-white p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform md:-translate-y-8 hover:-translate-y-10
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-2xl font-bold mb-4">MINT A GOLDEN PASS</h2>
                <button
                  className="px-8 py-3 bg-[rgba(161,118,214,0.8)]
                    border border-white/30 text-gray-100 text-lg font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  GET XS OF ALL POINTS
                </button>
              </div>
            </div>

            {/* Refer Friend */}
            <div className="relative flex items-start justify-center">
              <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
                text-white p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform md:-translate-y-8 hover:-translate-y-10
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-2xl font-bold mb-4">REFER YOUR FRIEND</h2>
                <button
                  className="px-8 py-3 bg-[rgba(161,118,214,0.8)]
                    border border-white/30 text-gray-100 text-lg font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  30 POINTS
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 — Guest Box */}
          <div className="relative flex items-end justify-center">
            <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
              text-white p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
              transform md:-translate-y-8 hover:-translate-y-10
              transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-2xl font-bold mb-4">WE HAVE A GUEST</h2>
              <button
                className="px-8 py-3 bg-[rgba(161,118,214,0.8)]
                  border border-white/30 text-gray-100 text-lg font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                5 POINTS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
