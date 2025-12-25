"use client";

import { WagmiProvider } from "wagmi";
import { useState } from "react";
import { createWagmiConfig } from "@/lib/wagmi-config";


export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [config] = useState(() => createWagmiConfig());

  // Render children WITHOUT wagmi until client is ready
  if (!config) return <>{children}</>;

  return <WagmiProvider config={config}>
    {children}
  </WagmiProvider>;
}