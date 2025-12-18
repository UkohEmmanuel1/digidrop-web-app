"use client"
import { useGetLeaderboardStats } from '@/types/hooks/useGetLeaderBoard'
import React from 'react'

type LeaderBoard={
    rank: number,
    names: string,
    wallet: string,
    scored_point: number,
    color?: string
}


const COLORS = [
  "#E8B810",
  "#2B98E6",
  "#B837F5",
  "#26F7C5",
  "#F945C6",
]

const BoardTable = () => {

    const {data, isLoading} = useGetLeaderboardStats()
    
    if(isLoading){
        return <p>Loading position ...</p>
    }
  return (
    <table className='w-full'>
        <thead className='w-full border-t border-b py-4 border-y-white/40 '>
            <tr className='grid grid-cols-3 gap-2 py-2 text-white'>
                <th>POSITION</th>
                <th>WALLET ADDRESS</th>
                <th>TOTAL POINTS</th>
            </tr>  
        </thead>
        <tbody>
            {data.map((row:LeaderBoard, idx:number) => (
                <TableRow
                    key={row.rank || idx}
                    data={{
                        ...row,
                        color: COLORS[idx % COLORS.length],
                    }}
                    />
            ))}
        </tbody>
    </table>
  )
}

export default BoardTable

type RowProp ={
    data:{
        rank: number,
        names: string,
        wallet: string,
        scored_point: number,
        color?: string
    },
    
}

const TableRow = ({data}:RowProp)=>{
    return (
        <tr style={{ backgroundColor: data.color }} className={`grid grid-cols-4 gap-2 border mb-2 text-white box-border w-full h-full py-4`}>
            <td className='text-md font-medium text-center'>{data.rank}</td>
            <td className='text-md font-medium text-center'>{data?.wallet}</td>
            <td className='text-md font-medium text-center'>{data?.scored_point}</td>
        </tr>
    )
}