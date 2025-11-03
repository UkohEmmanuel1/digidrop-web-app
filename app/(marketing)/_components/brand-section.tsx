import Image from 'next/image'
import React from 'react'


const brands = [
  "/assets/brands/brand-1.png",
  "/assets/brands/brand-2.png",
  "/assets/brands/brand-3.png",
  "/assets/brands/brand-4.png",
  "/assets/brands/brand-5.png",
  "/assets/brands/brand-6.png",
  "/assets/brands/brand-7.png",
  "/assets/brands/brand-8.png",
  "/assets/brands/brand-9.png",
  "/assets/brands/brand-10.png",
  "/assets/brands/brand-11.png",
  "/assets/brands/brand-12.png",
  "/assets/brands/brand-13.png",
  "/assets/brands/brand-14.png",
  "/assets/brands/brand-15.png",
  "/assets/brands/brand-17.png",
  "/assets/brands/brand-18.png",
  "/assets/brands/brand-16.png",

  
]
const BrandSupport = () => {
  return (
    <section className='container mx-auto h-full relative bg-[#1C1C1C] py-12 mt-8  mb-8'>
        <h1 className='text-4xl text-center font-chakra font-bold uppercase text-white'>EXPANDING OUR REACH THROUGH STRATEGIC PARTNERSHIPS WITH PREMIUM PATRNER</h1>
        <div className="grid grid-cols-2 pt-10 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center">

            {/* IMAGES */}
            {brands.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
    </section>
  )
}

export default BrandSupport