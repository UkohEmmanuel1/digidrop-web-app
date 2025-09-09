'use client';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';


type CardPassProp={
    data:{
        id: string, 
        card_img: string,
        price: number,
        name: string,
        point: string
    }
}
const MintPass = ({data}:CardPassProp) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/buy-pass/${data.id}`)} className='flex w-[80%] md:w-[320px] hover:cursor-pointer hover:bg-black/40  border flex-col items-center gap-4'>
        <Image src={data.card_img} alt={data.name} width={290} height={200}/>
        <h3 className='text-lg font-mono font-chakra font-medium text-center py-2'>{data.name}</h3>
        <p className="font-chakra">{data.point} power</p>
        <p className="font-semibold text-lg">${data.price}</p>
    </div>
  )
}

export default MintPass