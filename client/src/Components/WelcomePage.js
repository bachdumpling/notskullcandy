import React from 'react'
import { useHistory } from 'react-router-dom'

function WelcomePage({ user }) {
    let history = useHistory()

    // console.log(user.name)

    function handleLogout(e) {

        fetch(`/logout`, {
            method: "DELETE"
        })

        history.push('/home')
        window.location.reload()
    }

    return (
        <div>
            <div className='bg-white pt-48 pb-44 grid justify-items-center'>
                <h1 className='text-black font-extrabold text-6xl pb-12 text-center uppercase flex items-center'>
                    {user ? `Welcome, ${user.username}!` : ''}
                </h1>
                <div className=' w-2/12 h-12 bg-[#383838] text-center pt-3'>
                    <button onClick={handleLogout} className='text-white font-bold text-xs'>
                        LOG OUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage