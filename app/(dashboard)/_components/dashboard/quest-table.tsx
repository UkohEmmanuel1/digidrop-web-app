"use client"
import { Play } from 'lucide-react'
import React from 'react'
import { useStartTask } from '@/hooks/useStartQuest';
import { useCompleteTask } from '@/hooks/useCompleteQuest';
import Task from './task-card';
import { TaskResponse } from '@/types/response-type';




type QuestProp={
    data:TaskResponse[],
    
}
const QuestTable = ({data}: QuestProp) => {
    
  return (
    <div
     className='overflow-x-auto'>
         <table className='min-w-full text-sm text-left'>
            <thead>
                <tr>
                    <th className='px-4 py-3 font-medium text-gray-200'><Play size={30}  color='white'/></th>
                    <th className='px-4 py-3 font-medium capitalize text-gray-200'>DAILY QUESTS</th>
                    <th className='px-4 py-3 font-medium text-gray-200'>Points</th>
                    <th className='px-4 py-3 font-medium text-gray-200'>Actions</th>
                </tr>
            </thead>
            <tbody>
                 {data.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center py-6 text-gray-400">
                                No tasks available
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => <Task data={item} key={item.id} />)
                    )}
            </tbody>
         </table>
    </div>
  )
}

export default QuestTable