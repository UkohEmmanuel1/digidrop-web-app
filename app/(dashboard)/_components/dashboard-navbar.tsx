"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, CircleUser, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useUserStore } from "@/store/useUserProfile"
import { useProfileStats } from "@/hooks/useGetProfileStats"

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/referrals", label: "Referrals" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms-and-condition", label: "How to Play", highlight: true },
]

const DashboardNavbar = () => {
  const profile = useUserStore((state) => state.profile)
  const { data: api_data, isLoading } = useProfileStats()

  return (
    <header className="w-full bg-[#0B0B0B]">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets_icon/25.png"
            alt="logo"
            height={50}
            width={50}
          />

          <div className="hidden h-6 w-px bg-white md:block" />

          <CircleUser size={28} className="text-[#CB6CE6]" />

          {/* Wallet (hide on very small screens) */}
          <div className="hidden items-center gap-2 sm:flex">
            <Copy size={18} className="text-white" />
            <p className="max-w-[140px] truncate text-sm text-gray-200">
              {profile?.wallet_addr}
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 font-chakra text-sm uppercase text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight ? "text-[#CB6CE6]" : "hover:text-gray-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" className="border-white text-gray-500">
            Beta
          </Button>

          <div className="h-6 w-px bg-white" />

          {!isLoading && (
            <>
              <p className="text-gray-200">
                {api_data?.highest_point}
              </p>
              <Image
                src="/assets_icon/25.png"
                alt="rank"
                width={30}
                height={30}
              />
              <p className="text-gray-200">
                {api_data?.point}
              </p>
            </>
          )}
        </div>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#0B0B0B] text-white">
            <div className="flex flex-col gap-6 pt-6">

              {/* Wallet */}
              <div className="flex items-center gap-2 border-b border-gray-700 pb-4">
                <CircleUser size={24} className="text-[#CB6CE6]" />
                <p className="truncate text-sm">
                  {profile?.wallet_addr}
                </p>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-4 font-chakra uppercase">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      link.highlight
                        ? "text-[#CB6CE6]"
                        : "hover:text-gray-300"
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Stats */}
              {!isLoading && (
                <div className="mt-6 flex items-center gap-4 border-t border-gray-700 pt-4">
                  <p>{api_data?.highest_point}</p>
                  <Image
                    src="/assets/star.png"
                    alt="rank"
                    width={22}
                    height={22}
                  />
                  <p>{api_data?.point}</p>
                </div>
              )}

              <Button variant="outline" className="mt-4 text-gray-500 border-white">
                Beta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default DashboardNavbar
