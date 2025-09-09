import React from 'react';
import { LucideIcon } from 'lucide-react';
import { string } from 'zod';


interface InfoProp {
    data:{
        icon: string | LucideIcon
        text?: string
        score?: number
        midText?: string
        value: number
    }
}
const InfoCard = ({data}:InfoProp) => {
    const {icon:Icon, text, score, midText, value}=data
  return (
    <div className='w-[80%] md:w-[640px] flex justify-between mb-5 px-6 items-center h-[80px] shadow-sm border bg-[#333333]'>
        <div className='flex gap-5 items-center'>
            {typeof Icon == 'string'? (
                <img src={Icon} alt='icon' className='w-8 h-8' />
            ): (
                <Icon  size={30} color='white' className='h-8 font-thin'/>
            )}
            <div className='text-white font-chakra text-center font-sans font-medium'>
                <h4>{text}</h4>
                <p className="text-brandColor">{score}</p>
            </div>
        </div>
        <div className='text-xl font-medium font-chakra text-gray-400'>{midText}</div>
        <div className='text-xl font-semibold font-chakra text-gray-400'>{value}</div>
    </div>
  )
}

export default InfoCard