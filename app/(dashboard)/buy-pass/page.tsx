import React from 'react'
import MintPass from '../_components/dashboard/card-pass-select'
import { getDigiPasses } from '@/app/data/digi-pass/pass'
import { DigiPass } from '@/types/response-type'

const BuyPage = async () => {
  const digi_passes = await getDigiPasses();

  return (
    <div className="min-h-screen w-full bg-[url('/assets_icon/Pass-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      
      {/* Main Content Container */}
      <div className='container mx-auto flex min-h-screen flex-col items-center px-4 py-12 md:px-6 md:py-20'>
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-2xl">
          <h2 className="mb-4 font-chakra text-3xl font-bold uppercase leading-tight tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-md transition-opacity hover:opacity-80 sm:text-4xl md:text-5xl">
            Choose Your Path
          </h2>
          <p className="font-chakra text-base font-medium text-gray-200 drop-shadow-lg sm:text-lg md:text-xl">
            Select your soulbound passport to the Digiverse
          </p>
        </div>

        {/* Cards Container - Mobile: Stacked | Desktop: Horizontal Row */}
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-start md:gap-6 lg:gap-10">
          {digi_passes.map((card: DigiPass, idx: number) => (
            <div key={idx} className="flex justify-center">
              <MintPass data={card} />
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-auto pt-16 w-full">
           <p className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-black/60 p-4 text-center font-chakra text-xs leading-relaxed text-gray-300 backdrop-blur-md sm:text-sm">
             Passports are non-transferable community credentials used to access DigiDrop social and gamified participation. They hold no external monetary value.
           </p>
        </div>

      </div>
    </div>
  )
}

export default BuyPage