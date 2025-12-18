"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { useProfileStats } from '@/types/hooks/useGetProfileStats';
import React from 'react'



const PointBox = ({point, isLoading}:{point:number, isLoading: boolean}) => {
  
  if (isLoading) return <Skeleton className='w-[150px] h=[78px]' />;
  return (
    <div className='border w-[150px] h=[78px] flex flex-col items-center border-purple-800 bg-[#1c1c1c] text-white rounded shadow-md px-6 py-4'>
      <p className=" capitalize text-lg font-medium">claim point</p>
      <p className="font-medium text-2xl">{point}</p>
      </div>
  )
}

export default PointBox