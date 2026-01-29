"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from "next/dynamic"

// UI Imports
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ConnectWalletButton } from '@/components/common/WalletConnectButton'
import { toast } from 'sonner'

// Web3 Imports
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'
import { bsc } from 'viem/chains'
import { bscTestnet } from '@/lib/chain'

// Logic Imports
import { useUserStore } from '@/store/useUserProfile'
import { getNonce, walletLogin } from '@/actions/user'
import { getProfile } from '@/app/data/profile/profile'
import { cn } from '@/lib/utils'

const LoginClient = () => {
  const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;

  const [loading, setLoading] = useState(false);
  const allowedChainIds = process.env.NODE_ENV === 'development'
    ? [bscTestnet.id]
    : [bsc.id];

  const { setProfile } = useUserStore();

  useEffect(() => {
    if (!isConnected || !address) return;

    const handleAuthentication = async () => {
      if (chainId && !allowedChainIds.includes(chainId)) {
        toast.error('Wrong network. Please switch network.');
        return;
      }

      setLoading(true);

      try {
        const { nonce, message } = await getNonce();
        const signature = await signMessageAsync({ message });

        if (refCode) {
          await walletLogin(address, signature, nonce, refCode);
        } else {
          await walletLogin(address, signature, nonce);
        }

        const profile = await getProfile();
        setProfile(profile);

        router.replace(profile.has_pass ? '/dashboard' : '/buy-pass');
        toast.success('Logged in successfully');
      } catch (err) {
        console.error(err);
        toast.error('Wallet login failed');
        disconnect();
      } finally {
        setLoading(false);
      }
    };

    handleAuthentication();
  }, [isConnected, address]);

  return (
    
    <div className='relative h-screen w-full font-chakra bg-[url("/assets/Stanton-crusader.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex h-full items-center justify-center p-4">
        <Card className='w-full max-w-2xl border-gray-700 bg-gray-900/80 text-gray-200 backdrop-blur-sm'>
          
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-2 text-center text-3xl font-bold uppercase tracking-wider text-transparent">
              Welcome to DigiVerse
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center pb-8 pt-4">
            {/* ConnectWalletButton component */}
            <ConnectWalletButton />
            
            <p className="mt-4 font-chakra text-center  text-sm tracking-wide text-gray-400">
              Connect your wallet for secure login
            </p>

            {loading && (
               <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 animate-pulse">
                 Logging in...
               </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LoginClient