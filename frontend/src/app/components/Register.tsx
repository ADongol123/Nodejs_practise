import Image from 'next/image'
import React from 'react'
import { AiOutlineLock } from "react-icons/ai"
import { FcFolder } from "react-icons/fc"
const Register = ({ handleFormSubmit, formData, handleInputChange, handleProductImageUploader,handleSignIn }: any) => {
  return (
    <div className='shadow-lg rounded-md h-[500px] w-[320px]'>
      <div className='flex flex-col items-center py-7 px-3'>
        <h1 className='text-3xl font-extrabold text-[#f75c47]'>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <div className='mt-[20px]'>
            <p className='text-sm text-[darkgray]'>Username</p>
            <input className='p-1 rounded-sm focus:outline-none border border-[black]' type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className='mt-[20px]'>
            <p className='text-sm text-[darkgray]'>Email Address</p>
            <input className='p-1 rounded-sm focus:outline-none border border-[black]' name="email" type="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className='mt-[20px]'>
            <p className='text-sm text-[darkgray]'>Password</p>
            <input className='p-1 rounded-sm focus:outline-none border border-[black]' type="password" value={formData.password} name="password" onChange={handleInputChange} />
          </div>
          <div className="flex items-center justify-center my-5">
            <label className="relative inline-flex items-center">
              <input value={""} type="file" accept="image/" className="hidden" name="pic" onChange={handleProductImageUploader} />
              <div className="bg-[#0a8080] hover:bg-[#0b6666] text-white font-semibold gap-2 py-2 px-4 rounded flex items-center">
                <FcFolder />
                <p>Select File</p>
              </div>
              <span className="ml-2" id="selected-file"></span>
            </label>
            <Image src={formData?.pic} width={50} height={50} className='w-[80px] h-[50px]' alt="" />
          </div>
          <button type='submit' className='bg-[#0a8080] text-[white] flex items-center justify-center w-[200px] h-[30px] rounded-lg'>
            <AiOutlineLock />
            <p>Register here</p>
          </button>
          <p className='mt-4 mb-4 text-sm text-[#0a8080] cursor-pointer' onClick={handleSignIn}>Go to SignIn</p>
        </form>
      </div>
    </div>
  )
}

export default Register