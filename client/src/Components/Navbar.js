import React from 'react'
import { SearchIcon, UserIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
// import Assets from '../Assets/Assets'
import skullcandylogo from '../Assets/skullcandylogo.png'
import americanflag from '../Assets/americanflag.png'
import { useHistory } from 'react-router-dom'

function Navbar() {
    let history = useHistory()

    function shopClick() {
        history.push('/shop')
    }

    function homeClick() {
        history.push('/home')
    }

    return (
        <div className='w-screen h-[60px] z-10 fixed bg-black drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='pl-14 flex cursor-pointer items-center'>
                    <div onClick={homeClick} className='flex'>
                        <img className='w-6 h-8' src={skullcandylogo}></img>
                        <h1 className='text-3xl tracking-tighter text-white mr-4 font-medium'>
                            Not Skullcandy</h1>
                    </div>

                    <h5 onClick={shopClick} className='text-white text-xs font-extralight pl-4'> SHOP </h5>
                    <h5 className='text-white text-xs font-extralight pl-6'> INSIDE SKULLCANDY </h5>
                </div>

                <div className='pr-14 flex items-center cursor-pointer'>
                    <h5 className='text-white text-xs mr-8 font-extralight pl-6'> Support </h5>
                    <img className='w-6 h-6 mr-8 rounded-xl' src={americanflag} />
                    <UserIcon className=' w-8 h-6 mr-8 font-light text-white' />
                    <SearchIcon className=' w-8 h-6 mr-8 font-light text-white' />
                    <ShoppingBagIcon className=' w-8 h-6 text-white' />

                </div>
            </div>
        </div>
    )
}

export default Navbar