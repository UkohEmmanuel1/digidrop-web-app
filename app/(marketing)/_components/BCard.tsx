import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type Prop ={
    icon: ReactNode
    heading: string
    text: string
}

const BCard = ({icon, text, heading}:Prop) => {
  return (
    <Card className='w-[80%] rounded-none flex flex-col items-center justify-center md:w-[280px] h-[500px] border bg-[#181818]/95 border-white'>
        <CardHeader>
            {icon}
       </CardHeader>
      <CardContent>
        <h2 className='font-chakra text-xl text-center uppercase text-white'>{heading}</h2>
        <p className="text-md text-white text-center leading-6 py-6 px-2 text-balance">
                {text}</p>
      </CardContent>
    </Card>
  )
}

export default BCard