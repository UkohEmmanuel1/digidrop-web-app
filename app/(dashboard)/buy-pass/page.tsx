import React from 'react'
import MintPass from '../_components/dashboard/card-pass-select'


const card_pass = [
    {
        id: "48dgkj93",
        card_img: "/assets/black.png",
        name: "Mint Black Pass",
        price: 2,
        point: "2x"
    },
    {
        id: "jhhsd485",
        card_img: "/assets/gold.png",
        name: "Mint Gold Pass",
        price: 10,
        point: "8x"
    },
    {
        id: "eu3094a0",
        card_img: "/assets/white.png",
        name: "Mint White Pass",
        price: 5,
        point: "4x"
    },
    

]
const BuyPage = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#3B1F834D] to-[#004AAD80]'>
        <div className='container flex  flex-col items-center text-white py-10'>
                <h2 className='text-4xl font-bold font-chakra mb-8 uppercase'>WELCOME</h2>
                <p className="text-lg leading-3 tracking-wide font-medium font-chakra">Select Your Mint <span className='text-brandColor'>soul-bound NFT</span>  pass</p>

                <div className="flex flex-col md:flex-row  w-full md:max-w-4xl mt-10 items-center gap-6">
                        {card_pass.map((card, idx)=>{
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