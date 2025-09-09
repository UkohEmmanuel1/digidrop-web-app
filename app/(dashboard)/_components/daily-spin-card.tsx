"use client";
import React, {useState, useEffect} from 'react'
import TimeBox from './time-box-card';

type Prop={
    targetDate: string | Date
}

const DailySpinCard = ( {targetDate }:Prop) => {
    const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='w-[650px] h-[80px] flex mb-6 items-center justify-between px-6 bg-[#333333]'>
        <div className='flex gap-3 items-center'>
            <img src={"/assets/spin.png"} alt="" className='h-8 w-8' />
            <div>
                <p className="font-chakra font-medium text-lg text-gray-400"><span className='mr-2'>DAILY SPIN</span> <span>COMING SOON</span></p>
                <p className="text-brandColor text-sm">Spin daily and stand a chance to win more point.</p>
            </div>
            
        </div>
        <div className="flex justify-center space-x-4 text-gray-800 text-lg font-medium">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hrs" value={timeLeft.hours} />
            <TimeBox label="Min" value={timeLeft.minutes} />
            <TimeBox label="Sec" value={timeLeft.seconds} />
      </div>
    </div>
  )
}
 
export default DailySpinCard