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
    // Note: Kept your logic exactly as provided.
    const isLocked = profile?.has_pass && data.point_power <= currentPassPower;

    const router = useRouter()
    const handleClick = () => {
        if (isLocked || isCurrent) return;
        router.push(`/buy-pass/${data.id}`);
    };

    return (
        <div 
            onClick={handleClick}
            className={cn(
                // Layout & Sizing (Mobile First)
                "relative flex w-full max-w-[320px] flex-col items-center gap-5 p-6 transition-all duration-300",
                
                // Glass Effect
                "bg-black/30 backdrop-blur-md border border-white/5 rounded-2xl shadow-lg",
                
                // Typography Base
                "font-chakra text-gray-300",

                // Conditional States
                isLocked && "cursor-not-allowed opacity-50 grayscale",
                !isLocked && !isCurrent && "cursor-pointer hover:bg-black/50 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl",
                isCurrent && "cursor-default border-brandColor/50 bg-brandColor/10"
            )}
        >
            {/* Image Wrapper - ensuring responsive scaling */}
            <div className="relative w-full aspect-[290/200] rounded-lg overflow-hidden shadow-inner">
                <Image 
                    src={data.card} 
                    alt={data.name} 
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-2 w-full">
                <h3 className='text-xl font-bold text-gray-100 uppercase tracking-wide text-center'>
                    {data.name}
                </h3>
                
                <div className="w-full h-px bg-white/10 my-1" />

                <div className="flex justify-between w-full text-sm font-medium">
                    <span>Stardust</span>
                    <span className="text-gray-100">{data.point_power}</span>
                </div>
                
                <div className="flex justify-between w-full text-sm font-medium">
                    <span>Price</span>
                    <span className="text-gray-100">${data.usd_price}</span>
                </div>
            </div>

            {/* Current Pass Badge */}
            {isCurrent && (
                <div className="absolute top-4 right-4 bg-brandColor text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    CURRENT
                </div>
            )}
            
            {/* Locked Overlay (Optional visual cue) */}
            {isLocked && !isCurrent && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 rounded-2xl">
                    <span className="bg-black/80 text-white px-4 py-1 rounded-md text-sm font-mono">LOCKED</span>
                </div>
            )}

        </div>
    )
}

export default MintPass