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

// Animation Variants
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
    <main className="flex min-h-screen flex-col font-chakra overflow-x-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full bg-[linear-gradient(179.5deg,rgba(59,31,131,0.3)_0.44%,rgba(0,74,173,0.5)_49.67%,rgba(28,28,28,0.75)_99.57%)] px-4 pb-16 pt-12 sm:px-6 md:pb-24 lg:px-8">
        
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
          
          {/* Subheading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-blue-400 sm:text-base">
              Season 1
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text bg-[200%_auto] py-2 text-4xl font-extrabold leading-[1.15] text-transparent animate-gradient sm:text-5xl md:text-7xl"
          >
            Discover the Infinite <br className="hidden sm:block" /> Cosmos of Web3
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-gray-300 sm:text-lg md:text-xl"
          >
            Step into a boundless galaxy where curiosity leads the way. Mint your
            unique Soulbound Passport on the BNB Chain, embark on captivating
            quests, and gather Stardust to illuminate your legacy.
          </motion.p>

          {/* Pass Images Grid (Mobile First Layout) */}
          <div className="mt-12 grid w-full max-w-5xl grid-cols-3 items-end gap-2 sm:gap-6 md:mt-20 md:gap-8">
            
            {/* Left Card (Black) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-end pb-2 sm:pb-4"
            >
              <Image
                src="/assets_icon/00.png"
                alt="Black Passport"
                width={294}
                height={260}
                className="w-full max-w-[100px] object-contain transition-transform hover:scale-105 sm:max-w-[180px] md:max-w-[260px]"
              />
            </motion.div>

            {/* Middle Card (Golden) - Hero */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              className="relative z-10 flex justify-center -mb-4 md:-mb-12"
            >
              <div className="relative w-full max-w-[140px] sm:max-w-[240px] md:max-w-[380px]">
                {/* Glow Effect behind main card */}
                <div className="absolute inset-0 -z-10 bg-purple-500/30 blur-2xl" />
                <Image
                  src="/assets_icon/02.png"
                  alt="Gold Passport"
                  width={460}
                  height={400}
                  priority
                  className="h-auto w-full drop-shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Card (White) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-start pb-2 sm:pb-4"
            >
              <Image
                src="/assets_icon/01.png"
                alt="White Passport"
                width={294}
                height={260}
                className="w-full max-w-[100px] object-contain transition-transform hover:scale-105 sm:max-w-[180px] md:max-w-[260px]"
              />
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-col items-center gap-6 md:mt-24"
          >
            <Button
              asChild
              className="group relative h-auto overflow-hidden rounded-xl border border-purple-500/50 bg-gray-900/80 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] sm:text-lg"
            >
              <Link href="/login" className="flex items-center gap-2">
                <span>Login with Wallet</span>
              </Link>
            </Button>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-300 sm:text-base">
                Start your Journey now
              </p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Powered by BNB Smart Chain
              </p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* ===== OTHER SECTIONS ===== */}
      <div className="relative z-10 space-y-0 pb-20 sm:space-y-2 md:pt-0">
        <Circular />
        <ServiceSection />
        <BrandSupport />
        <FAQ />
        <LogoMark />
      </div>
    </main>
  )
}