"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Web3Provider from "./WebProvider";


const queryClient = new QueryClient();

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>{children}</Web3Provider>
    </QueryClientProvider>
  );
}
