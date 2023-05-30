"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FirstLogin from 'public/images/firstLogin.png';
import SecondLogin from 'public/images/secondLogin.png';
import Register from '@/app/components/Register';

const page = () => {
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
    name: "",
    pic: ""
  })
  const [productImage, setProductImage] = useState<any>(" ")
  console.log(formData, "formData")
  // const { addToast } = useToasts()
  const router = useRouter();
  const handleProductImageUploader = (e: any) => {
    const file = e.target.files[0];
    TransformFile(file)

  }

  const TransformFile = (file: any) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProductImage(reader.result)
        setFormData({
          pic: reader.result
        })
      }
    }
  }
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/user", { formData })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        router.push(`pages/otpverification/${response.data.data.userId}`)
        // addToast('You have logged in successfully', { appearance: 'success', autoDismiss: true });
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      // pic: productImage
    });
  };

  const handleSignIn = () => {
    router.push("pages/login")
  }
  const name = localStorage.getItem("name")
  return (
    <div className='bg-[#fafafa] h-screen flex'>
      <div className='flex items-center justify-center flex-1'>
        <Image className='h-[400px]' src={FirstLogin} alt="" />
        <Register handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} formData={formData} handleProductImageUploader={handleProductImageUploader} handleSignIn={handleSignIn} />
        <div>
          <Image className='h-[400px]' src={SecondLogin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default page