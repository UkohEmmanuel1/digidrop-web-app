"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import { bsc } from 'viem/chains';

import { toast } from 'sonner';
import { ConnectWalletButton } from '@/components/common/WalletConnectButton';
import { useConnection, useDisconnect, useSignMessage, useChainId } from 'wagmi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { bscTestnet } from '@/lib/chain';
import { getNonce, walletLogin } from '@/actions/user';
import { getProfile } from '@/app/data/profile/profile';
import { Button } from '@/components/ui/button';



const LoginClient = () => { 
  const { address, isConnected} = useConnection()
  const chainId = useChainId();
  const disconnect = useDisconnect()
  const nonceRef = useRef<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || undefined;
  const [loading, setLoading] = useState(false);
  const { setProfile } = useUserStore();
  const allowedChainIds = process.env.NODE_ENV === 'development' ? [bscTestnet.id] : [bsc.id];
  const targetChainId = allowedChainIds[0];

  const signMessage = useSignMessage({
  mutation: {
    onSuccess: async (signature) => {
      try {
        if (!nonceRef.current || !address) {
          throw new Error('Missing auth data');
        }

        if (refCode) {
          await walletLogin(address, signature, nonceRef.current, refCode);
        } else {
          await walletLogin(address, signature, nonceRef.current);
        }

        const profile = await getProfile();
        setProfile(profile);
        router.replace(profile.has_pass ? '/dashboard' : '/buy-pass');
        toast.success('Logged in successfully');
      } catch (err) {
        console.error(err);
        disconnect.mutate()
        toast.error('Login failed');
        disconnect.mutate()
      } finally {
          nonceRef.current = null;
          setLoading(false);
      }
    },
    onError: () => {
      nonceRef.current = null;
      toast.error('Signature rejected');
      setLoading(false);
    },
  },
});


  
const handleAuthentication = async () => {
  if (loading) return;
  
  if (!isConnected || !address) {
    toast.error('Connect wallet first');
    return;
  }

  if (!allowedChainIds.includes(chainId)) {
    toast.error('Please switch to BSC network');
    return;
  }

  setLoading(true);

  try {
    const { nonce, message } = await getNonce();
    nonceRef.current = nonce;

    // IMPORTANT: slight delay helps MetaMask mobile
    setTimeout(() => {
      signMessage.mutate({ message });
    }, 300);

  } catch (err) {
    setLoading(false);
    toast.error('Failed to prepare signature');
  }
};


  const isCorrectChain = chainId && allowedChainIds.includes(chainId);
  
  
  
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
                            disabled={loading}
                            className="px-10 py-3 bg-purple-600 text-white rounded-xl"
                            >
                              {loading ? 'Signing...' : 
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
