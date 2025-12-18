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
        flex h-full w-full max-w-[280px] flex-col items-center
        rounded-2xl
        border border-white/15
        hover:border-gray-400
        hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
        bg-[#181818]/95
        p-10 text-white
        transition-all duration-300
      "
    >
      <div className="mb-8 flex justify-center">
        {icon}
      </div>

      <div className="flex flex-1 flex-col items-center text-center">
        <h2 className="mb-4 font-chakra text-lg font-bold uppercase leading-snug sm:text-xl">
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
        />
      ),
      heading: "Cosmic Curiosity",
      text:
        "Mint a one of a kind Passport to unlock an ever-expanding universe of interactive quests and collaborative discoveries.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/19.png"
          alt="Gather Stardust"
          width={100}
          height={100}
        />
      ),
      heading: "Gather Stardust",
      text:
        "Engage in inspiring activities to collect Stardust. It is not currency, it is glory. Illuminate your path on the community leaderboard.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/2.png"
          alt="ETernal Bonds"
          width={100}
          height={100}
        />
      ),
      heading: "Eternal Bonds",
      text:
        "Invite fellow travelers to expand the constellation, creating lasting connections and collective adventures across the digital cosmos.",
    },
    {
      icon: (
        <Image
          src="/assets_icon/3.png"
          alt="Loyalty Honors"
          width={100}
          height={100}
        />
      ),
      heading: "Loyalty Honors",
      text:
        "Dedicated explorers receive exquisite digital badges and role upgrades, honoring your enduring role in our shared galactic story.",
    },
  ]

  return (
    <section className="w-full py-28">
      {/* Container */}
      <div className="mx-auto w-fit px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36">
        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mb-20 font-chakra text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl"
        >
          Why Venture Into the Deep?
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
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
