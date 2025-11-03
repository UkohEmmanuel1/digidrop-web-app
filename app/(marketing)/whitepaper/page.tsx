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
            Digidrop is a Web3 SociaFi platform designed to transform how
            marketing and engagement are incentivized. Currently in beta,
            Digidrop enables users to earn rewards in crypto for liking,
            sharing, and engaging with promotional content, by aligning user
            participation with transparent, on-chain rewards. Digidrop offers
            brands more authentic reach while empowering users to monetize their
            social media activity.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            In the Web2 landscape, users drive attention—but only platforms and
            advertisers benefit financially. Digidrop introduces a new model
            where engagement is paid, provable, and fair exchange. Brands get
            exposure, users get rewarded, and communities grow stronger.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            2. Problem Statement
          </h2>
          <div className="space-y-3">
            {[
              "No Incentives for Engagement: Social media users create value but receive no compensation.",
              "Lack of Transparency: Influencer and ad metrics are often unverifiable or inflated.",
              "Inefficient Marketing Spend: Brands waste budget on low-quality engagement.",
              "Data Silos: Users' attention and activity are locked in centralized platforms.",
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
          <h2 className="text-3xl font-bold mb-6 text-white">
            3. The Digidrop Solution
          </h2>
          <p className="mb-4">
            Digidrop flips the model by allowing:
          </p>
          <div className="space-y-3">
            {[
              "Marketers to create engagement-driven campaigns.",
              "Users to earn crypto for authentic likes, shares, and participation.",
              "Communities to amplify messages and grow through incentive alignment.",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            All activity is logged on-chain, making engagement measurable,
            provable, and valuable.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            4. How It Works
          </h2>
          <div className="space-y-3">
            <p>
              <strong className="text-white">1. Brands Launch Campaigns:</strong>{" "}
              Set goals (likes, shares, follows)
            </p>
            <p>
              <strong className="text-white">2. Users Participate:</strong> Like,
              repost, or comment on eligible content
            </p>
            <p>
              <strong className="text-white">
                3. Smart Contracts Verify Actions:
              </strong>{" "}
              On-chain validation through oracles or integrations
            </p>
            <p>
              <strong className="text-white">4. Rewards Are Distributed:</strong>{" "}
              Users earn $DIGI tokens or campaign-specific rewards
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            5. Key Features
          </h2>
          {[
            ["Engage-to-Earn Model", "Crypto rewards for real user activity"],
            ["Marketing Campaign Engine", "Self-serve dashboard for brands"],
            ["Social Verification", "Proof-of-engagement validation"],
            ["Reputation Tracking", "Profiles based on activity and reliability"],
            ["Anti-Sybil System", "Protection against bots or fake engagement"],
          ].map(([title, desc], i) => (
            <div key={i} className="flex items-start space-x-3 mb-3">
              <span className="block w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
              <p>
                <strong className="text-white">{title}:</strong> {desc}
              </p>
            </div>
          ))}
        </section>

        {/* Tokenomics */}
        <section className="mb-12 text-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-white">
            6. Tokenomics (Initial Concept)
          </h2>
          <div className="bg-black/40 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="font-semibold text-white">Allocation</div>
              <div className="font-semibold text-white">%</div>
              <div className="font-semibold text-white">Purpose</div>

              {[
                ["User Reward", "40%", "Engage-to-earn incentives"],
                ["Marketing", "20%", "Brand onboarding campaigns"],
                ["Dev Team", "15%", "Core development"],
                ["Advisor & Ops", "10%", "Strategic support"],
                ["DAO Treasury", "15%", "Governance, grants, reserves"],
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
          <div className="bg-black/40 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 font-semibold text-white">
              <div>Phase</div>
              <div>Goals</div>
              <div>Timeline</div>
            </div>

            {[
              ["Beta Phase", "Core app live, basic campaign engine", "Now"],
              ["Q1 2025", "Token launch, rewards dashboard with first layer", "Planned"],
              ["Q2 2025", "Brand onboarding, DAO MVP", "Planned"],
              ["Q3 2025", "Cross-chain support, full DAO governance", "Planned"],
            ].map(([phase, goal, time], i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-700 last:border-0"
              >
                <div>{phase}</div>
                <div>{goal}</div>
                <div>{time}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
