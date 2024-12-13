// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
          <img className='w-16 ml-8  mix-blend-multiply' src="https://www.logosvgpng.com/wp-content/uploads/2021/12/glide-apps-logo-vector.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with GlideGo</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home