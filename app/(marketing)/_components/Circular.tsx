"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Circular() {
  return (
    <>
      {/* Main Section */}
      <section className="relative w-full min-h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-no-repeat flex items-center justify-center px-2 sm:px-4 md:px-6 py-10 sm:py-12">
        
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
          className="absolute -top-10 sm:-top-16 md:-top-24 left-2 sm:left-8 md:left-16 z-10"
        >
          <Image
            src="/assets/sky-2.png"
            alt="floating-cloud"
            width={600}
            height={400}
            className="object-contain w-[80vw] sm:w-[60vw] md:w-[500px]"
            loading="lazy"
          />
        </motion.div>

        {/* Grid Layout (Always 3 Columns) */}
        <div className="relative grid grid-cols-3 gap-x-4 sm:gap-x-10 md:gap-x-20 lg:gap-x-28 gap-y-6 sm:gap-y-8 w-full max-w-7xl z-20">

          {/* Column 1 — Daily Login */}
          <div className="flex items-start justify-start">
            <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
              text-white p-4 sm:p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
              transform hover:-translate-y-3 md:hover:-translate-y-6
              transition-transform duration-300 ease-out w-full max-w-[90%] sm:max-w-[80%] md:max-w-sm text-center mx-auto"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">DAILY LOGIN</h2>
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[rgba(161,118,214,0.8)]
                  border border-white/30 text-gray-100 text-sm sm:text-base md:text-lg font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                20 POINTS
              </button>
            </div>
          </div>

          {/* Column 2 — Middle Two Boxes */}
          <div className="flex flex-col justify-between space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
            
            {/* Mint Golden Pass */}
            <div className="flex justify-center">
              <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
                text-white p-4 sm:p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-3 md:hover:-translate-y-6
                transition-transform duration-300 ease-out w-full max-w-[90%] sm:max-w-[80%] md:max-w-sm text-center mx-auto"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">MINT A GOLDEN PASS</h2>
                <button
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[rgba(161,118,214,0.8)]
                    border border-white/30 text-gray-100 text-sm sm:text-base md:text-lg font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  GET XS OF ALL POINTS
                </button>
              </div>
            </div>

            {/* Refer Friend */}
            <div className="flex justify-center">
              <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
                text-white p-4 sm:p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-3 md:hover:-translate-y-6
                transition-transform duration-300 ease-out w-full max-w-[90%] sm:max-w-[80%] md:max-w-sm text-center mx-auto"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">REFER YOUR FRIEND</h2>
                <button
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[rgba(161,118,214,0.8)]
                    border border-white/30 text-gray-100 text-sm sm:text-base md:text-lg font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(161,118,214,1)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  30 POINTS
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 — Guest Box */}
          <div className="flex items-end justify-end">
            <div className="bg-[linear-gradient(203.64deg,#181818_9.95%,#004AAD_50.53%,#191818_90.05%)]
              text-white p-4 sm:p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
              transform hover:-translate-y-3 md:hover:-translate-y-6
              transition-transform duration-300 ease-out w-full max-w-[90%] sm:max-w-[80%] md:max-w-sm text-center mx-auto"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">WE HAVE A GUEST</h2>
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[rgba(161,118,214,0.8)]
                  border border-white/30 text-gray-100 text-sm sm:text-base md:text-lg font-semibold
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
