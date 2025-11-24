import { useAccount, useConnect, useSignMessage, useSwitchChain } from 'wagmi';
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI or similar
import { toast } from 'sonner';
import { getNonce, getProfile, walletLogin } from '@/actions/user';
import { useRouter } from 'next/navigation';

export default function WalletLoginButton() {
  const router = useRouter()
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { signMessageAsync } = useSignMessage();
  const { switchChain } = useSwitchChain();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!isConnected) {
        const injectedConnector = connectors.find(c => c.id === 'injected');
        if (injectedConnector) {
          await connect({ connector: injectedConnector });
        } else {
          toast.error('No wallet detected. Install MetaMask or use WalletConnect.');
          return;
        }
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
    
      if (address) {
         await walletLogin(address, signature)
      }else{
        toast.error('Wallet login failed');
        return;
      }
      
      // Step 6: Check for existing pass and redirect
      const profile = await getProfile()
      //https://digidrop.xyz/walletlogin?ref=${profile.referral_code}
      
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