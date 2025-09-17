import React from "react";
import Navbar from "./_components/nav-bar";

import Footer from "@/components/common/footer";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
