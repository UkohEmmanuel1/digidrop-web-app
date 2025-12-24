"use client"
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store/useUserProfile'
import { useProfileStats } from '@/hooks/useGetProfileStats'
import { CircleUser, Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardNavbar = () => {
  const profile = useUserStore((state) => state.profile);
  const { data:api_data, isLoading } = useProfileStats();
  return (
    <div className='w-full bg-[#0B0B0B] h-[80px] py-5'>
        <div className='w-full max-w-7xl mx-auto flex items-center justify-between gap-5'>
            <div className='flex gap-6 items-center'>
              <Image src={"/assets/dlogo.png"} alt='logo' height={30} width={30}  className='mx-3'/> <hr className='bg-white w-0.5 h-6'/>
              <CircleUser size={30} color='#CB6CE6' className=' text-gray-600' />
              <div className='flex gap-4 items-center'>
                <Copy size={25} color='white'/>
                <p className="text-sm text-gray-200 font-serif">{profile?.wallet_addr}</p>
              </div>
           </div>
          <div className='flex gap-3 uppercase font-medium font-chakra text-white'>
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/leaderboard"}>LeaderBoard</Link>
            <Link href={"/referrals"}>Referrals</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/terms-and-condition"} className='text-[#CB6CE6]'>How to Play</Link>
          </div>
          <div className='flex items-center gap-4'>
            <Button className='border border-[#FAFAFA]'>Beta</Button>
            <hr className='bg-white w-0.5 h-6'/>
            <p className="text-lg text-gray-200">{!isLoading && api_data?.highest_point}</p>
            <Image src={"/assets/star.png"} alt='rank' width={30} height={30}/>
            <p className='text-lg text-gray-200'>{!isLoading && api_data && api_data?.point}</p>
          </div>
        </div>
    </div>
  )
}

export default DashboardNavbar