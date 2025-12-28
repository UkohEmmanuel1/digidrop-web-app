"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import { bsc } from 'viem/chains';
import dynamic from "next/dynamic";
import { toast } from 'sonner';
import { ConnectWalletButton } from '@/components/common/WalletConnectButton';
import { useAccount, useDisconnect, useSignMessage, useSwitchChain } from 'wagmi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { bscTestnet } from '@/lib/chain';
import { getNonce, walletLogin } from '@/actions/user';
import { getProfile } from '@/app/data/profile/profile';
import { Button } from '@/components/ui/button';



const LoginClient = () => { 
   const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;
  const [loading, setLoading] = useState(false);
  const allowedChainIds =process.env.NODE_ENV === 'development'? [bscTestnet.id] : [bsc.id];
  
  const { setProfile } = useUserStore();

  const handleAuthentication = async () => {
     if (!isConnected || !address) return;
     const targetChainId =process.env.NODE_ENV === 'development'
       ? bscTestnet.id
       : bsc.id
    
    if (!allowedChainIds.includes(chainId)) {
      try {
        await switchChain({ chainId: targetChainId });
        // Proceed after switch (you can listen to chain change if needed)
      } catch (err) {
        toast.error('Failed to switch network. Please switch manually in MetaMask.');
        return;
      }
    }

    setLoading(true);
    
    try {
      const { nonce, message } = await getNonce();
      const signature = await signMessageAsync({ message });

      // 3️⃣ Backend login / create user
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
      toast.error('Wallet login failed');
      disconnect(); 
    } finally {
      setLoading(false);
    }
      
};



 
  
  
  return (
    <div className='h-screen w-full relative bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-full max-w-2xl bg-gray-900  text-gray-200'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl uppercase font-chakra'>WELcome to  DiGiVerse</CardTitle>
                    <CardContent className='flex items-center justify-center flex-col'>
                   
                      <div className="text-center">
                        {isConnected ? (
                          <Button
                            onClick={handleAuthentication}
                            disabled={loading || isSwitching}
                            className="px-10 py-3 bg-purple-600 text-white rounded-xl"
                          >
                            {isSwitching ? 'Switching network...' : loading ? 'Signing...' : 'Continue'}
                          </Button>
                        ) : (
                          <ConnectWalletButton />
                        )}
                          {/* <WalletLoginButton /> */}
                        <p className="mt-4 text-gray-500 text-sm">
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
