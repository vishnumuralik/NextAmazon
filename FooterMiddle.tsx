import React from 'react'
import logo from '../../images/logo.png'
import Image from "next/image"

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_blue text-white'>
        <div className='w-full border-b-[1px] border-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
            <div className='w-full grid grid-cols-4 place-items-center items-start'>
            <div>
                <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to Know Us</h3>
                <ul className="flex flex-col gap-2 font-bodyFont">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>
            </div>
            <div >
                <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Connect with Us</h3>
                <ul className="flex flex-col gap-2 font-bodyFont">
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div >
                <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Make Money with Us</h3>
                <ul className="flex flex-col gap-2 font-bodyFont">
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>
            </div>
            <div >
                <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Let Us Help You</h3>
                <ul className="flex flex-col gap-2 font-bodyFont">
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        </div>
                <div className='w-full flex gap-6 items-center justify-center py-6'>
                    <div className="w-full h-full flex items-center justify-center gap-4 p-6">
                        <Image className="w-24" src={logo} alt="logo" />
                            <p className="text-sm -mt-4">
                                All rights reserved{" "}
                                <a href="http://localhost:3000/" className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" target="_blank"aria-label="Read more about Seminole tax hike"></a>
                            </p>
                             <div className='flex gap-2' >
                            <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
                         </div> 
                    </div>  
                </div>
                <div className='h-10 text-xs p-0 px-20 m-0 tracking-wide'>
               <p className='flex flex-col mt-2 items-center'> Australia
                    Brazil
                    Canada
                    China
                    France
                    Germany
                    Italy
                    Japan
                    Mexico
                    Netherlands
                    Poland
                    Singapore
                    Spain
                    Turkey
                    United Arab Emirates
                    United Kingdom
                    United States
                    </p>
                </div>

                                        <div className='w-full bg-black text-white'>
                                        <div className='w-full grid grid-cols-4 place-items-center items-center'>
                                        <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3 mt-2'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>Amazon Web Services</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Scalable Cloud</li>
                                            <li>& Computing Services</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                        </div>
                                        </div>
                                        <div className='w-full bg-black text-white'>
                                        <div className='w-full grid grid-cols-4 place-items-center items-center'>
                                        <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3  mt-2'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>Amazon Web Services</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Scalable Cloud</li>
                                            <li>& Computing Services</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className='font-titleFont text-white text-sm mb-3'>AbeBooks</h3>
                                        <ul className="flex flex-col gap-2 text-xs">
                                            <li>Books, art</li>
                                            <li>& collectibles</li>
                                        </ul>
                                    </div>
                                        </div>
                                        </div>
                                        <div className='flex flex-col gap-2 text-xs items-center w-full bg-black p-9 tracking-normal'>
                                            <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads© 1996-2023, Amazon.com, Inc. or its affiliate</p>
                                        </div>
                </div>
    </div>
  )
}

export default FooterMiddle