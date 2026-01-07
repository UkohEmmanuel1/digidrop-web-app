"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Fade-up animation helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
})

// Single Card Component
const BCard = ({
  icon,
  heading,
  text,
}: {
  icon: React.ReactNode
  heading: string
  text: string
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className="
        flex flex-col items-center
        h-full w-full 
        /* Mobile: Allow full width up to a sensible max, Desktop: Let grid control width */
        max-w-sm lg:max-w-none
        rounded-2xl
        border border-white/15
        bg-[#181818]/95
        /* Mobile First Padding: smaller on phone (p-6), larger on desktop (p-10) */
        p-6 sm:p-8 lg:p-10 
        text-white
        transition-all duration-300
        hover:border-gray-400
        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
      "
    >
      {/* Icon Container: Adjust margin for mobile/desktop */}
      <div className="mb-6 sm:mb-8 flex justify-center">
        {icon}
      </div>

      <div className="flex flex-1 flex-col items-center text-center">
        <h2 className="mb-3 sm:mb-4 font-chakra text-lg font-bold uppercase leading-snug sm:text-xl">
          {heading}
        </h2>

        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
          {text}
        </p>
      </div>
    </motion.div>
  )
}

// Main Benefit Section
const BenefitSection: React.FC = () => {
  const cards = [
    {
      icon: (
        <Image
          src="/assets_icon/22.png"
          alt="Cosmic Curiosity"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-[100px] sm:h-[100px]" // Responsive image sizing
        />
      ),
      heading: "Cosmic Curiosity",
      text: "Mint a one of a kind Passport to unlock an ever-expanding universe of interactive quests and collaborative discoveries.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/19.png"
          alt="Gather Stardust"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-[100px] sm:h-[100px]"
        />
      ),
      heading: "Gather Stardust",
      text: "Engage in inspiring activities to collect Stardust. It is not currency, it is glory. Illuminate your path on the community leaderboard.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/2.png"
          alt="ETernal Bonds"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-[100px] sm:h-[100px]"
        />
      ),
      heading: "Eternal Bonds",
      text: "Invite fellow travelers to expand the constellation, creating lasting connections and collective adventures across the digital cosmos.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/3.png"
          alt="Loyalty Honors"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-[100px] sm:h-[100px]"
        />
      ),
      heading: "Loyalty Honors",
      text: "Dedicated explorers receive exquisite digital badges and role upgrades, honoring your enduring role in our shared galactic story.",
    },
  ]

  return (
    // Section Padding: py-12 (mobile) -> py-28 (desktop)
    <section className="w-full py-12 md:py-20 lg:py-28">
      {/* Container: standardizes max-width and horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div 
          className="flex justify-center"
          {...fadeUp(0.1)}
        >
          <h1 className="mb-10 sm:mb-16 md:mb-20 font-chakra text-center text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
            Why Venture Into the Deep?
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 place-items-center items-stretch">
          {cards.map((card, index) => (
            <BCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitSection