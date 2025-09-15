"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full py-4 sticky top-0 z-10 h-full md:h-14 text-gray-200 bg-[#0B0B0B]">
        <div className="container mx-auto font-chakra flex flex-col md:flex-row justify-between items-center h-full">
          <div className="flex gap-4">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  alt="Digi Drop Logo"
                  width={54}
                  height={48}
                />
              </Link>
            </div>

            <div className="hidden md:flex gap-6 font-medium items-center">
              <Link
                href={"/how-to-play"}
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                How to Play
              </Link>
              <Link href={"/faq"}>FAQ</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {/* Beta Button triggers dialog */}
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
              <Link href={"/login"}>Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Beta Dialog */}
      <AnimatePresence>
        {isBetaDialogOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black rounded-lg p-6 w-full max-w-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-xl sm:text-2xl mb-4 leading-snug font-bold font-chakra text-center max-w-2xl text-balance py-4 text-gray-300">
                WELCOME TO DIGIVERSE <br />
                <span className="text-purple-400 block">This is BETA</span>
              </h2>

              <p className="text-sm sm:text-md text-gray-300 front-chakra whitespace-pre-line leading-relaxed">
                {`1. The Black pass is a Social FI platform accessible through a free soulbound NET, minable at the time of joining. On this platform, you'll undertake social quests and farm points to earn the DDR token airdrop, the official token of the DIGIDROP ecosystem. It all begins with Season1!, centred around DIGIDROP's upcoming game demo.`}
              </p>
              <div className="flex justify-end mt-6">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setIsBetaDialogOpen(false)}
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
