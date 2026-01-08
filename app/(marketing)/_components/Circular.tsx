"use client";
import React from "react";

export default function Circular() {
  return (
    <>
      {/* Main Section */}
      <section className="relative w-full min-h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-no-repeat flex flex-col items-center justify-start lg:justify-center px-4 py-10 overflow-x-hidden">
        
        <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-x-20 w-full max-w-7xl z-20 bg-[url('/assets_icon/sky.png')] bg-contain bg-no-repeat">

          {/* DAILY LOGIN */}
          <div className="flex items-center justify-center">
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-chakra">DAILY LOGIN</h2>
              <button
                className="px-6 py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-base font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                UNLIMITED STARDUST
              </button>
            </div>
          </div>

          {/* --- Column 2: Middle Stack (Mint + Refer) --- */}
         
          <div className="flex flex-col justify-between space-y-8 md:space-y-12 lg:space-y-48">
            
            {/* Mint Golden Pass */}
            <div className="flex justify-center">
              <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                  text-white p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                  transform hover:-translate-y-2
                  transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-chakra">MINT A GOLDEN PASS</h2>
                <button
                  className="px-6 py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                    border border-white/30 text-gray-100 text-base font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:bg-[rgba(109,87,14,0.49)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  UNLIMITED STARDUST
                </button>
              </div>
            </div>

            {/* Refer Friend */}
            <div className="flex justify-center">
              <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                  text-white p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                  transform hover:-translate-y-2
                  transition-transform duration-300 ease-out w-full max-w-sm text-center"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-chakra">REFER YOUR FRIEND</h2>
                <button
                  className="px-6 py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                    border border-white/30 text-gray-100 text-base font-semibold
                    rounded-xl shadow-lg backdrop-blur-md hover:hover:bg-[rgba(109,87,14,0.49)]
                    hover:scale-105 transition-all duration-300 ease-out"
                >
                  UNLIMITED STARDUST
                </button>
              </div>
            </div>
          </div>

          {/* WE HAVE A GUEST */}
          <div className="flex items-center justify-center lg:items-end lg:justify-end">
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-chakra">WE HAVE A GUEST</h2>
              <button
                className="px-6 py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-base font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                UNLIMITED STARDUST
              </button>
            </div>
          </div>

          
          {/* COMPLETE MLTIPLE */}
          <div className="flex items-center justify-center lg:items-start lg:justify-start">
            <div className="bg-[linear-gradient(203.64deg,rgba(24,24,24,0.5)_9.95%,rgba(0,74,173,0.5)_50.53%,rgba(25,24,24,0.5)_90.05%)]
                text-white p-6 md:p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg
                transform hover:-translate-y-2
                transition-transform duration-300 ease-out w-full max-w-sm text-center"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-chakra">COMPLETE MULTIPLE</h2>
              <button
                className="px-6 py-2 md:px-8 md:py-3 font-chakra bg-[rgba(161,118,214,0.14)]
                  border border-white/30 text-gray-100 text-base font-semibold
                  rounded-xl shadow-lg backdrop-blur-md hover:hover:bg-[rgba(109,87,14,0.49)]
                  hover:scale-105 transition-all duration-300 ease-out"
              >
                UNLIMITED STARDUST
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}