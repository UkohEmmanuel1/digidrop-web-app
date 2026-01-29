import React from "react";
import Navbar from "./_components/nav-bar";
import Footer from "@/components/common/footer";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: "normal"
});
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar/>
      <main className={`${chakra.variable} antialiased bg-[#1C1C1C]`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
