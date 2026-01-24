"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { bsc } from 'viem/chains';
import dynamic from "next/dynamic";
import { toast } from 'sonner';
import { ConnectWalletButton } from '@/components/common/WalletConnectButton';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { bscTestnet } from '@/lib/chain';
import { getNonce, walletLogin } from '@/actions/user';
import { getProfile } from '@/app/data/profile/profile';



const LoginClient = () => { 
   const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;
  

  const [loading, setLoading] = useState(false);
  const allowedChainIds =
    process.env.NODE_ENV === 'development'
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
      disconnect(); 
    } finally {
      setLoading(false);
    }
    
  
     };

  handleAuthentication()
  
  }, [isConnected, address])
  
  
  return (
    <div className='h-screen w-full relative bg-[url("/assets_icon/Stanton-crusader.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-full max-w-2xl bg-gray-900/40  text-gray-200'>
                <CardHeader>
                    <CardTitle className="text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-2 text-4xl font-bold leading-tight text-transparent transition-opacity hover:opacity-100  text-2xl uppercase font-chakra">WELcome to  DiGiVerse</CardTitle>
                    <CardContent>
                   
                      <div className="text-center">
                         <ConnectWalletButton />
                          {/* <WalletLoginButton /> */}
                        <p className="mt-4 text-black text-sm">
                          Connect your wallet for secure login
                        </p>
                      </div>
                    </CardContent>
                </CardHeader>
            </Card>      
      </div>
    </div>
  );
}

export default LoginClient
