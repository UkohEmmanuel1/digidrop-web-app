import Image from "next/image"
import React from "react"

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
]

const BrandSupport = () => {
  return (
    <section className="w-full bg-[#1C1C1C] py-24">
      {/* Container */}
      <div className="mx-auto w-fit px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36">
        {/* Heading */}
        <h1 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl text-white font-chakra">
          EXPANDING OUR REACH THROUGH STRATEGIC PARTNERSHIPS
        </h1>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
          {brands.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              width={160}
              height={64}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSupport
