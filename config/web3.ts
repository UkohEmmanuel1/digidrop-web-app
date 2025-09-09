import { createConfig, configureChains, mainnet } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains'; // Import BSC and BSC Testnet
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// Configure chains
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc, bscTestnet], // Use bscTestnet for development, bsc for production
  [publicProvider()]
);

// Create wagmi config
export const config = createConfig({
  autoConnect: true, // Automatically connect if a wallet was previously connected
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }), // For other injected wallets
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string, // Get your Project ID from WalletConnect Cloud
        showQrModal: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

// For Web3Modal setup (optional, but recommended for UI)
import { createWeb3Modal } from '@web3modal/wagmi';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string; // Same Project ID

export const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  defaultChain: bscTestnet, // Set default chain for the modal
  themeMode: 'dark', // or 'light'
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent': '#2563eb', // Example accent color (blue-700)
  },
  featuredWalletIds: [
    'c57ca95b47569778a828d1917811bb7d1fee577edf6da43a88a049b41f2006f6', // MetaMask
    'a794121e87ee54b77996d1c21111d499a0a654761cc637536d936535e67280af', // WalletConnect
  ],
});