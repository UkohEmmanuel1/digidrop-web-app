import React from 'react'
import MintPass from '../_components/dashboard/card-pass-select'
import { getDigiPasses } from '@/app/data/digi-pass/pass'
import { DigiPass } from '@/types/response-type'

const BuyPage = async () => {
    const digi_passes = await getDigiPasses();

    return (
        // Main Wrapper: Kept gradient, ensured min-h-screen covers full viewport
        <div className='w-full min-h-screen bg-gradient-to-b from-[#3B1F834D] to-[#004AAD80] flex flex-col items-center'>
            
            <div className='container flex flex-col items-center py-16 px-4 md:px-6'>
                
                {/* Header Section */}
                <div className="text-center space-y-3 mb-12">
                    <h2 className='text-4xl md:text-5xl font-bold font-chakra text-gray-100 uppercase tracking-wider'>
                        CHOOSE YOUR PATH
                    </h2>
                    <p className="text-lg md:text-xl font-medium font-chakra text-gray-300 tracking-wide">
                        Select your <span className='text-brandColor drop-shadow-sm'>soulboundpassport</span> to the Digiverse
                    </p>
                </div>

                {/* Cards Container 
                   - Added 'flex-wrap' and 'justify-center' to handle the new mobile-first card widths cleanly.
                   - Replaced 'md:max-w-4xl' with a layout that adapts to the number of cards.
                */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full gap-8">
                    {digi_passes.map((card: DigiPass, idx: number) => {
                        return (
                            <MintPass data={card} key={idx} />
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default BuyPage