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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Navbar always visible */}
      <div className="w-full py-4 sticky top-0 z-40 bg-[#0B0B0B] text-gray-200">
        <div className="container mx-auto font-chakra flex justify-between items-center px-4">
          {/* Logo + Desktop Links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Digi Drop Logo"
                width={54}
                height={48}
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 font-medium">
              <Link
                href="/how-to-play"
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                How to Play
              </Link>
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
              <Link href="/login">Sign In</Link>
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
            // put behind navbar but above page content
            className="fixed top-[64px] left-0 w-full bg-[#0B0B0B] z-30 border-b border-gray-800 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 items-end text-right">
              <Link
                href="/how-to-play"
                className="text-gray-200 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                How to Play
              </Link>
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
            onClick={() => {
              setIsBetaDialogOpen(false);
              router.push("/");
            }}
          >
            <motion.div
              className="bg-black rounded-lg p-6 w-full max-w-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dialog content */}
              <h2 className="text-xl sm:text-2xl mb-4 leading-snug font-bold font-chakra text-center text-gray-300">
                WELCOME TO DIGIVERSE <br />
                <span className="text-purple-400 block">This is BETA</span>
              </h2>
              <p className="text-sm sm:text-md text-gray-300 font-chakra whitespace-pre-line leading-relaxed">
                {`1. The Black pass is a Social FI platform accessible through a free soulbound NET, minable at the time of joining. On this platform, you'll undertake social quests and farm points to earn the DDR token airdrop, the official token of the DIGIDROP ecosystem. It all begins with Season1!, centred around DIGIDROP's upcoming game demo.`}
              </p>
              <div className="flex justify-end mt-6">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => {
                    setIsBetaDialogOpen(false);
                    router.push("/");
                  }}
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
