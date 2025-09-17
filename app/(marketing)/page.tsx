"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import InfoBox from "./_components/info-box";
import ServiceSection from "./_components/service-section";
import BenefitSection from "./_components/benefit-section";
import BrandSupport from "./_components/brand-section";
import FAQ from "./_components/faq-section";
import LogoMark from "./_components/logo-mark";

export default function Home() {
  return (
    <>
      {" "}
      <section className="h-full w-full bg-[linear-gradient(to_bottom,#3B1F83_30%,#004AAD_50%,#1C1C1C_75%)] px-4 sm:px-8">
        <div className="flex flex-col justify-center mb-10 items-center gap-2 text-center">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl mt-6 leading-tight md:leading-[90px] font-bold font-chakra text-white text-center max-w-3xl text-balance py-4"
          >
            DIGI DROP REWARD AND LOYALTY PROGRAM
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-blue-500 font-semibold font-chakra"
          >
            Season 1
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white font-normal font-chakra leading-7 max-w-2xl"
          >
            <span className="font-semibold text-purple-500">DIGI DROP</span> is
            a SocialFI platform accessible through a unique SBT NFT, mintable at
            the time of joining.
          </motion.p>

          {/* Pass Images */}
          <div className="w-full mt-10 py-4 grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/black.png"
                alt="black-pass"
                width={294}
                height={260}
                className="object-cover mt-4"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/gold.png"
                alt="gold-pass"
                width={362}
                height={320}
                className="mt-4 md:-mt-20"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/white.png"
                alt="white-pass"
                width={294}
                height={260}
                className="mt-4"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button
              className="
      px-10 sm:px-14 py-3 sm:py-4
      bg-gray-800 border-2 border-purple-400
      text-white font-semibold tracking-wide rounded-xl
      shadow-lg shadow-purple-400/30
      transition-all duration-300 ease-out
      hover:bg-gray-700 hover:scale-105 hover:shadow-purple-400/50
      focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
    "
            >
              Sign In with X
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="w-full relative min-h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Circular Motion Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [0, -20, -40, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-16 sm:-top-24 left-4 sm:left-16 z-0"
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

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative container flex flex-col md:flex-row items-center justify-center p-6 md:p-12 max-w-6xl min-h-screen mx-auto z-10"
        >
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <InfoBox msg="Invite a friend" />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-wrap gap-6 md:gap-12 px-6 md:px-12 lg:px-20 py-8 md:py-16 items-center justify-center md:justify-start"
          >
            {["Daily Login", "Perform a task", "Invite a friend"].map(
              (msg, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <InfoBox msg={msg} />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      {/*Test*/}
       <div className="w-full relative min-h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Astronaut */}
      <Image
        src="/assets/sky-2.png"
        alt="Astronaut and UFO"
        width={800}
        height={600}
        className="absolute"
      />

      {/* Daily Login */}
      <div className="w-full md:w-1/2 flex flex-wrap gap-6 md:gap-12 px-6 md:px-12 lg:px-20 py-8 md:py-16 items-center justify-center md:justify-start">
        <p className="text-white font-semibold">DAILY LOGIN</p>
        <button className="mt-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          20 POINT
        </button>
      </div>

      {/* Mint a Golden Pass */}
      <div className="absolute top-28 right-1/3 bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-lg p-4 text-center w-48">
        <p className="text-white font-semibold">MINT A GOLDEN PASS</p>
        <button className="mt-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          GET X5 OF ALL POINTS
        </button>
      </div>

      {/* 30 Points */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-lg p-4 text-center w-32">
        <button className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          30 POINTS
        </button>
      </div>

      {/* We Have a Guest */}
      <div className="absolute top-40 right-10 bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-lg p-4 text-center w-40">
        <p className="text-white font-semibold">WE HAVE A GUEST</p>
        <button className="mt-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          5 POINTS
        </button>
      </div>
    </div>
      <ServiceSection />
      <BrandSupport />F
      <FAQ />
      <LogoMark />
    </>
  );
}
