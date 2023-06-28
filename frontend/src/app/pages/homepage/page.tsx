"use client"
import Author from '@/app/components/Author';
import BestSellingBooks from '@/app/components/BestSellingBooks';
import FeaturedBooks from '@/app/components/FeaturedBooks';
import FeaturedCategories from '@/app/components/FeaturedCategories';
import Fotter from '@/app/components/Fotter';
import Navbar from '@/app/components/Navbar';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const router = useRouter()
  const handleFormSubmit = (event: any) => {
    localStorage.clear();
    router.push("/")
  };
  const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  return (
    <div>
      <Navbar />
      <div className='custom-background flex items-center gap-[300px] px-28 py-28'>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-[700] text-[20px] text-[#bfb5b5]">THE BOOKWORM EDITORS</h1>
          <span className="font-[400] text-[50px]">Featured Books of the <b>{month[new Date().getMonth()]}</b></span>
          <div className="bg-[black] flex items-center justify-center text-[white] w-[130px] h-[40px]">See More</div>
        </div>
        <Image width="700" height="700" src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1-12.png" alt="image" />
      </div>
      <FeaturedCategories />
      <BestSellingBooks />
      <FeaturedBooks />
      <Author />
      <Fotter />
      <ToastContainer position="bottom-left" />

      {/* <button onClick={handleFormSubmit} className='border border-[black] cursor-pointer'>Logout</button> */}
    </div>
  )
}

export default HomePage