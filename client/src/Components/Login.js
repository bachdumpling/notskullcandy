import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const renderFormSignIn = (
        <div className='ml-28 pl-44 flex-shrink-0'>
            <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN IN </h1>
            <form className=''>
                <div className='text-left flex flex-col'>
                    <label className='text-sm pb-3'>Email Address:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='text' name='email' required />
                </div>

                <div className='flex flex-col mb-10'>
                    <label className='text-sm pt-5 pb-3'>Password:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='password' name='pass' required />
                </div>

                <div className=' w-2/12 h-12 bg-[#383838] text-center pt-3'>
                    <button className='text-white font-bold text-xs'>
                        SIGN IN
                    </button>
                </div>
            </form>
        </div>
    )

    const renderFormSignUp = (
        <div className='ml-20 pl-44 flex-shrink-0'>
            <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN UP </h1>
            <form className=''>
                <div className='text-left flex flex-col'>
                    <label className='text-sm pb-3'>Email Address:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='text' name='email' required />
                </div>

                <div className='flex flex-col mb-10'>
                    <label className='text-sm pt-5 pb-3'>Password:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='password' name='pass' required />
                </div>

                <div className=' w-2/12 h-12 bg-[#383838] text-center pt-3'>
                    <button className='text-white font-bold text-xs'>
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    )

    return (
        <div>
            <div className='bg-white pt-12 pb-20'>
                <div className='grid grid-cols-2 grid-rows-1'>
                    {renderFormSignIn}
                    {renderFormSignUp}
                </div>
            </div>
        </div>
    )
}

export default Login