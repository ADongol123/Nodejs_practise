"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import FirstLogin from "../../../../public/images/firstLogin.png"
import SecondLogin from "../../../../public/images/secondLogin.png"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Login from '@/app/components/Login';
// import { useToasts } from 'react-toast-notifications';
const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  // const { addToast } = useToasts()
  const router = useRouter();
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/user/login", formData)
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // addToast('You have logged in successfully', { appearance: 'success', autoDismiss: true });
        localStorage.setItem('name', response?.data?.name)
        localStorage.setItem('email', response?.data?.email)
        localStorage.setItem('token', response?.data?.token)
        router.push('/pages/homepage')
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  const handleRegister = (event: any) => {
    router.push("/pages/registerpage")
  }

  const name = localStorage.getItem("name")


  React.useEffect(() => {
    if (name) {
      router.push("pages/homepage")
    }
  }, [name])
  return (
    <div className='bg-[#fafafa] h-screen flex'>
      <div className='flex items-center justify-center flex-1'>
        <Image className='h-[400px]' src={FirstLogin} alt="" />
        <Login handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} formData={formData} handleRegister={handleRegister} />
        <div>
          <Image className='h-[400px]' src={SecondLogin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page