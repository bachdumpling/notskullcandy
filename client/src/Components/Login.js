import React, { useEffect, useState } from 'react'

function Login( {onLogin} ) {

const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');


const [isLoading, setIsLoading] = useState(false);
const [errors, setErrors] = useState([]);



const userData = { username, password };


 function createUser(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



  function signup(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


    const renderFormSignIn = (
        <div className='h-6/12 pt-20 ml-28 pl-44 flex-shrink-0'>
            <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN IN </h1>
            <form onSubmit={createUser} className=''>
                <div className='text-left flex flex-col'>
                    <label className='text-sm pb-3'>Username:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='text' onChange={(e)=>setUsername(e.target.value)} name='username' required />
                </div>

                <div className='flex flex-col mb-10'>
                    <label className='text-sm pt-5 pb-3'>Password:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='password' onChange={(e)=>setPassword(e.target.value)} name='password' required />
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
        <div className='pt-20 ml-20 pl-44 flex-shrink-0'>
            <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN UP </h1>
            <form onSubmit={signup} className=''>
                <div className='text-left flex flex-col'>
                    <label className='text-sm pb-3'>Username:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='text' onChange={(e)=>setUsername(e.target.value)} name='username' required />
                </div>

                <div className='flex flex-col mb-10'>
                    <label className='text-sm pt-5 pb-3'>Password:</label>
                    <input className='bg-[#F6F6F6] border-2 w-6/12 h-12' type='password' onChange={(e)=>setPassword(e.target.value)} name='password' required />
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
            <div className='bg-white pt-20 pb-28'>
                <div className='grid grid-cols-2 grid-rows-1'>
                    {renderFormSignIn}
                    {renderFormSignUp}
                </div>
            </div>
        </div>
    )
}

export default Login