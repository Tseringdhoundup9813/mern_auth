import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [formData,setFormData] = useState({});
  const[error,setError] = useState(false);
  const[isLoading,setIsLoading] = useState(false);

  const handleChange = (e)=>{
      setFormData({...formData,[e.target.id]:e.target.value})
  }
  console.log(formData);

  async function handleSubmit(e){
    e.preventDefault();
    try{
      setIsLoading(true);
      const res = await fetch("api/auth/signup",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      setIsLoading(false);
      if(data.status==false){
        setError(true);
        return;
        
      }
      setError(false);

    }catch(error){
      setIsLoading(false);
      setError(true);
    }
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" onChange={handleChange} placeholder='username' id ="username"
          className='bg-slate-100 p-3 rounded-lg'/>

        <input type="text" onChange={handleChange} placeholder='email' id ="email"
          className='bg-slate-100 p-3 rounded-lg'/>
        
        <input type="text" onChange={handleChange} placeholder='password' id ="password"
          className='bg-slate-100 p-3 rounded-lg'/>
        
        <button className='bg-slate-700 text-white p-2 
        rounded-lg uppercase hover:opacity-95 disable:opacity-80' disabled={isLoading}>{isLoading?'...loading':'Sign Up'}</button>
      </form>
      <div>
        <p>Have an account</p>
        <Link to="/sign-in">
          <pan className="text-blue-400">Sign in</pan>
        </Link>
      </div>
      <p className='text-red-600 my-5'>{error&&"Something went wrong"}</p>
    </div>
  )
}

export default SignUp