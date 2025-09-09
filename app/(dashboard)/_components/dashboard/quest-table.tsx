
import { Play } from 'lucide-react'
import { FaXTwitter,  FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa6";
import React from 'react'
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { IoCaretDown } from "react-icons/io5";
import { cn } from '@/lib/utils';



const IconMap={
    'twitter': FaXTwitter,
    'instagram': FaInstagram,
    'discord': FaDiscord,
    'linkedIn': FaLinkedin,
    'user': FaUser,
    'general': IoCaretDown


}
type QuestProp={
    data:{
        icon: string,
        task: string, 
        point: number,
        url: string
    }[],
    type?: string
}
const QuestTable = ({data, type}: QuestProp) => {
  return (
    <div
     className='overflow-x-auto'>
         <table className='min-w-full text-sm text-left'>
            <thead>
                <tr>
                    <th className='px-4 py-3 font-medium text-gray-200'><Play size={30}  color='white'/></th>
                    <th className='px-4 py-3 font-medium capitalize text-gray-200'>{type === "onetime" ? "ONE TIME QUEST": "DAILY QUESTS"}</th>
                    <th className='px-4 py-3 font-medium text-gray-200'>Points</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => {
                    const Icon = IconMap[item.icon as keyof typeof IconMap];
                    return (     
                    <tr
                        onClick={() => window.open(item.url, '_blank')}
                        key={idx}
                        className="border-b border-dotted hover:cursor-pointer  border-gray-200  space-y-4 last:border-none"
                    >
                        <td className={cn("px-4 py-3 flex items-center gap-2 text-gray-200", type ==="onetime" && "text-[#DDBA3D]")}>
                         <p className="">{idx}</p>
                        <Icon size={40} className={cn("w-5 h-5 text-gray-200", type === "onetime" && "text-[#DDBA3D]")} />
                        </td>
                        <td className={cn("px-4 py-3 text-lg text-gray-200 hover:text-brandColor", type === "onetime" && "text-[#DDBA3D]")}>{item.task}</td>
                        <td className="p-4 text-gray-800">
                            <div className={cn('w-10 h-6 py-1 text-center text-md shadow-sm rounded-sm font-medium box-border bg-white', type === 'onetime' && 'bg-[#DDBA3D]')}>{item.point}</div> 
                            </td>
                    </tr>       
                    );
                })}
            </tbody>
         </table>
    </div>
  )
}

export default QuestTable