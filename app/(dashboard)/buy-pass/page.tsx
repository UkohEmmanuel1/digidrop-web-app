import React from 'react'
import MintPass from '../_components/dashboard/card-pass-select'
import { getDigiPasses } from '@/app/data/digi-pass/pass'
import { DigiPass } from '@/types/response-type'



const BuyPage = async () => {
    const digi_passes = await getDigiPasses();
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#3B1F834D] to-[#004AAD80]'>
        <div className='container flex  flex-col items-center text-white py-10'>
                <h2 className='text-4xl font-bold font-chakra mb-8 uppercase'>WELCOME</h2>
                <p className="text-lg leading-3 tracking-wide font-medium font-chakra">Select Your Mint <span className='text-brandColor'>soul-bound NFT</span>  pass</p>

                <div className="flex flex-col md:flex-row  w-full md:max-w-4xl mt-10 items-center gap-6">
                        {digi_passes.map((card:DigiPass, idx: number)=>{
                            return (
                                <MintPass data={card} key={idx}/>
                            )
                        })}
                </div>
        </div>
    </div>
  )
}

export default BuyPage