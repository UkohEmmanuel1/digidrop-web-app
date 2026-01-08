"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);
  const [isHowToPlayDialogOpen, setIsHowToPlayDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMobileNavClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Header */}
      <header className="w-full h-16 sticky top-0 z-50 bg-[#0B0B0B] border-b border-white/10 text-gray-200">
        <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-chakra">
          
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/assets_icon/25.png"
                alt="Digi Drop Logo"
                width={80}
                height={80}
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex gap-6 font-medium">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                onClick={() => setIsHowToPlayDialogOpen(true)}
              >
                How to Play
              </button>
              <Link href="#FAQs" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-4">
            <Button
              className="bg-transparent border border-purple-400 text-gray-200 hover:text-white hover:bg-purple-900/20"
              onClick={() => setIsBetaDialogOpen(true)}
            >
              Beta
            </Button>
            <Button
              asChild
              className="rounded-lg bg-gray-900 border border-purple-400 text-white hover:bg-gray-800"
            >
              <Link href="/login">Login with Wallet</Link>
            </Button>
          </div>

          {/* Mobile Actions + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="rounded-lg bg-gray-900 border border-purple-400 text-xs px-4 text-white hover:bg-gray-800"
            >
              <Link href="/login">Login</Link>
            </Button>

            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 -mr-2 rounded-md active:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/50 md:hidden overflow-y-auto backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 pt-6 pb-12 flex flex-col items-end space-y-8">
              <button
                className="text-xl font-medium text-gray-100 hover:text-purple-400 w-full text-right"
                onClick={() => handleMobileNavClick(() => setIsHowToPlayDialogOpen(true))}
              >
                How to Play
              </button>

              <Link
                href="#FAQs"
                className="text-xl font-medium text-gray-100 hover:text-purple-400 w-full text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>

              {/* Beta Button - Aligned Right */}
              <div className="w-full flex justify-end pt-2">
                <Button
                  className="bg-transparent border border-purple-400 text-gray-200 px-8 text-lg hover:bg-purple-900/20"
                  onClick={() => handleMobileNavClick(() => setIsBetaDialogOpen(true))}
                >
                  Beta
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beta Dialog */}
      <AnimatePresence>
        {isBetaDialogOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[60] p-4"
            onClick={() => setIsBetaDialogOpen(false)}
          >
            <motion.div
              className="w-[95%] sm:w-full max-w-lg bg-[#181818] border border-white/10 text-white rounded-xl shadow-2xl p-6 sm:p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-chakra text-xl font-bold text-center text-gray-200 mb-4">
                Beta Horizon <br />
                <span className="text-purple-400 text-lg">
                  Pioneer the Unknown.
                </span>
              </h2>

              <p className="text-gray-300 font-chakra text-sm sm:text-base leading-relaxed text-center break-words">
                You are among the first to gaze upon this evolving galaxy. As beta
                voyagers, your discoveries refine the stars. Launch Bonus: Mint
                your Passport today to lock in your Stardust Multiplier before
                the galaxy expands.
              </p>

              <div className="flex justify-end w-full mt-8">
                <button
                  className="px-6 py-2 bg-purple-400 rounded hover:bg-purple-600 text-white font-medium transition-colors"
                  onClick={() => setIsBetaDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* How to Play Dialog */}
      <AnimatePresence>
        {isHowToPlayDialogOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[60] p-4"
            onClick={() => setIsHowToPlayDialogOpen(false)}
          >
            <motion.div
              className="w-[95%] sm:w-full max-w-xl bg-[#181818] border border-white/10 text-white rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#181818] z-10 px-6 py-5 border-b border-white/5 text-center shadow-lg">
                <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Welcome to Digiverse
                </h1>
              </div>

              <div className="p-5 space-y-6">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto break-words">
                    <span className="font-semibold text-gray-200 block mb-2">
                      Chart Your Course
                    </span>
                    Your odyssey begins with a single spark. Follow this
                    celestial path to enter the Digi Drop ecosystem.
                  </p>
                </div>

                <div className="space-y-6 text-sm sm:text-base text-gray-300">
                  <StepItem
                    number="1"
                    title="Signal (Awaken Your Comms)"
                    desc="Connect your wallet (Metamask or Trust Wallet) and switch your network to BNB Smart Chain (BEP20)."
                  />
                  <StepItem
                    number="2"
                    title="Supply (Select Your Engine)"
                    desc="Choose your speed. Mint a Void (1x), Starlight (2x), or Solar (4x) Passport. Higher tiers gather Stardust faster."
                  />
                  <StepItem
                    number="3"
                    title="Action (Embark on Quests)"
                    desc="Dive into captivating challenges that spark creativity and community spirit."
                  />
                  <StepItem
                    number="4"
                    title="Ascension (Rise in Rank)"
                    desc="Watch your Stardust shine among the brightest explorers in the universe."
                  />
                  <StepItem
                    number="5"
                    title="Expansion (Summon Allies)"
                    desc="Share your referral beacon to guide others, weaving a richer tapestry of shared discovery."
                  />
                </div>
              </div>

              <div className="sticky bottom-0 px-6 py-4 bg-[#181818] border-t border-white/5 flex justify-end">
                <button
                  className="px-6 py-2 bg-purple-400 rounded hover:bg-purple-600 text-white font-medium transition-colors"
                  onClick={() => setIsHowToPlayDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const StepItem = ({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) => (
  <div className="flex gap-4 items-start">
    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 text-purple-300 font-bold text-sm border border-purple-500/30">
      {number}
    </span>
    <div className="flex-1">
      <strong className="block text-gray-100 mb-1">{title}</strong>
      <p className="leading-relaxed text-gray-400 break-words">{desc}</p>
    </div>
  </div>
);

export default Navbar;