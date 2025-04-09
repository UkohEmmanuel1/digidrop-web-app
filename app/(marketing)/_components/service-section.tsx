import Image from 'next/image'
import React from 'react'
import BenefitSection from './benefit-section'

const ServiceSection = () => {
  return (
    <section className="w-full min-h-screen -mt-24 mb-8 bg-[#1C1C1C]/90  bg-[url('/assets/pattern-bg.png')] bg-cover bg-no-repeat bg-center bg-blend-multiply p-6 ">
        <div className="container py-24 mx-auto flex flex-col md:flex-row gap-2">
            <div className='max-w-2xl'>
                <h1 className='text-4xl py-6 px-4 mb-4 tracking-tight font-bold text-white text-balance font-chakra leading-12 uppercase'>Complete multiple quests and collect as Many points as you can.</h1>
                <p className="text-md font-normal text-white font-chakra text-balance max-w-xl">
                His pass serves as a platform to store and redeem 
                rewards, such as Shards through task completion and
                 social quests. During the game demo stage, you can 
                 accumulate Shards to later convert them into
                  $ddx (DIGIDROP Token) 
                  Think of the Black Pass as a digital profile within Astra Nova,
                   preserving a player's on-chain achievements indefinitely. 
                Only Black Pass holders will have access to claim the upcoming $DDX Airdrop.
                </p>
            </div>
            <div className="">
                <h1 className='text-9xl bg-gradient-to-tr from-[#004AAD] via-[#665BC9] to-[#CB6CE6] bg-clip-text text-transparent md:text-[220px] font-extrabold font-chakra'>$DDX</h1>
                <Image src={"/assets/brand.png"} alt="brand" width={350} height={350} />
            </div>
        </div>
        <div className="w-full container">
            <h2 className='text-3xl font-bold uppercase text-white font-chakra leading-6 tracking-tight'>how to get the black pass</h2>
            <div className=" flex-col md:flex-row flex w-full md:max-w-[950px] px-12 mx-auto gap-4 md:justify-between text-white items-center">
                <div className='flex gap-3 flex-col w-full md:max-w-[220px] items-center'>
                    <Image src={"/assets/wallet-icon.png"} alt='wallet-icon' width={63} height={63} />
                    <p className="text-xl font-chakra text-center font-semibold leading-6">1. Connect an EVM 
                    Wallet</p>
                    <p className="text-lg font-medium tracking-tight text-center leading-4 font-chakra">If you don’t have one, 
                    create it here </p>
                </div>
                <div className='flex gap-3 flex-col w-full md:max-w-[220px] items-center'>
                    <Image src={"/assets/mint-icon.png"} alt='wallet-icon' width={63} height={63} />
                    <p className="text-xl font-chakra text-center font-semibold leading-8">2. Mint the Black pass</p>
                    <p className="text-lg font-normal text-center tracking-tight leading-6 font-chakra">Black Pass is a non-transferable  Soulbound
                            Token (SBT) associated with your  wallet and
                            will be forever in your wallet. </p>
                </div>
                <div className='flex gap-3 flex-col w-full md:max-w-[220px] items-center'>
                    <Image src={"/assets/star.png"} alt='wallet-icon' width={56} height={63} />
                    <p className="text-xl font-chakra text-center font-semibold leading-8">3. Begin your 
                    journey</p>
                    <p className="text-lg font-normal text-center tracking-tight leading-6 font-chakra">Start participating in the quests and collecting your rewards. </p>
                </div>
            </div>
        </div>
        <BenefitSection/>
    </section>
  )
}

export default ServiceSection