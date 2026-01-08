"use client";

import React, { useState } from "react";
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
import Image from "next/image";

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  
  const referralLink = "https://astranova.io/ref/user123";

  // Data kept outside the render cycle or memoized in real apps, 
  // but fine here at the top level of the component.
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
    const text = encodeURIComponent(`Join me on Astra Nova and earn Stardust! ${referralLink}`);
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${text}`,
      x: `https://twitter.com/intent/tweet?text=${text}`,
    };
    
    if (urls[platform]) window.open(urls[platform], "_blank", "noreferrer");
  };

  return (
    <section className="container h-full mx-auto bg-[url('/assets_icon/background.png')] bg-cover bg-center bg-no-repeat">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-center lg:items-start space-y-8">
          
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold font-chakra text-white text-balance">
              REFER & GET STARDUST
            </h1>
            <p className="text-lg sm:text-xl text-white font-chakra max-w-2xl text-balance">
              Share my referral link with friends & get 200 Stardust
            </p>
          </div>

          {/* Referral link */}
          <div className="flex flex-row items-stretch w-full max-w-xl border-2 border-white overflow-hidden bg-secondary/30">
            {/* Input Area */}
            <div className="flex-1 px-4 py-3 flex items-center min-w-0">
              <span className="text-white font-mono text-xs sm:text-sm truncate">
                {referralLink}
              </span>
            </div>

            {/* Copy Button */}
            <Button
              type="button"
              className="rounded-none gap-2 px-6 sm:px-8 bg-[rgba(161,118,214,1)] hover:bg-purple-700 text-white h-auto py-3 transition-colors"
              onClick={handleCopy}
            >
              {copied ? <FaCheck className="w-4 h-4" /> : <FaLink className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy Link"}</span>
              <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
            </Button>
          </div>

          {/* Social Share Section */}
          <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
            <p className="text-xs text-white uppercase tracking-widest font-bold">
              Share link through
            </p>
            
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {socialButtons.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <Button
                    key={social.id}
                    type="button"
                    size="icon"
                    aria-label={`Share on ${social.name}`}
                    className={cn(
                      "w-12 h-12 bg-[rgba(161,118,214,1)] hover:bg-purple-700 transition-transform hover:scale-110 border-none rounded-lg"
                    )}
                    onClick={() => shareReferral(social.id)}
                  >
                    <SocialIcon 
                      className="w-6 h-6" 
                      style={{ color: social.hex }} 
                    />
                  </Button>
                );
              })}
            </div>
            
            <div>
              <p className="text-xs text-white uppercase tracking-widest font-bold mt-2">
                No cap! Earn as much Stardust as possible
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="hidden lg:flex justify-center">
          <div className="relative flex flex-col items-center justify-center shadow-2xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-500">
            <Image
              src="/assets_icon/Mask.png"
              alt="Referral Landing Illustration"
              width={600}
              height={450}
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReferralSection;