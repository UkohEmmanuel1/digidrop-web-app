import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import InfoBox from "./_components/info-box";
import ServiceSection from "./_components/service-section";
import BenefitSection from "./_components/benefit-section";
import BrandSupport from "./_components/brand-section";
import FAQ from "./_components/faq-section";
import LogoMark from "./_components/logo-mark";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
    <section className="min-h-screen w-full bg-[linear-gradient(to_bottom,#3B1F83_30%,#004AAD_75%,#1C1C1C_100%)]">
      <div className="flex flex-col justify-center mb-10 items-center gap-6">
            <h1 className="text-3xl md:text-6xl mt-6 leading-[90px] font-bold font-chakra text-white text-center max-w-3xl text-balance  py-4">DIGI DROP  REWARD AND LOYALTY PROGRAM </h1>
            <p className="text-xl text-blue-500 font-semibold font-chakra">Season 1</p>
            <p className="text-lg text-white font-normal font-chakra leading-7"><span className="font-semibold text-purple-500">DIGI DROP</span> is a SocialFI platform accessible through a unique SBT NFT, mintable at the time of joining.</p>
            <div className="w-full  mt-10 py-4  flex flex-col md:flex-row gap-4 justify-center items-center">

                <Image src={"/assets/black.png"} alt="black-pass" width={294} height={260} className="object-cover mt-4"/>
                       
                <Image src={"/assets/gold.png"} alt="gold-pass" width={362} height={320} className="mt-4 md:-mt-20"/>
            
                <Image src={"/assets/white.png"} alt="white-pass" width={294} height={260} className="mt-4"/>
                
            </div>
          
            <Button className="px-12 py-4 border-2 border-white bg-clip-border bg-gray-800 rounded-lg font- shadow-xl  font-medium">Sign In with X</Button>
            
      </div>    
    </section>
    <section className="w-full relative  h-screen bg-[url('/assets/sky-bg.png')] clip-path-v bg-cover bg-center bg-no-repeat">
       <Image src={"/assets/sky-2.png"} alt="second-image" width={800} height={500} className="absolute -top-24 -z-0 left-16 object-cover"/>
       <div className="container flex  p-6 max-w-6xl h-screen mx-auto  bg-contain z-10]">
            <div className="w-1/2">
               <InfoBox msg="invite a friend"/>
            </div>
            <div className="w-1/2 px-20 py-16  items-center justify-start flex gap-12 flex-wrap">
            <InfoBox msg="Daily Login"/>
            <InfoBox msg="Perform a task"/>
            <InfoBox msg="invite a friend"/>
            </div>
       </div>
    </section>
    <ServiceSection />
    <BrandSupport/>
    <FAQ/>
    <LogoMark/>
    <Footer/>
    </>
  );
}
