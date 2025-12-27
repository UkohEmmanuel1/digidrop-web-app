import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'viem/chains';
import { bscTestnet } from './chain';

console.log('WC PROJECT ID:', process.env.NEXT_PUBLIC_WC_PROJECT_ID);
export const wagmiConfig = getDefaultConfig({
  appName: 'Digidrop',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
  chains:
    process.env.NODE_ENV === 'development'
      ? [bscTestnet]
      : [bsc],
  ssr: true,
});
