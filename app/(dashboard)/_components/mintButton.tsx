// components/MintButton.tsx
'use client';

import { useEffect, useState } from 'react';
import PassNFT_ABI from '@/contract/abi.json';
import { toast } from 'sonner';
import { useAccount, useBalance, useWriteContract,useReadContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { verifyPayment } from '@/actions/app';
import { useRouter } from 'next/navigation';
import { PassInfo } from '@/types/response-type';
import { bscTestnet } from '@/lib/chain';

interface Pass {
  pass_id: number;
  name: string;
  bnb_price: number; // e.g., 0.00880098
  usd_price: string;
  point_power: number;
  card: string;
}



const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;


export default function MintButton({ pass }: { pass: Pass }) {
  const router =useRouter()
  const [verificationDone, setVerificationDone] = useState(false);
  const { address, chain, isConnected, isConnecting } = useAccount();
  const { data: balance, isLoading: balanceLoading } = useBalance({
  address,
  chainId: bscTestnet.id, 
  query: {
    enabled: Boolean(address),
  },
});


  
  const formattedBalance =balance && !balanceLoading ? Number(formatEther(balance.value)).toFixed(6) : '...';
  
  
  useEffect(() => {
  console.log('Connected address:', address);
  console.log('Connected chain:', chain);
  console.log('Balance raw:', balance);
}, [address, chain, balance]);

  const { writeContract, 
        data: hash, 
        isPending: isWriting, 
        error: writeError } = useWriteContract();
  const { isLoading: isConfirming, 
          isSuccess: isConfirmed, error: confirmError } = useWaitForTransactionReceipt({ hash });

    const { data: onChainPassRaw } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: PassNFT_ABI,
        functionName: 'getPass',
        args: [BigInt(pass.pass_id)],
        query: {
            enabled: isConnected,
        },
        });
      
  const onChainPass = onChainPassRaw as PassInfo | undefined;
  const requiredBNB = onChainPass ? onChainPass.price_wei : parseEther(pass.bnb_price.toFixed(18));

  const hasEnough = balance?.value !== undefined && balance.value >= requiredBNB;

  const handleMint = async () => {
    if (!address || !hasEnough) return;

    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: PassNFT_ABI,
        functionName: 'mint',
        args: [BigInt(pass.pass_id)],
        value: requiredBNB,
      });
    } catch (err) {
      toast.error('Transaction rejected or failed');
    }
  };

  // Handle success → call backend verification
 useEffect(() => {
    if (isConfirmed && hash && !verificationDone) {
      setVerificationDone(true); // Prevent double-call

      verifyPayment({txHash:hash, newPassId: pass.pass_id, isUpgrade: false})
        .then(() => {
          toast.success(`${pass.name} minted and verified!`);
          router.replace('/dashboard');
        })
        .catch((err) => {
          toast.error('Mint succeeded but verification failed. Contact support.');
          console.error(err);
        });
    }
 }, [isConfirmed, hash, pass.pass_id, verificationDone]);
 

 // === ERROR HANDLING ===

  useEffect(() => {
    if (writeError) {
      let message = 'Mint failed';

      if (writeError.message.includes('Already have pass')) {
        message = 'You already own a pass! Visit your dashboard.';
      } else if (writeError.message.includes('Insufficient payment')) {
        message = 'Insufficient BNB sent (try refreshing page)';
      } else if (writeError.message.includes('user rejected')) {
        message = 'Transaction rejected by user';
      } else {
        message = writeError.message || 'Unknown error';
      }

      toast.error(message);
    }
    if (confirmError) {
      toast.error('Transaction failed on-chain');
    }
  }, [writeError, confirmError]);
  

  if (isConnecting && balanceLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-lg animate-pulse">Loading wallet data...</p>
        </div>
        <button disabled className="w-full py-6 rounded-2xl bg-gray-300 text-gray-500 cursor-not-allowed">
          Loading...
        </button>
      </div>
    );
  }



  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-lg">Price: <strong>{onChainPass ? formatEther(onChainPass.price_wei)  : pass.bnb_price.toFixed(6)} BNB</strong></p>
        <p className="text-sm text-gray-600">≈ ${pass.usd_price}</p>
        <p className="text-sm mt-2">
            Balance: {formattedBalance} BNB
        </p>
      </div>

      {!address ? (
        <p className="text-red-500 text-center">
          Connect wallet to mint
        </p>) : !hasEnough ? (
        <div className="border border-red-300 rounded-lg p-6 text-center">
          <p className="text-red-700 font-bold text-xl">Insufficient BNB Balance</p>
          <p className="text-sm mt-2">
            Required: {onChainPass ? formatEther(onChainPass.price_wei) : pass.bnb_price.toFixed(6)} BNB
            Balance: {formattedBalance} BNB
          </p>
        </div>
      ) : (
        <button
          onClick={handleMint}
          disabled={isWriting || isConfirming}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl text-lg disabled:opacity-50"
        >
          {isWriting ? 'Waiting for approval...' :
           isConfirming ? 'Minting...' :
           'Mint Pass Now'}
        </button>
      )}
    </div>
  );
}