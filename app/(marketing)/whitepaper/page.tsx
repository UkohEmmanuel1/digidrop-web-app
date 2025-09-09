import React from 'react'

const WhitePaper = () => {
  return (
    <div className='w-full min-h-screen relative bg-[#1F406B]/40'>
            <div className="container max-w-5xl text-white  mx-auto pt-10">
                <h1 className='text-5xl font-bold font-chakra text-center py-4'>Our Whitepaper</h1>
                <p className="font-bold text-xl text-center">Tokenizing Engagement & Marketing in the Web3 Era </p>
                <div className="w-full">
                    <h3>Abstract</h3>
                    <p className="">Digidrop is a Web3 SocialFi platform designed to transform how marketing and engagement are incentivized. Currently in beta, Digidrop enables users to earn rewards
                         in crypto for liking, sharing, and engaging with promotional content. 
                         By aligning user participation with transparent, on-chain rewards, 
                         Digidrop offers brands more authentic reach while empowering users to 
                         monetize their influence.
                    </p>
                    <h3>1. Introduction</h3>
                    <p className="">In the Web2 landscape, users drive attention—but only platforms 
                        and advertisers benefit financially. Digidrop introduces a new model where 
                        engagement is a paid, provable, and fair exchange. 
                        Brands get exposure, users get rewarded, and communities grow stronger.
                    </p>
                    <h3 className="">2. Problem Statement</h3>
                     <ul>
                        <li>No Incentive for Engagement: Social media users create value but receive no compensation.</li>
                        <li>Lack of Transparency: Influencer and ad metrics are often unverifiable or inflated.</li>
                          <li>Inefficient Marketing Spend: Brands waste budget on low-quality engagement.</li>  
                          <li>Data Silos: Users’ attention and activity are locked in centralized platforms.</li>
                     </ul>

                     <h3>3. The Digidrop Solution</h3>
                     <span>Digidrop flips the model by allowing:</span>
                       <li> Marketers to create engagement-driven campaigns.</li>
                       <li>Users to earn rewards for verifiable likes, shares, and participation.</li> 
                        <li>Communities to amplify messages and grow through incentive alignment.</li>
                       <li>All activity is logged on-chain, making engagement measurable, provable, and valuable</li> 
                </div>
            </div>
    </div>
  )
}

export default WhitePaper