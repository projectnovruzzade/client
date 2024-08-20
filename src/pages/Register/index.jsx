import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="section w-full h-full bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>Register</title>
      </Helmet>

      
      <div className="wrapper w-96 border-2 border-red-300 p-7 rounded-md">
        <h1 className="text-xl font-semibold mb-5">
          Register
        </h1>
        <form action="">
          <div className="input_content flex justify-center mb-4">
            <input type="text" placeholder="Username" className="w-full px-1 py-1 outline-none border border-gray-400 rounded-md focus:border-blue-500 transition-all text-sm"/>
          </div>
          <div className="input_content flex justify-center mb-4">
            <input type="email" placeholder="Email" className="w-full px-1 py-1 outline-none border border-gray-400 rounded-md focus:border-blue-500 transition-all text-sm"/>
          </div>
          <div className="input_content flex justify-center">
            <input type="password" placeholder="Password" className="w-full px-1 py-1 outline-none border border-gray-400 rounded-md focus:border-blue-500 transition-all text-sm"/>
          </div>
          <button className="ml-1 font-semibold px-2 w-2/6 py-1 mt-5 rounded-md bg-orange-400">
            Register
          </button>
        </form>
        <p className='mt-5 text-sm text-blue-400'>
          Have an account ? <Link to={"/login"} className='underline font-semibold'>Login</Link>
        </p>
      </div>
    </section>
  )
}

export default Register