import { createConfig, http } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains'; // Wagmi has built-in BSC support
import { injected, walletConnect, coinbaseWallet, metaMask, safe } from 'wagmi/connectors';

// Use testnet for dev, mainnet for prod
const chain = process.env.NODE_ENV === 'development' ? bscTestnet : bsc;

export const config = createConfig({
  chains: [bsc, bscTestnet],
    connectors: [
        injected({ shimDisconnect: true }),
        walletConnect({ projectId: '752c3e158e361672d886e617fbe8e41b' }), // Replace with your ID
        coinbaseWallet({ appName: 'Digidrop Project' }),
        metaMask(),
        safe(),
    ],
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org/'), // Mainnet RPC
    [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545/'), // Testnet RPC (use a reliable one like this)
  },
});