import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between max-w-6xl mx-auto p-3'>
        <h1 className='font-bold'>Auth App</h1>
        <ul className='flex gap-4'>
          <li className='text-sm font-semibold'><Link to="/">Home</Link></li>
          <li className='text-sm font-semibold'><Link to="/about">About</Link></li>
          <li className='text-sm font-semibold'><Link to="/sign-up">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header