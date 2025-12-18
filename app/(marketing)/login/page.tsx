'use client';

import WalletConnect from "@/components/common/WalletConnect";
import { useState } from 'react';
import { toast } from 'sonner';

export default function Page() {  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
       
            t

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Wallet Login */}
        <div className="text-center">
          <WalletConnect />
          <p className="mt-4 text-gray-500 text-sm">
            Connect your wallet for secure login
          </p>
        </div>

      
      </div>
    </div>
  );
}
