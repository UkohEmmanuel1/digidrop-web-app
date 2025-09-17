import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full flex mt-8 justify-center shadow-lg shadow-slate-300 py-3'>
        <div className='flex flex-col md:flex-row gap-6 space-x-10 text-gray-200 max-w-5xl'>
                <div className='flex md:flex-row flex-col justify-center text-center gap-6 text-gray-400'>
                    <p className="">COPYRIGHT 2025</p>
                    <Link href={"/term-and-condition"} className="">TERMS AND CONDITIONS</Link>
                    <Link href={"/term-and-condition"} className=''>Privacy Policy</Link>
                </div>
                <div className='flex gap-4'>
                    <span>|</span>
                    <Link href={"/whitepaper"} className="">WHITEPAPER</Link>
                    <p className="">VISIT DIGIDROP</p>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                <Link href="https://twitter.com/yourhandle" target="_blank">
                  <FaTwitter className="text-xl  hover:text-blue-400 transition" />
                </Link>
                <Link href="https://facebook.com/yourhandle" target="_blank">
                  <FaFacebook className="text-xl hover:text-blue-600 transition" />
                </Link>
                <Link href="https://instagram.com/yourhandle" target="_blank">
                  <FaInstagram className="text-xl hover:text-pink-500 transition" />
                </Link>
                <Link href="https://linkedin.com/in/yourhandle" target="_blank">
                  <FaLinkedin className="text-xl hover:text-blue-500 transition" />
                </Link>
        </div>
        </div>
    </div>
  )
}

export default Footer