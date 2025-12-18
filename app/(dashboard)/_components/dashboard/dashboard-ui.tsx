"use client"
import React from 'react';
import { ArrowUpIcon, User } from 'lucide-react';
import PointBox from '../point-box';
import InfoCard from '../info-card';
import { Button } from '@/components/ui/button';
import DailySpinCard from '../daily-spin-card';
import TaskQuest from '../quest-card';
import { useUserStore } from '@/store/useUserProfile';
import { useProfileStats } from '@/types/hooks/useGetProfileStats';
import { useRouter } from 'next/navigation';




const comigdata={
  icon : "/assets/dlogo.png",
  text: "Digiverse wallet",
  value: "Coming Soon",
  
}


const DashboardUi = () => {
   const router = useRouter()
    const profile = useUserStore((state) => state.profile);
    const { data:api_data, isLoading } = useProfileStats();
    const testdata={
        icon : ArrowUpIcon,
        text: "Position",
        value: api_data?.rank
      }
      const data={
          icon : "/assets/star.png", midText: "POWER ON YOUR SB PASS", value: `${profile?.current_pass_power}x`  
        }
        const referdata={icon : User, text: "Referrals", value: api_data?.referral_count}
    
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#1f0e49]/30 via-[#004AAD]/50 to-[#1c1c1c]'>
        
        <div className='w-full flex flex-col items-center py-10'>
          <h2 className='text-3xl text-white font-bold font-chakra p-4'>Welcome <span className='text-brandColor'>Babim99</span>
          </h2>
          <PointBox point={api_data?.point} isLoading={isLoading} />
        </div>
        <section className='w-full py-8 flex flex-col items-center'>
            <InfoCard data={testdata} isLoading={isLoading} />
            <div className='h-0.5 w-[560px] bg-gray-400/50 mb-3 opacity-40'/>
            <InfoCard data={comigdata}  isLoading={isLoading}/>
            <InfoCard data={data}  isLoading={isLoading}/>

            <Button onClick={() => router.push("/buy-pass")} className='bg-[#333333] border mb-2 py-2 border-gray-200 font-chakra px-16'>UPDATE YOUR PASS</Button>
            <div className='h-0.5 w-[560px] bg-gray-400/50 mb-3 opacity-40'/>
            <DailySpinCard targetDate="2025-06-01T12:00:00Z"/>

            <InfoCard data={referdata} isLoading={isLoading}/>

            <Button className='w-[640px] bg-[#333333] border border-gray-400 shadow-md text-center'>REFERRAL LINK</Button>
            <div className='flex w-full gap-10 px-8 md:px-0 md:max-w-2xl mt-10  items-center justify-between'>
              <p className="text-sm font-chakra font-medium text-gray-200 text-left max-w-sm">Continuously engage with @DIGIDROP official tweets to earn a higher share of Points</p>
              <Button size={"lg"} className='bg-[#333333] text-gray-200 border border-gray-200'>Open X</Button>
            </div>
        </section>
        <section className='w-full'>
            <TaskQuest />
        </section>
    </div>
  )
}

export default DashboardUi