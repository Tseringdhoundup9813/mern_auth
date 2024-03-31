import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {signInFailure,signInSuccess,signInStart} from "../redux/user/userSlice"
import {useDispatch,useSelector} from "react-redux"

function SignIn() {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData,setFormData] = useState({});
  const {loading,error}  =useSelector((state)=>state.user)
  console.log(error);

  const handleChange = (e)=>{
      setFormData({...formData,[e.target.id]:e.target.value})
  }


  async function handleSubmit(e){
    e.preventDefault();
    try{
        dispatch(signInStart());
        const res = await fetch("api/auth/signin",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.status==false){
        dispatch(signInFailure(data))
        return;
        
      }
      dispatch(signInSuccess(data))

      navigate('/')

    }catch(error){
     dispatch(signInFailure(error))
    }
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type="text" onChange={handleChange} placeholder='email' id ="email"
          className='bg-slate-100 p-3 rounded-lg'/>
        
        <input type="text" onChange={handleChange} placeholder='password' id ="password"
          className='bg-slate-100 p-3 rounded-lg'/>
        
        <button className='bg-slate-700 text-white p-2 
        rounded-lg uppercase hover:opacity-95 disable:opacity-80' disabled={loading}>{loading?'...loading':'Sign In'}</button>
      </form>
      <div>
        <p>Dont have an account</p>
        <Link to="/sign-up">
          <pan className="text-blue-400">Sign up</pan>
        </Link>
      </div>
      <p className='text-red-600 my-5'>{error?error.message||"Something went wrong":''}</p>
    </div>
  )
}

export default SignIn