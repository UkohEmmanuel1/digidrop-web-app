"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState, useCallback } from 'react'
import { bsc } from 'viem/chains';

import { toast } from 'sonner';
import { ConnectWalletButton } from '@/components/common/WalletConnectButton';
import { useAccount, useDisconnect, useSignMessage, useSwitchChain, useChainId } from 'wagmi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { bscTestnet } from '@/lib/chain';
import { getNonce, walletLogin } from '@/actions/user';
import { getProfile } from '@/app/data/profile/profile';
import { Button } from '@/components/ui/button';



const LoginClient = () => { 
   const { address, isConnected } = useAccount();
   const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;
  const [loading, setLoading] = useState(false);
  const [hasSwitched, setHasSwitched] = useState(false);
  const allowedChainIds = process.env.NODE_ENV === 'development' ? [bscTestnet.id] : [bsc.id];
  const targetChainId = allowedChainIds[0];
  const { setProfile } = useUserStore();


  useEffect(() => {
    if (isConnected && chainId && allowedChainIds.includes(chainId) && hasSwitched && !loading && !isSwitching) {
      // Small delay to ensure stable chainId
      const timer = setTimeout(() => {
        handleAuthentication();
      }, 500);
      return () => clearTimeout(timer);
    }
}, [chainId, isConnected, hasSwitched, loading, isSwitching]);
  
const handleAuthentication = useCallback(async () => {
    if (!isConnected || !address) {
      toast.error('Please connect wallet first');
      return;
    }

    if (!chainId) {
      toast.error('Unable to detect network');
      return;
    }

    // ✅ CRITICAL: Skip switchChain if already on correct chain
    if (!allowedChainIds.includes(chainId)) {
      try {
        setHasSwitched(true);
        await switchChainAsync({ chainId: targetChainId });
        setHasSwitched(false);
        // Don't proceed here - useEffect will handle after chainId updates
        return;
      } catch (err: any) {
        console.error('Switch chain error:', err);
        setHasSwitched(false);
        if (err.code === 4902) { // Chain not added
          toast.error('BSC network not found. Please add BSC Testnet/Mainnet manually.');
        } else {
          toast.error('Please switch to BSC manually in your wallet.');
        }
        return;
      }
    }

    // ✅ Proceed with login (correct chain confirmed)
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
    } catch (err: any) {
      console.error('Login error:', err);
      toast.error(err.message || 'Wallet login failed');
      disconnect(); 
    } finally {
      setLoading(false);
      setHasSwitched(false);
    }
  }, [isConnected, address, chainId, allowedChainIds, targetChainId, refCode, switchChainAsync, signMessageAsync, disconnect, setProfile, router]);
console.log("chainId:", chainId)


  const isCorrectChain = chainId && allowedChainIds.includes(chainId);
  const buttonDisabled = loading || (!isCorrectChain && isSwitching);
  
  
  return (
    <div className='h-screen w-full relative bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-full max-w-2xl bg-gray-900  text-gray-200'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl uppercase font-chakra'>WELcome to  DiGiVerse</CardTitle>
                    <CardContent className='flex items-center justify-center flex-col'>
                   
                      <div className="text-center">
                        {isConnected ? (
                          <>
                          <p className="text-sm text-gray-300">{address}</p>
                          <Button
                            onClick={handleAuthentication}
                            disabled={buttonDisabled}
                            className="px-10 py-3 bg-purple-600 text-white rounded-xl"
                            >
                              {isSwitching ? 'Switching network...' : 
                              loading ? 'Signing...' : 
                              !isCorrectChain ? 'Wrong network' : 'Continue'}
                            </Button>
                                {!isCorrectChain && (
                                  <p className="mt-2 text-orange-400 text-xs">
                                    On {chainId ? `Chain ${chainId}` : 'Unknown'} (Need {targetChainId})
                                  </p>
                                )}
                              </>
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
