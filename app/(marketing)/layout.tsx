import React from "react";
import Navbar from "./_components/nav-bar";




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
    </div>
  );
}
