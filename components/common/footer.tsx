import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-8 shadow-lg shadow-slate-300">
      
      {/* Top Footer Row */}
      <div className="flex justify-center py-4">
        <div className="flex items-center gap-10 text-gray-200 max-w-5xl flex-nowrap whitespace-nowrap">

          {/* Text links */}
          <div className="flex items-center gap-6 text-gray-400">
            <p>COPYRIGHT {new Date().getFullYear()}</p>

            <Link href="/term-and-condition">
              TERMS AND CONDITIONS
            </Link>

            <Link href="/term-and-condition">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Middle section */}
          <div className="flex items-center gap-4 text-gray-400">
            <span>|</span>

            <Link href="/whitepaper">
              WHITEPAPER
            </Link>

            <p>VISIT DIGIDROP</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <Link href="https://twitter.com/yourhandle" target="_blank">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </Link>

            <Link href="https://facebook.com/yourhandle" target="_blank">
              <FaFacebook className="text-xl hover:text-blue-600 transition" />
            </Link>

            <Link href="https://instagram.com/yourhandle" target="_blank">
              <FaInstagram className="text-xl hover:text-pink-500 transition" />
            </Link>

            <Link href="https://discord.com/invite/yourhandle" target="_blank">
              <FaDiscord className="text-xl hover:text-indigo-500 transition" />
            </Link>

            <Link href="https://t.me/yourhandle" target="_blank">
              <FaTelegram className="text-xl hover:text-sky-500 transition" />
            </Link>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-800" />

      {/* Disclaimer */}
      <div className="px-6 py-4 text-center text-gray-400 leading-relaxed max-w-6xl mx-auto">
        Disclaimer: DigiDrop Soulbound Tokens (SBTs) are non-transferable digital
        utility credentials used for platform access and identity. They have no
        market value, cannot be resold, and strictly represent membership within
        the community. The minting fee covers protocol maintenance and ecosystem
        development. This is a purchase of a digital good, not an investment
        contract.
      </div>

    </footer>
  );
};

export default Footer;
