"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const HomePage = () => {
  const router = useRouter()
  const handleFormSubmit = (event: any) => {
    localStorage.clear();
    router.push("/")
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleFormSubmit} className='border border-[black] cursor-pointer'>Logout</button>
    </div>
  )
}

export default HomePage