import { Button } from '@/components/ui/button'
import React from 'react'
import BoardTable from '../../_components/leaderboard/board-table'

const LeaderBoard = () => {
  return (
    <div className='w-full min-h-screen py-8 bg-[#1F406B]/40'>
        <div className='container max-w-5xl mx-auto pt-10'>
          <span className='text-white box-border border border-white bg-[#1A1D1C] px-8 py-2'>Season 1</span>
          <div className="flex items-center py-4 mt-10 text-white justify-between">
            <h2 className='text-4xl font-bold font-chakra'>LEADERBOARD</h2>
            <span className='text-3xl font-semibold font-chakra'>YOUR POSITION : 9169/219814</span>
          </div>
          <div className='w-full mt-8'>
              <BoardTable />
          </div>
        </div>
    </div>
  )
}

export default LeaderBoard