"use client"

import React from 'react'
import logo from "../../../public/images/logo.svg"
import Image from 'next/image'
import { RiMenu2Fill } from "react-icons/ri"
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai"
import { MdOutlinePersonOutline } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"
import { navdata } from '../data/navdata'
import { useRouter } from 'next/navigation'
import Drawer from './Drawer'
const Navbar = () => {
  const router = useRouter()
  const [cartopen, setCartOpen] = React.useState(false)
  return (
    <div className="  px-14 ">
      <div className="flex justify-end gap-5 pt-5 ">
        <IoLocationOutline className="h-5 w-5 cursor-pointer" />
        <AiOutlineHeart className="h-5 w-5 cursor-pointer" />
        <MdOutlinePersonOutline className="h-5 w-5 cursor-pointer" />
        <FiShoppingCart className="h-5 w-5 cursor-pointer" onClick={() => setCartOpen(!cartopen)} />
      </div>
      {
        cartopen ? <Drawer cartopen={cartopen} setCartOpen={setCartOpen}/> : null
      }
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center  gap-10'>
          <RiMenu2Fill className='mt-2 h-7 w-7' />
          <div className="flex items-center gap-10">
            <Image className='cursor-pointer' src={logo} alt="logo" onClick={() => router.push("/")} />
            <div className='flex items-center gap-8'>
              {navdata?.map((details: any) =>
                <div onClick={() => router.push(details?.route)} key={details?.key} className='flex items-center gap-2 cursor-pointer'>
                  <h1 className='text-base font-medium'>{details?.title}</h1>
                  {
                    details?.icon ? <details.icon /> : null
                  }
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center bg-[#f6f5f3] p-3 gap-3">
          <AiOutlineSearch className="h-5 w-5" />
          <input type="text" className="bg-[#f6f5f3] focus:outline-none" placeholder='Search by Keywords' />
        </div>
      </div>
    </div>
  )
}

export default Navbar