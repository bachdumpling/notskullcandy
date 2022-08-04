import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { ChevronRightIcon } from '@heroicons/react/outline'

function Footer() {
    return (
        <div className=' z-20 w-full pt-12 border-b-2 border-white'>

            <div className='grid grid-cols-5 grid-rows-1 justify-items-center mb-20 pb-5'>

                <div className='text-white font-bold text-center grid'>
                    <h2> HEAR IT FIRST </h2>
                    <div className='grid grid-flow-col -translate-y-16'>
                        <input type='text' className='text-black text-center w-40 h-9 text-xs font-light border-none outline-none' placeholder='Sign up for Emails' />
                        <ChevronRightIcon className=' w-50 h-8' />
                    </div>
                </div>


                <div className='text-white text-xs font-light text-left'>
                    <ul>
                        <li className='mt-3'> Help Center </li>
                        <li className='mt-3'> Warranty</li>
                        <li className='mt-3'> Contact Us </li>
                        <li className='mt-3'> Product Help </li>
                        <li className='mt-3'> Order Status </li>
                        <li className='mt-3'> Recycling </li>
                        <li className='mt-3'> Pay Later </li>
                    </ul>
                </div>
                <div className='text-white text-xs font-light text-left'>
                    <ul>
                        <li className='mt-3'> Product </li>
                        <li className='mt-3'> Selector</li>
                        <li className='mt-3'> Custom </li>
                        <li className='mt-3'>Product</li>
                        <li className='mt-3'> Bulk Orders </li>
                        <li className='mt-3'> Press </li>
                        <li className='mt-3'> Releases </li>
                        <li className='mt-3'> Sound </li>
                        <li className='mt-3'> Advice </li>
                    </ul>
                </div>
                <div className='text-white text-xs font-light text-left'>
                    <ul>
                        <li className='mt-3'> About </li>
                        <li className='mt-3'> Born in PC</li>
                        <li className='mt-3'> Careers </li>
                    </ul>
                </div>


                <div className='text-white font-bold text-center '>
                    <h2> FOLLOW US </h2>
                    <div className='mt-6 grid grid-flow-row grid-cols-4 grid-rows-1 justify-items-center text-2xl'>
                        <div className='mx-2'>
                            <FaInstagram />
                        </div>
                        <FaYoutube />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>

            </div>

            <hr className='border-1 border-[#2C2C2D]' />

            <div className='pt-3 pb-3 grid grid-cols-3 grid-rows-1 justify-items-center'>
                <div className='text-white opacity-80 text-xs text-center font-extralight tracking-wide'>
                    <ul className='inline-flex'>
                        <li>Privacy Policy</li> |
                        <li>Term of Use</li> |
                        <li>California Notice of Collection</li>
                    </ul>
                </div>

                <div className='text-white opacity-80 text-xs font-extralight tracking-wide text-center'>
                    <p>© 2022 Skullcandy.com All Rights Reserved</p>
                </div>

                <div className='text-sm'>
                    <img className=' h-6 pl-10 ml-5' src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/stencil/cd0dff20-dac1-013a-d683-5a8d00511882/e/2dcfde50-f407-0135-4ccd-525400970412/img/creditcardlogos1.jpeg" />
                </div>
            </div>

        </div>
    )
}

export default Footer