"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import BenefitSection from "./benefit-section"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
})

const ServiceSection = () => {
  const steps = [
    {
      id: 1,
      icon: "/assets_icon/4.png",
      title: "Signal",
      topic: "(Awaken Your Comms)",
      text: "Connect your wallet (Metamask, Trust Wallet) and switch your network to BNB Smart Chain (BEP20).",
      delay: 0.2
    },
    {
      id: 2,
      icon: "/assets_icon/15.png",
      title: "Supply",
      topic: "(Select Your Engine)",
      text: "Choose your speed. Mint a Black (1x), White (2x), or Gold (4x) Passport.",
      delay: 0.35
    },
    {
      id: 3,
      icon: "/assets_icon/9.png",
      title: "Action ",
      topic: "(Embark on Quests)",
      text: "Dive into captivating challenges that spark creativity and community spirit.",
      delay: 0.5
    },
    {
      id: 4,
      icon: "/assets_icon/10.png",
      title: "Ascension",
      topic: " (Rise in Rank)",
      text: "Complete quests and witness your Stardust shine among the brightest explorers.",
      delay: 0.65
    },
  ]

  return (
    <section className="w-full bg-[#1C1C1C]/90 bg-[url('/assets/pattern-bg.png')] bg-cover bg-center bg-blend-multiply">
       
      {/* ===== HOW TO PLAY ===== */}
      <div className="mx-auto w-fit px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 py-28">
        <motion.h2
          {...fadeUp(0.1)}
          className="mb-16 text-2xl sm:text-3xl md:text-4xl font-bold uppercase font-chakra text-white"
        >
          How to Play
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              {...fadeUp(step.delay)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="
                flex flex-col items-center text-center
                rounded-2xl
                border border-white/15
                hover:border-gray-400
                hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
                bg-[#1C1C1C]
                p-8
                transition-all duration-300
              "
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={150}
                height={150}
                className="mb-4"
              />

              <p className="mb-0 text-lg font-semibold font-chakra text-white">
                {step.id}. {step.title}
              </p>
              <p className="mb-3 text-lg font-semibold font-chakra text-white"> {step.topic}</p>

              <p className="text-sm leading-relaxed text-gray-300 font-chakra">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== BENEFITS ===== */}
      <BenefitSection />
    </section>
  )
}

export default ServiceSection
