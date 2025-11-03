"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Circular from "./_components/Circular";
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


      <Circular />

     
      
      <ServiceSection />
      <BrandSupport />
      <FAQ />
      <LogoMark />
    </>)
    }