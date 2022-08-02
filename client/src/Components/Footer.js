import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { ChevronRightIcon } from '@heroicons/react/outline'

function Footer() {
    return (
        <div className=' w-full pt-12 border-b-2 border-white'>

            <div className='grid grid-cols-5 grid-rows-1 mb-20 pb-7'>

                <div className='text-white font-bold text-center'>
                    <h2> HEAR IT FIRST </h2>
                    <div className='inline-flex mx-auto object-center'>
                        <input className=' text-center w-40 h-9 text-xs font-light border-none mt-6' placeholder='Sign up for Emails' />
                        <ChevronRightIcon className='mt-7 w-50 h-8' />
                    </div>
                </div>


                <div className='text-white text-xs font-light text-left ml-20 pl-20'>
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
                <div className='text-white text-xs font-light text-left ml-5 pl-20'>
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


                <div className='text-white font-bold text-center pr-10 mr-10 '>
                    <h2> FOLLOW US </h2>
                    <div className='mt-6 flex mx-auto object-center text-3xl'>
                        <FaInstagram className='mr-5' />
                        <FaYoutube className='mr-5' />
                        <FaFacebook className='mr-5' />
                        <FaTwitter />
                    </div>
                </div>

            </div>

            <hr className='border-1 border-[#2C2C2D]' />

            <div className='pt-3 pb-3 grid grid-cols-3 grid-rows-1'>
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

                <div className='mx-auto text-sm object-center'>
                    <img className=' h-6 pl-10 ml-5' src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/stencil/cd0dff20-dac1-013a-d683-5a8d00511882/e/2dcfde50-f407-0135-4ccd-525400970412/img/creditcardlogos1.jpeg" />
                </div>
            </div>

        </div>
    )
}

export default Footer