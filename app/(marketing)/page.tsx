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
import Footer from "@/components/common/footer";

const tasks = [
  { msg: "Daily Login", reward: "$200" },
  { msg: "Perform a task", reward: "#500" },
  { msg: "Invite a friend", reward: "$100" },
];


export default function Home() {
  return (
    <>
      {" "}
      <section className="h-full w-full bg-[linear-gradient(to_bottom,#3B1F83_30%,#004AAD_75%,#1C1C1C_100%)] px-4 sm:px-8">
        <div className="flex flex-col justify-center mb-10 items-center gap-6 text-center">
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
          <div
            className="w-full mt-10 py-4 grid grid-cols-3 justify-items-center items-center
 justify-center"
          >
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
          >
            <Button className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-purple-400 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-xl font-medium transition-transform duration-300 hover:scale-105">
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

        {/*TEST*/}

      </section>
      <ServiceSection />
      <BrandSupport />
      <FAQ />
      <LogoMark />
      <Footer />
    </>
  );
}
