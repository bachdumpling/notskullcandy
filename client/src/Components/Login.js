import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login({ setUser }) {
  let history = useHistory()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);


  const [isVisible, setIsVisible] = useState(true);

  const handleClickVisible = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  const userData = { username, password };


  function signin(e) {
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
        r.json().then((user) => {
          setUser(user)
          userClick()
        });
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
        r.json().then((user) => {
          setUser(user)
          userClick();
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    // userClick()
  }

  function userClick() {
    history.push('/user')
  }

  const renderFormSignIn = (
    <div className='h-6/12 w-2/6 pt-20 shrink-0' style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN IN </h1>
      <form onSubmit={signin} className=''>
        <div className='text-left flex flex-col'>
          <label className='text-sm pb-3'>Username:</label>
          <input className='bg-[#F6F6F6] border-2 w-full h-12' type='text' onChange={(e) => setUsername(e.target.value)} name='username' required />
        </div>

        <div className='flex flex-col mb-5'>
          <label className='text-sm pt-5 pb-3'>Password:</label>
          <input className='bg-[#F6F6F6] border-2 w-full h-12' type='password' onChange={(e) => setPassword(e.target.value)} name='password' required />
        </div>
        <div className='grid justify-items-center'>
          <div className=' w-full mb-3 h-12 bg-[#383838] text-center pt-3'>
            <button onClick className='text-white font-bold text-xs'>
              SIGN IN
            </button>
          </div>
        </div>
      </form>

      <div className='grid justify-items-center'>
        <div className='  w-full h-12 bg-[#dedede] text-center pt-3'>
          <button onClick={handleClickVisible} className='text-black font-bold text-xs'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )

  const renderFormSignUp = (
    <div className='h-6/12 w-2/6 pt-20 shrink-0 absolute' style={{ visibility: !isVisible ? 'visible' : 'hidden' }}>
      <h1 className='text-black font-extrabold text-5xl pb-12'> SIGN UP </h1>
      <form onSubmit={signup} className=''>
        <div className='text-left flex flex-col'>
          <label className='text-sm pb-3'>Username:</label>
          <input className='bg-[#F6F6F6] border-2 w-full h-12' type='text' onChange={(e) => setUsername(e.target.value)} name='username' required />
        </div>

        <div className='flex flex-col mb-5'>
          <label className='text-sm pt-5 pb-3'>Password:</label>
          <input className='bg-[#F6F6F6] border-2 w-full h-12' type='password' onChange={(e) => setPassword(e.target.value)} name='password' required />
        </div>
        
        <div className='grid justify-items-center'>
        <div className='  w-full mb-3 h-12 bg-[#383838] text-center pt-3'>
          <button className='text-white font-bold text-xs'>
            SIGN UP
          </button>
        </div>
      </div>
      </form>
        <div className='grid justify-items-center'>
          <div className=' w-full h-12 bg-[#dedede] text-center pt-3'>
            <button onClick={handleClickVisible} className='text-black font-bold text-xs'>
              SIGN IN
            </button>
          </div>
        </div>
    </div>
  )

  function renderSign() {

  }

  return (
    <div>
      <div className='bg-white pt-20 pb-28'>
        <div className='grid justify-items-center'>
          {renderFormSignIn}
          {/* {renderSignUp{renderFormSignUp}} */}
          {renderFormSignUp}
        </div>
      </div>
    </div>
  )
}

export default Login