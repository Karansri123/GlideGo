/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [captainData , setCaptainData] = useState('')
  
    const submitHandler = (e)=>{
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
      setEmail('');
      setPassword('')
    }
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
       <div>
       <img className='w-20 mb-3 mix-blend-multiply' src="https://www.logosvgpng.com/wp-content/uploads/2021/12/glide-apps-logo-vector.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
         required 
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         className="bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
         type="email"
          placeholder="email@example.com" 
          />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>{
         setPassword(e.target.value)
        }}
           className="bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        type="password"
         placeholder="password"
          />

        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">Login</button>
      </form>
      <p className="text-center">Join the Team? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
       </div>
       <div>
        <Link 
        to='/login'
        className="bg-[#34495e] flex items-center justify-center  text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">Sign in as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin