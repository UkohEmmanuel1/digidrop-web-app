"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import dynamic from "next/dynamic";
const WalletLoginButton = dynamic(
  () => import("@/components/common/WalletConnect"),
  { ssr: false }
);

const LoginClient = () => {   
  return (
    <div className='h-screen w-full relative bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-full max-w-2xl bg-gray-900  text-gray-200'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl uppercase font-chakra'>WELcome to  DiGiVerse</CardTitle>
                    <CardContent>
                   
                      <div className="text-center">
                          <WalletLoginButton />
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
