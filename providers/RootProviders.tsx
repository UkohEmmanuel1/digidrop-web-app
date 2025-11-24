"use client";
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/lib/wagmi-config';



const queryClient = new QueryClient();

const RootProviders = ({children}:{children: React.ReactNode}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default RootProviders