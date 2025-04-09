import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full py-4 sticky top-0 h-full z-10 md:h-14 text-gray-200 bg-[#0B0B0B]'>
       <div className='container mx-auto font-chakra flex flex-col md:flex-row justify-between items-center h-full'>
        <div className="flex gap-4">
            <div>
                <Link href={"/"}>Logo</Link>
            </div>
            
            <div className="hidden md:flex gap-6 font-medium items-center">
                <Link href={"/how-to-play"} className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>How to Play</Link>
                <Link href={"/faq"}>FAQ</Link>
            </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
            <Button className='border border-[#FAFAFA]'>Beta</Button>
            <Button asChild className='rounded-lg px-6 py-2 bg-gray-900 border border-[#FFFFFF]'>
              <Link href={"/login"}>Sign In</Link>
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar