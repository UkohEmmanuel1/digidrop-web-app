"use client";

import React from "react";

const Page = () => {
  return (
    <div
      className="min-h-screen text-foreground flex flex-col"
      style={{
        background:
          "linear-gradient(179.5deg, rgba(59, 31, 131, 0.3) 0.44%, rgba(0, 74, 173, 0.5) 49.67%, rgba(28, 28, 28, 0.75) 99.57%)",
      }}
    >
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16 pt-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">Our Whitepaper</h1>
          <p className="text-xl text-gray-200">
            Tokenizing Engagement & Marketing in the Web3 Era
          </p>
        </div>

        {/* Abstract */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">Abstract</h2>
          <p className="leading-relaxed">
            Digi Drop is a SocialFi universe where participation replaces speculation. Through Soulbound Passes,
            quests, and non-monetary Stardust, Digi Drop creates a shared digital space focused on engagement, creativity,
            and community continuity.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            Web3 does not need more pressure it needs more wonder. Digi Drop reimagines blockchain interaction as
             a journey, where identity is persistent, participation is visible, and exploration is the reward.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            2. Problem Statement
          </h2>
          <div className="space-y-3">
            {[
              'Current Web3 ecosystems struggle with:',
              'Speculation-driven engagement',
              'Short-term user cycles',
              'Regulatory friction tied to financial framing',
              'Disconnected community experiences'
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl mb-6 text-white">
            3. The Digidrop Solution
          </h2>
          <p className="mb-4">
           Digi Drop introduces:
          </p>
          <div className="space-y-3">
            {[
              "Soulbound Passes as access keys",
              "Stardust as non-financial participation markers",
              "Quests as social gravity",
              "No trading. No yield. Just movement.",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          
        </section>

        {/* How It Works */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            4. How It Works
          </h2>
          <div className="space-y-3">
            <p>1. Connect a wallet</p>

            <p>2. Mint a Digi Drop Pass</p>

            <p>3. Enter the dashboard</p>

            <p>4. Complete quests and collaborations </p>

            <p>5. Accumulate Stardust and recognition</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            5. Key Features
          </h2>
          {[
            ["Pass-gated dashboard access"],
            ["Quest-driven SocialFi mechanics"],
            ["Rank-based exploration paths"],
            ["Anti-abuse and fairness controls"],
          ].map(([title, desc], i) => (
            <div key={i} className="flex items-start space-x-3 mb-3">
              <span className="block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
              <p>{title}</p>
            </div>
          ))}
        </section>

        {/* Tokenomics */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            6. Tokenomics (Non-Financial)
          </h2>
          <div className="rounded-lgbackdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              
              {[
                ["Digi Drop does not operate an investment token"],
                ["Stardust has no market value"],
                ["No transferability"],
                ["No resale"],
                ["No profit expectations"],
              ].map(([a, b, c], i) => (
                <React.Fragment key={i}>
                  <div>{a}</div>
                  <div>{b}</div>
                  <div>{c}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">8. Roadmap</h2>
          <div className=" rounded-lg p-6 backdrop-blur-sm ">
            

            {[
              ["Phase I: Launch & Pass minting"],
              ["Phase II: Quest universe expansion"], 
              ["Phase III: Creator & community constellations"],
              ["Phase IV: Optional non-financial governance layers"],
            ].map(([phase], i) => (
              <div
                key={i}
                className=""
              >
                 <span className="block w-2 h-2 mt-2"></span>
                <p>{phase}</p>
                
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
