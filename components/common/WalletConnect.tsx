"use client"
import { useAccount, useSignMessage, useDisconnect } from 'wagmi';
import { toast } from 'sonner';
import { getNonce, walletLogin } from '@/actions/user';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { getProfile } from '@/app/data/profile/profile';
import { useState } from 'react';
import { Button } from '../ui/button';
import { bsc } from 'viem/chains';
import { bscTestnet } from '@/lib/chain';


export default function WalletLoginButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;

  const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  const allowedChainIds =
  process.env.NODE_ENV === 'development'
    ? [bscTestnet.id]
    : [bsc.id];

  const { setProfile } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!isConnected || !address) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (chainId && !allowedChainIds.includes(chainId)) {
      toast.error('Wrong network. Please switch network.');
      return;
    }

    setLoading(true);
    
    try {
      // 1️⃣ Get nonce & message
      const { nonce, message } = await getNonce();

      // 2️⃣ Sign message
      const signature = await signMessageAsync({ message });

      // 3️⃣ Backend login / create user
      if (refCode) {
        await walletLogin(address, signature, nonce, refCode);
      } else {
        await walletLogin(address, signature, nonce);
      }

      // 4️⃣ Fetch profile
      const profile = await getProfile();
      setProfile(profile);

      // 5️⃣ Redirect
      router.replace(profile.has_pass ? '/dashboard' : '/buy-pass');

      toast.success('Logged in successfully');
    } catch (err) {
      toast.error('Wallet login failed');
      disconnect(); // security: reset wallet state
    } finally {
      setLoading(false);
    }
    
  
  };

  return (
    <Button onClick={handleLogin} disabled={loading}>
      {loading ? 'Connecting...' : 'Login with Wallet'}
    </Button>
  );
}