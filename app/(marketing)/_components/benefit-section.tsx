import React from 'react'
import BCard from './BCard'
import Image from 'next/image'



const BenefitSection = () => {
  return (
    <section className='w-full mt-6 mb-8'>
        <h1 className='text-2xl text-white font-semibold mb-6 uppercase font-chakra text-center leading-9 px-6 py-2'>bENEFITS OF HAVING THE BLACK PASS</h1>
         <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4'>
            <BCard icon={<Image src={"/assets/star-brand.png"} alt='icon-1' width={100} height={100}/>} text='Black Pass, through the free mint non-transferable Soulbound Token (SBT), 
                stores all your information within the 
                Astra Nova gaming ecosystem.'
                 heading='One Passport to the  Astra Nova Universe'/>

                <BCard icon={<Image src={"/assets/user-brand.png"} alt='icon-2' width={100} height={100}/> } 
                text='Earn Shards for every quest in the portal! 
                      Your achievements are tracked and 
                      recorded on the Black Pass, unlocking 
                      exclusive benefits and rewards.'
                 heading='Earn Rewards at Every Turn'/>

              <BCard icon={<Image src={"/assets/logo-brand.png"} alt='icon-3' width={100} height={100} /> } 
                 text='With your Black Pass, you can collect  Shards, and gain exclusive access to  upcoming digital collectable drops, IRL  events, merchandise, and more! Plus,  earn passive income with NFT staking  opportunities and much more in store.'
                 heading='One Platform, Endless Features'/>

        <BCard icon={<Image src={"/assets/count-brand.png"} alt='icon-3' width={100} height={100} />  } 
        text='Ready to elevate your game? Collect  more Shards and unlock a treasure trove  of $RVV tokens! Transform your Shards  into Astra Nova tokens ($RVV) on the big  day of TGE. The more Shards you gather,  the bigger your $RVV haul.'
                 heading='More Shards, More $RVV!'/>
         </div>
    
    </section>
  )
}

export default BenefitSection