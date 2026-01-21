"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FaLink, 
  FaCheck, 
  FaWhatsapp, 
  FaFacebookF, 
  FaTelegram, 
  FaXTwitter 
} from "react-icons/fa6"; 
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  
  // In production, this would likely come from user props or a store
  const referralLink = "https://digidrops.xyz/ref/user123";

  const socialButtons = [
    { name: "WhatsApp", hex: "#25D366", icon: FaWhatsapp, id: "whatsapp" },
    { name: "Facebook", hex: "#1877F2", icon: FaFacebookF, id: "facebook" },
    { name: "Telegram", hex: "#229ED9", icon: FaTelegram, id: "telegram" },
    { name: "X", hex: "#FFFFFF", icon: FaXTwitter, id: "x" },
  ];

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const shareReferral = (platform: string) => {
    // Updated text to match Digi Drop context
    const text = encodeURIComponent(`Join me on Digi Drop and earn Stardust! ${referralLink}`);
    
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${text}`,
      x: `https://twitter.com/intent/tweet?text=${text}`,
    };
    
    if (urls[platform]) window.open(urls[platform], "_blank", "noreferrer");
  };

  return (
    <section className="relative w-full bg-[url('/assets_icon/background.png')] bg-cover bg-center bg-no-repeat py-12 md:py-20 lg:py-24">
      {/* Optional: Dark overlay to ensure text readability if background is bright */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center space-y-8 lg:items-start">
            
            {/* Heading Text */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="font-chakra text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl text-balance">
                REFER & GET STARDUST
              </h1>
              <p className="font-chakra text-lg text-gray-200 sm:text-xl max-w-lg mx-auto lg:mx-0 text-balance">
                Share your referral link with friends & get 200 Stardust for every recruit.
              </p>
            </div>

            {/* Copy Link Component */}
            <div className="flex w-full max-w-lg items-stretch overflow-hidden rounded-lg border border-white/20 bg-black/30 backdrop-blur-sm transition-colors hover:border-white/40">
              {/* Input Area */}
              <div className="flex min-w-0 flex-1 items-center px-4 py-3">
                <span className="truncate font-mono text-sm text-gray-300">
                  {referralLink}
                </span>
              </div>

              {/* Copy Button */}
              <Button
                type="button"
                onClick={handleCopy}
                className={cn(
                  "h-auto rounded-none px-6 py-3 font-semibold text-white transition-all sm:px-8",
                  copied 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-[#A176D6] hover:bg-[#8e61c7]"
                )}
              >
                {copied ? <FaCheck className="mr-2 h-4 w-4" /> : <FaLink className="mr-2 h-4 w-4" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>

            {/* Social Share Section */}
            <div className="flex w-full flex-col items-center space-y-4 lg:items-start">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Share link through
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {socialButtons.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <Button
                      key={social.id}
                      type="button"
                      size="icon"
                      aria-label={`Share on ${social.name}`}
                      onClick={() => shareReferral(social.id)}
                      className="h-12 w-12 rounded-xl bg-[#A176D6] transition-transform hover:-translate-y-1 hover:bg-[#8e61c7] hover:shadow-lg"
                    >
                      <SocialIcon 
                        className="h-6 w-6" 
                        style={{ color: social.hex }} 
                      />
                    </Button>
                  );
                })}
              </div>
              
              <div className="mt-4 rounded-full bg-white/5 px-4 py-1 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 sm:text-xs">
                  🚀 No cap! Earn as much Stardust as possible
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          {/* Hidden on mobile to prioritize content, visible on large screens */}
          <div className="hidden justify-center lg:flex">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-purple-500/20">
              <Image
                src="/assets_icon/Mask.png"
                alt="Referral Illustration"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralSection;