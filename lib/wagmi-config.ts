// lib/wagmi.config.ts
export function createWagmiConfig() {
  if (typeof window === "undefined") return null;

  const { createConfig, http } = require("wagmi");
  const { bsc, bscTestnet } = require("wagmi/chains");
  const {
    injected,
    walletConnect,
    coinbaseWallet,
    metaMask,
    safe,
  } = require("wagmi/connectors");

  return createConfig({
    chains: [bsc, bscTestnet],
    connectors: [
      injected({ shimDisconnect: true }),
      walletConnect({
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
      }),
      coinbaseWallet({ appName: "Digidrop Project" }),
      metaMask(),
      safe(),
    ],
    transports: {
      [bsc.id]: http("https://bsc-dataseed.binance.org/"),
      [bscTestnet.id]: http(
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      ),
    },
  });
}
