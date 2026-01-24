'use client';

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import { DigiPass } from '@/types/response-type';
import { useUserStore } from '@/store/useUserProfile';
import { cn } from '@/lib/utils';

type CardPassProp = {
    data: DigiPass
}

const MintPass = ({ data }: CardPassProp) => {
  const { profile } = useUserStore(); 
  const currentPassPower = profile?.current_pass_power ?? 0;
  const currentPassId = profile?.current_pass_id;
  const isCurrent = currentPassId === data.id;
  
  // Logic remains exactly the same
  const isLocked = profile?.has_pass && data.point_power <= currentPassPower;
  const router = useRouter();

  // console.log("current pass:", isCurrent)

  const handleClick = () => {
    if (isLocked || isCurrent) return;
    router.push(`/buy-pass/${data.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className={cn(
        // Layout & Responsiveness (Mobile First)
        "group relative flex w-full max-w-[320px] flex-col items-center gap-5 rounded-2xl p-6 transition-all duration-300 font-chakra",
        
        // GLASSMORPHISM STYLES (Transparent, No heavy border)
        "bg-black/30 backdrop-blur-md border border-white/5 shadow-lg",

        // Conditional Styles (Locked vs Active)
        isLocked 
          ? "cursor-not-allowed opacity-50 grayscale-[0.5]" 
          : "cursor-pointer hover:bg-black/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
      )}
    >
        {/* Image Container with subtle drop shadow */}
        <div className="relative w-full flex justify-center drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
            <Image 
                src={data.card} 
                alt={data.name} 
                width={290} 
                height={200}
                className="object-contain h-auto w-auto"
                priority
            />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-1 w-full text-center">
            <h3 className='text-xl font-bold uppercase tracking-wider text-white'>
                {data.name}
            </h3>

            {isCurrent && (
                <span className="mt-2 rounded-full bg-blue-500/20 px-4 py-1 text-xs font-bold text-blue-300 border border-blue-500/30">
                    CURRENT PASS
                </span>
            )}

            <div className="mt-2 space-y-1">
                {/* Text Colors updated to text-gray-300 to match footer */}
                <p className="text-gray-300 text-sm font-medium tracking-wide">
                    {data.point_power} Power
                </p>
                <p className="text-gray-300 text-lg font-bold">
                    ${data.usd_price}
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default MintPass