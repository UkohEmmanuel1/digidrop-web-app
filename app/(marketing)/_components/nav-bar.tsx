"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);
  const [isHowToPlayDialogOpen, setIsHowToPlayDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <div className="w-full py-4 sticky top-0 z-40 bg-[#0B0B0B] text-gray-200">
        <div className="container mx-auto font-chakra flex justify-between items-center px-4">
          {/* Logo + Desktop Links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets_icon/25.png"
                alt="Digi Drop Logo"
                width={80}
                height={80}
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 font-medium">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                onClick={() => setIsHowToPlayDialogOpen(true)}
              >
                How to Play
              </button>
              <Link href="#FAQs">FAQ</Link>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-6">
            <Button
              className="border border-purple-400"
              onClick={() => setIsBetaDialogOpen(true)}
            >
              Beta
            </Button>
            <Button
              asChild
              className="rounded-lg px-6 py-2 bg-gray-900 border border-purple-400"
            >
              <Link href="/login">Connect Wellet</Link>
            </Button>
          </div>

          {/* Mobile Sign In + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="rounded-lg px-4 py-1 bg-gray-900 border border-purple-400"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[64px] left-0 w-full bg-[#24222288] z-30 border-b border-gray-800 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 items-end text-right">
              <button
                className="text-gray-200 hover:text-white"
                onClick={() => {
                  setIsHowToPlayDialogOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                How to Play
              </button>
              <Link
                href="#FAQs"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button
                className="border border-purple-400 w-auto px-4 py-1"
                onClick={() => {
                  setIsBetaDialogOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Beta
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beta Dialog */}
      <AnimatePresence>
        {isBetaDialogOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBetaDialogOpen(false)}
          >
            <motion.div
              className="bg-[rgba(24,24,24,0.95)] text-white scroll-smooth rounded-lg p-6 w-full max-w-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-['Chakra_Petch'] font-bold text-[16px] leading-[24px] text-center text-gray-300 mb-4">
                Beta Horizon 
                <span className="text-purple-400 block">Pioneer the Unknown.</span>
              </h2>
              <p
                className="text-gray-300 font-chakra whitespace-pre-line"
                style={{
                  fontFamily: "Chakra Petch",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                {`You are among the first to gaze upon this evolving galaxy. As beta voyagers, your discoveries refine the stars. Launch Bonus: Mint your Passport today to lock in your Stardust Multiplier before the galaxy expands.`}
              </p>
              <div className="flex justify-end mt-6">
                <button
                  className="px-4 py-2 bg-purple-400 rounded hover:bg-purple-600"
                  onClick={() => setIsBetaDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How to Play Dialog */}
      <AnimatePresence>
        {isHowToPlayDialogOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsHowToPlayDialogOpen(false)}
          >
            <motion.div
              className="bg-[rgba(24,24,24,0.95)] text-white scroll-smooth rounded-lg p-6 w-full max-w-lg shadow-lg max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
             {/* Heading */}
<div className="text-center mb-6">
  <h1 className="text-xl sm:text-2xl md:text-2xl font-extrabold bg-purple-600 bg-clip-text text-transparent">
    <span className="block">Welcome to Digiverse</span>
  </h1>

  {/* Chart Your Course Intro */}
  <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-2xl mx-auto">
    <span className="font-semibold text-gray-200 block mb-1">
      Chart Your Course
    </span>
    Your odyssey begins with a single spark. Follow this celestial path to
    enter the Digi Drop ecosystem.
  </p>
</div>


{/* Steps Section */}
<div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-5 max-w-3xl mx-auto mb-10">
  <p>
    <strong>Step 1: Signal (Awaken Your Comms)</strong><br />
    Connect your wallet (Metamask or Trust Wallet) and switch your network to
    BNB Smart Chain (BEP20).
  </p>

  <p>
    <strong>Step 2: Supply (Select Your Engine)</strong><br />
    Choose your speed. Mint a Void (1x), Starlight (2x), or Solar (4x) Passport.
    Higher tiers gather Stardust faster.
  </p>

  <p>
    <strong>Step 3: Action (Embark on Quests)</strong><br />
    Dive into captivating challenges that spark creativity and community
    spirit.
  </p>

  <p>
    <strong>Step 4: Ascension (Rise in Rank)</strong><br />
    Watch your Stardust shine among the brightest explorers in the universe.
  </p>

  <p>
    <strong>Step 5: Expansion (Summon Allies)</strong><br />
    Share your referral beacon to guide others, weaving a richer tapestry of
    shared discovery.
  </p>
</div>



              {/* Close Button */}
              <div className="flex justify-end mt-6">
                <button
                  className="px-4 py-2 bg-purple-400 rounded hover:bg-purple-600"
                  onClick={() => setIsHowToPlayDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
