import React from 'react'
import { AiOutlineLock } from "react-icons/ai"

const Login = ({ handleFormSubmit, handleInputChange, formData, handleRegister }: any) => {

  return (
    <div className='shadow-lg rounded-md h-[500px] w-[280px]'>
      <div className='flex flex-col items-center py-7 px-3'>
        <h1 className='text-3xl font-extrabold text-[#f75c47]'>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <div className='mt-[20px]'>
            <p className='text-sm text-[darkgray]'>Email Address</p>
            <input className='p-1 rounded-sm focus:outline-none ' name="email" type="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className='mt-[20px]'>
            <p className='text-sm text-[darkgray]'>Password</p>
            <input type="password" value={formData.password} name="password" onChange={handleInputChange} />
          </div>
          <p className='mt-4 mb-4 text-sm text-[#0a8080]'>Forgot email or password?</p>
          <button type='submit' className='bg-[#0a8080] text-[white] flex items-center justify-center w-[200px] h-[30px] rounded-lg'>
            <AiOutlineLock />
            <p>Sign In</p>
          </button>
        </form>
        <p className='mt-4 mb-4 text-sm text-[#0a8080] cursor-pointer' onClick={handleRegister}>Register first to login</p>
      </div>
    </div>
  )
}

export default Login