import React from 'react'
import DashboardNavbar from '../../_components/dashboard-navbar'
import PointBox from '../../_components/point-box'
import InfoCard from '../../_components/info-card'
import { ArrowUpIcon, User, User2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DailySpinCard from '../../_components/daily-spin-card'
import TaskQuest from '../../_components/quest-card'
import Footer from '@/components/common/footer'

const testdata={
  icon : ArrowUpIcon,
  text: "Position",
  score: 456,
  value: 90
}
const data={
  icon : "/assets/star.png",
  midText: "POINT ON YOUR SB PASS",
  value: 1600
}
const comigdata={
  icon : "/assets/dlogo.png",
  text: "Digiverse wallet",
  midText: "Coming Soon",
  value: 0
}

const referdata={
  icon :  User,
  text: "Referrals",
  value: 0
}

const Dashboard = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#1f0e49]/30 via-[#004AAD]/50 to-[#1c1c1c]'>
        
        <div className='w-full flex flex-col items-center py-10'>
          <h2 className='text-3xl text-white font-bold font-chakra p-4'>Welcome <span className='text-brandColor'>Babim99</span>
          </h2>
          <PointBox />
        </div>
        <section className='w-full py-8 flex flex-col items-center'>
            <InfoCard data={testdata}  />
            <div className='h-0.5 w-[560px] bg-gray-400/50 mb-3 opacity-40'/>
            <InfoCard data={comigdata}  />
            <InfoCard data={data}  />

            <Button className='bg-[#333333] border mb-2 py-2 border-gray-200 font-chakra px-16'>UPDATE YOUR PASS</Button>
            <div className='h-0.5 w-[560px] bg-gray-400/50 mb-3 opacity-40'/>
            <DailySpinCard targetDate="2025-06-01T12:00:00Z"/>

            <InfoCard data={referdata}/>

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

export default Dashboard