import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='username' id ="username"
        className='bg-slate-100 p-3 rounded-lg'/>
                <input type="text" placeholder='email' id ="username"
        className='bg-slate-100 p-3 rounded-lg'/>
        <input type="text" placeholder='password' id ="username"
        className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white p-2 
        rounded-lg uppercase hover:opacity-95 disable:opacity-80'>Sign up</button>
      </form>
      <div>
        <p>Have an account</p>
        <Link to="/sign-in">
          <pan className="text-blue-400">Sign in</pan>
        </Link>
      </div>
    </div>
  )
}

export default SignUp