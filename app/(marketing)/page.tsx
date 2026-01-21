"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

// Component Imports
import Circular from "./_components/Circular"
import ServiceSection from "./_components/service-section"
import BrandSupport from "./_components/brand-section"
import FAQ from "./_components/faq-section"
import LogoMark from "./_components/logo-mark"

// Animation Variants (Extracted for cleaner JSX)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-chakra">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(179.5deg,rgba(59,31,131,0.3)_0.44%,rgba(0,74,173,0.5)_49.67%,rgba(28,28,28,0.75)_99.57%)] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
          
          {/* Subheading */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-4 text-lg font-semibold text-blue-500 sm:text-xl"
          >
            Season 1
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-2 text-4xl font-bold leading-tight text-transparent transition-opacity hover:opacity-80 sm:text-5xl md:text-6xl md:leading-[1.1]"
          >
            Discover the Infinite Cosmos of Web3
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-gray-200 sm:text-lg"
          >
            Step into a boundless galaxy where curiosity leads the way. Mint your
            unique Soulbound Passport on the BNB Chain, embark on captivating
            quests, and gather Stardust to illuminate your legacy.
          </motion.p>

          {/* Pass Images Grid (3 Columns on All Devices) */}
          <div className="mt-12 grid w-full grid-cols-3 items-end justify-items-center gap-2 sm:gap-6 md:mt-16 md:gap-10">
            
            {/* Left Card (Black) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <Image
                src="/assets_icon/00.png"
                alt="Black Passport"
                width={294}
                height={260}
                className="h-auto w-full max-w-[120px] object-contain sm:max-w-[200px] md:max-w-[294px]"
              />
            </motion.div>

            {/* Middle Card (Golden) - Center Stage */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              className="relative z-10 flex w-full justify-center scale-110 md:scale-100 md:-mt-16 lg:-mt-24"
            >
              <Image
                src="/assets_icon/02.png"
                alt="Gold Passport"
                width={460}
                height={400}
                priority // Prioritize loading the hero image
                className="h-auto w-full max-w-[150px] drop-shadow-[0_0_20px_rgba(192,132,252,0.6)] sm:max-w-[280px] md:drop-shadow-[0_0_35px_rgba(192,132,252,0.8)] lg:max-w-[460px]"
              />
            </motion.div>

            {/* Right Card (White) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <Image
                src="/assets_icon/01.png"
                alt="White Passport"
                width={294}
                height={260}
                className="h-auto w-full max-w-[120px] object-contain sm:max-w-[200px] md:max-w-[294px]"
              />
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 1 }}
            className="mt-12 md:mt-16"
          >
            <Button
              asChild
              className="h-auto rounded-xl border-2 border-purple-400 bg-gray-900 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-105 hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] sm:px-10 sm:py-4 sm:text-lg"
            >
              <Link href="/login">Login with Wallet</Link>
            </Button>
          </motion.div>

          
          <div className="mt-12 space-y-2 text-center text-gray-300">
            <h2 className="text-lg font-medium sm:text-xl">Start your Journey now</h2>
            <p className="text-sm sm:text-base opacity-80">Powered by BNB Smart Chain</p>
          </div>
        </div>
      </section>

      {/* ===== OTHER SECTIONS ===== */}
      <Circular />
      <ServiceSection />
      <BrandSupport />
      <FAQ />
      <LogoMark />
    </main>
  )}