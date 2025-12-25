"use client"
import { useAccount, useConnect, useSignMessage, useSwitchChain } from 'wagmi';
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI or similar
import { toast } from 'sonner';
import { getNonce,  walletLogin } from '@/actions/user';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserProfile';
import { getProfile } from '@/app/data/profile/profile';

export default function WalletLoginButton() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const { address, isConnected, chain } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { signMessageAsync } = useSignMessage();
  const { switchChain } = useSwitchChain();
  const [loading, setLoading] = useState(false);
  const { setProfile } = useUserStore();
  const refCode = searchParams.get('ref') || undefined;
  const handleLogin = async () => {
    setLoading(true);
    
    try {
      let userAddress = address;

      const injectedConnector = connectors.find(c => c.id === 'injected');

      if (!userAddress) {
        if (!injectedConnector) {
          toast.error('No wallet detected. Install MetaMask or use WalletConnect.');
          return;
        }

        const result = await connectAsync({ connector: injectedConnector });
        userAddress = result.accounts[0];
      }

      console.log("user address:", userAddress)
      if (!userAddress) {
        toast.error('Wallet not connected');
        return;
      }

      // Step 2: Ensure BSC chain (testnet for dev, mainnet for prod)
      const targetChainId = process.env.NODE_ENV === 'development' ? 97 : 56;
      if (chain?.id !== targetChainId) {
        await switchChain({ chainId: targetChainId });
      }

      // Step 3: Fetch nonce/message from backend
      const { nonce, message } = await getNonce();

      // Step 4: Sign message
      const signature = await signMessageAsync({ message });

      // Step 5: POST to backend for verification
      
    
         if (refCode) {
           await walletLogin(userAddress, signature, nonce, refCode);
        } else {
          await walletLogin(userAddress, signature, nonce); // no referral
        }
      
       // pass the profile details to zustand store
      const profile = await getProfile()
      setProfile(profile);
      //https://digidrop.xyz/login?ref=${profile.referral_code}
      
      if (profile.has_pass) {
         router.replace('/dashboard');
      }else {
        router.replace('/buy-pass')
      }
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error('Wallet login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleLogin} disabled={loading}>
      {loading ? 'Connecting...' : 'Connect Wallet to Login'}
    </Button>
  );
}