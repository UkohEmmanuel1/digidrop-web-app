import { getPassById } from '@/app/data/digi-pass/pass'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import PassActionButton from '../../_components/PassActionButton'


type Params = Promise<{ passId: string }>
const PassDetailPage = async ({params}:{params: Params}) => {
  const passParam = await params
  const passid = passParam.passId
  const signlePass = await getPassById(passid)
  console.log("pass", signlePass)
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#3B1F834D] to-[#004AAD80]'>
        <div className='container flex  flex-col items-center text-white py-10'>
            <h2 className='text-2xl font-semibold py-3'>WELCOME DIGIVERSE </h2>
            <p className="text-lg font-medium py-4">Mint your <span className='text-brandColor'>soul-bound NFT</span> pass</p>
            <div className='flex gap-4 items-center w-full max-w-6xl px-6 justify-between'>
              <div>
                <ul className='text-lg font-medium'>
                  <li className=' flex gap-2 space-y-4 mb-4'><Check size={24} color='white'/>  Regular access to platform features</li>
                  <li className='flex gap-2'>  <Check size={24} color='white'/> Earn {signlePass.point_power}x points on interactions</li>
                </ul>
              </div>
              <div className='flex flex-col items-center gap-8'>
                <p className="">{signlePass.pass_type}</p>
                <Image src={signlePass.card} alt='pass' width={380} height={270}/>
                <p className="text-md tracking-tight capitalize">{signlePass.name}</p>
                <p className=" text-xl font-bold">${signlePass.usd_price}</p>

                {/* <Button size={"lg"} className='px-20 py-1 bg-brandColor text-[#333333] font-medium'>Mint</Button> */}
                <PassActionButton pass={signlePass} />
              </div>
              <div>
                <ul className='font-medium text-lg'>
                  <li className=' flex gap-2 space-y-4 mb-4'><Check size={24} color='white'/> Early access to standard drops</li>
                  <li className=' flex gap-2 space-y-4 mb-4'><Check size={24} color='white'/> Basic voting rights in community polls</li>
                </ul>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default PassDetailPage