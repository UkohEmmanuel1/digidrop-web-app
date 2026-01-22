"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
// 1. Import the font directly from Google Fonts
import { Chakra_Petch } from "next/font/google"

// 2. Configure the font settings
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// --- TYPES ---
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  children: React.ReactNode
  maxWidth?: string
}

interface StepItemProps {
  number: string
  title: string
  desc: string
}

// --- MAIN COMPONENT ---
const Navbar: React.FC = () => {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false)
  const [isHowToPlayDialogOpen, setIsHowToPlayDialogOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock body scroll when mobile menu or modals are open
  useEffect(() => {
    const shouldLock = isMenuOpen || isBetaDialogOpen || isHowToPlayDialogOpen
    document.body.style.overflow = shouldLock ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen, isBetaDialogOpen, isHowToPlayDialogOpen])

  return (
    // 3. Apply the font class to the wrapper. Everything inside inherits it.
    <div className={chakra.className}>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 h-16 w-full border-b border-white/10 bg-[#0B0B0B]/90 text-gray-200 backdrop-blur-md">
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Logo Fix: Constrain height to header, let width auto-adjust */}
              <div className="relative h-12 w-12 md:h-24 md:w-24">
                <Image
                  src="/assets/logo.png"
                  alt="Digi Drop Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 48px, 56px"
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden items-center gap-6 font-medium md:flex">
              <button
                onClick={() => setIsHowToPlayDialogOpen(true)}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-opacity hover:opacity-80"
              >
                How to Play
              </button>
              <Link
                href="#FAQs"
                className="transition-colors hover:text-purple-400"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              variant="outline"
              className="border-purple-500/50 bg-transparent text-gray-200 hover:bg-purple-900/20 hover:text-white"
              onClick={() => setIsBetaDialogOpen(true)}
            >
              Beta
            </Button>
            <Button
              asChild
              className="bg-purple-500/50 text-white hover:bg-purple-500/70"
            >
              <Link href="/login">Login with Wallet</Link>
            </Button>
          </div>

          {/* Mobile Actions + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              asChild
              size="sm"
              className="h-8 border border-purple-500 bg-gray-900 text-xs text-white hover:bg-gray-800"
            >
              <Link href="/login">Login</Link>
            </Button>

            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-md p-1 text-gray-200 hover:bg-gray-800 active:scale-95"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 right-0 top-16 z-40 overflow-hidden rounded-b-2xl border-b border-white/10 bg-black/95 backdrop-blur-sm md:hidden"
          >
            <div className="container mx-auto flex flex-col items-end gap-4 p-4">
              <button
                className="w-full text-right text-xl font-medium text-gray-100 hover:text-purple-400"
                onClick={() => {
                  setIsHowToPlayDialogOpen(true)
                  setIsMenuOpen(false)
                }}
              >
                How to Play
              </button>

              <Link
                href="#FAQs"
                className="w-full text-right text-xl font-medium text-gray-100 hover:text-purple-400"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>

              <div className="flex w-full justify-end pt-2">
                <Button
                  className="w-full max-w-[150px] border border-purple-500 bg-transparent text-lg hover:bg-purple-900/20"
                  onClick={() => {
                    setIsBetaDialogOpen(true)
                    setIsMenuOpen(false)
                  }}
                >
                  Beta
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== BETA DIALOG ===== */}
      <Modal 
        isOpen={isBetaDialogOpen} 
        onClose={() => setIsBetaDialogOpen(false)}
      >
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold uppercase text-white">
            Beta Horizon
          </h2>
          <p className="mb-6 text-lg text-purple-400">Pioneer the Unknown</p>
          
          <p className="mb-8 text-sm leading-relaxed text-gray-300">
            You are among the first to gaze upon this evolving galaxy. As beta
            voyagers, your discoveries refine the stars. Launch Bonus: Mint
            your Passport today to lock in your Stardust Multiplier before
            the galaxy expands.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={() => setIsBetaDialogOpen(false)}
              className="bg-purple-600 hover:bg-purple-500"
            >
              Close 
            </Button>
          </div>
        </div>
      </Modal>

      {/* ===== HOW TO PLAY DIALOG ===== */}
      <Modal
        isOpen={isHowToPlayDialogOpen}
        onClose={() => setIsHowToPlayDialogOpen(false)}
        maxWidth="max-w-xl"
        title={
          <div className="border-b border-white/10 bg-[#181818] px-6 py-5 text-center">
            <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold uppercase text-transparent">
              Welcome to Digiverse
            </h2>
          </div>
        }
      >
        <div className="flex max-h-[70vh] flex-col">
          <div className="overflow-y-auto p-6">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Chart Your Course</h3>
              <p className="mx-auto max-w-md text-sm text-gray-400">
                Your odyssey begins with a single spark. Follow this
                celestial path to enter the ecosystem.
              </p>
            </div>

            <div className="space-y-6">
              <StepItem
                number="1"
                title="Signal (Awaken Your Comms)"
                desc="Connect your wallet (Metamask, Trust Wallet) and switch your network to BNB Smart Chain (BEP20)."
              />
              <StepItem
                number="2"
                title="Supply (Select Your Engine)"
                desc="Choose your speed. Mint a Black (1x), White (2x), or Gold (4x) Passport. Higher tiers gather Stardust faster."
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

          <div className="border-t border-white/10 bg-[#181818] px-6 py-4 text-right">
            <Button
              onClick={() => setIsHowToPlayDialogOpen(false)}
              className="bg-purple-600 hover:bg-purple-500"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

// --- REUSABLE SUB-COMPONENTS (Keep file clean) ---

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, maxWidth = "max-w-lg" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full ${maxWidth} overflow-hidden rounded-xl border border-white/10 bg-[#181818] shadow-2xl`}
          >
            {title}
            {/* If no specific title wrapper is provided, padding is handled by children or inner divs */}
            <div className={!title ? "p-8" : ""}>
               {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const StepItem: React.FC<StepItemProps> = ({ number, title, desc }) => (
  <div className="flex gap-4">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-900/40 text-sm font-bold text-purple-300">
      {number}
    </span>
    <div>
      <h4 className="mb-1 text-base font-bold text-gray-100">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
    </div>
  </div>
)

export default Navbar