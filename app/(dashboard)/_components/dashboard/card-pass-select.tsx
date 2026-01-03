'use client';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import { DigiPass } from '@/types/response-type';
import { useUserStore } from '@/store/useUserProfile';
import { cn } from '@/lib/utils';


type CardPassProp={
    data: DigiPass
}
const MintPass = ({data}:CardPassProp) => {
  const { profile } = useUserStore();
  const currentPassPower = profile?.current_pass_power ?? 0;
  const currentPassId = profile?.current_pass_id;
  const isCurrent = currentPassId === data.id;
  const isLocked = profile?.has_pass && data.point_power <= currentPassPower;
  const router = useRouter()
  const handleClick = () => {
    if (isLocked || isCurrent) return;
    router.push(`/buy-pass/${data.id}`);
  };
  return (
    <div onClick={handleClick} 
      className={cn(
    "relative flex w-[320px] flex-col items-center gap-4 border p-4 transition",
    isLocked && "cursor-not-allowed opacity-40",
    !isLocked && "cursor-pointer hover:bg-black/40"
  )}
    >
        <Image src={data.card} alt={data.name} width={290} height={200}/>
        <h3 className='text-lg font-mono font-chakra font-medium text-center py-2'>{data.name}</h3>
        {isCurrent && (
              <p className="text-lg text-white px-4 py-2 rounded-full font-bold">
                CURRENT PASS
              </p>
            )}
        <p className="font-chakra">{data.point_power} power</p>
        <p className="font-semibold text-lg">${data.usd_price}</p>
        
    </div>
  )
}

export default MintPass