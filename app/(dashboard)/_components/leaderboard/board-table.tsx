"use client"
import React from 'react'



const board_records=[
    {
        id: 1,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 1888,
        color: "#E8B810"
    },
    {
        id: 2,
        username: "mike",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 1888,
        color: "#2B98E6"
    },
    {
        id: 3,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 3190,
        color: "#B837F5"
    },
    {
        id: 4,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 2190,
        color: "#26F7C5"
    },
    {
        id: 5,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 1888,
        color: "#F945C6"
    },
    {
        id: 6,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 1888,
        color: "#5445FF"
    },
    {
        id: 7,
        username: "henry24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 1888,
        color: "#757575"
    },
    {
        id: 8,
        username: "john24",
        invitedBy: "fe4586dcd....88fe99dd",
        point: 3888,
        color: "#F945C6"
    },
]

const colors = []

const BoardTable = () => {
  return (
    <table className='w-full'>
        <thead className='w-full border-t border-b py-4 border-y-white/40 '>
            <tr className='grid grid-cols-4 gap-2 py-2 text-white'>
                <th>POSITION</th>
                <th>USERNAME</th>
                <th>INVITED BY</th>
                <th>TOTAL POINTS</th>
            </tr>  
        </thead>
        <tbody>
            {board_records.map((row, idx) => (
                <TableRow data={row} key={idx}/>
            ))}
        </tbody>
    </table>
  )
}

export default BoardTable

type RowProp ={
    data:{
        id: number,
        username: string,
        invitedBy: string,
        point: number,
        color: string
    },
    
}

const TableRow = ({data}:RowProp)=>{
    return (
        <tr style={{ backgroundColor: data.color }} className={`grid grid-cols-4 gap-2 border mb-2 text-white box-border w-full h-full py-4`}>
            <td className='text-md font-medium text-center'>{data.id}</td>
            <td className='text-md font-medium text-center flex gap-2'>
                <img src={"/assets/dlogo.png"} alt="" className='h-6 w-6 bg-black p-1 rounded-full -rotate-90'/>
                {data.username}
                </td>
            <td className='text-md font-medium text-center'>{data.invitedBy}</td>
            <td className='text-md font-medium text-center'>{data.point}</td>
        </tr>
    )
}