import React from 'react'
import { BsHandbag } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import CartCard from './CartCard'
const Drawer = () => {
  return (
    <div className="">
      <div className='h-[100vh] w-[500px] fixed right-0 top-0  bg-[white] z-50 '>
        <div className='flex items-center justify-between p-7'>
          <div className='flex items-center gap-3'>
            <BsHandbag className="h-5 w-5" />
            <p>Your shopping bag (1)</p>
          </div>
          <AiOutlineClose className='h-5 w-5' />
        </div>
        <hr />
        <div className="p-7">
          <CartCard />
        </div>
      </div>
    </div>
  )
}

export default Drawer