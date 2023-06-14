import React from 'react'
import { BsHandbag } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import CartCard from './CartCard'
const Drawer = ({ cartopen, setCartOpen }: any) => {
  return (
    <div className="">
      <div className='h-[100vh] w-[500px] fixed right-0 top-0  bg-[white] z-50 '>
        <div className='flex items-center justify-between p-7'>
          <div className='flex items-center gap-3'>
            <BsHandbag className="h-5 w-5" />
            <p>Your shopping bag (1)</p>
          </div>
          <AiOutlineClose className='h-5 w-5 cursor-pointer' onClick={() => setCartOpen(!cartopen)} />
        </div>
        <hr />
        <div className="p-7 w-full">
          <CartCard cartopen={cartopen} setCartOpen={setCartOpen} />
        </div>
        <hr className='bg-[black]' />
        <div className='flex items-center justify-between w-full px-10 py-10'>
          <p>Subtotal:</p>
          <p>$14.2</p>
        </div>
        <div className="flex flex-col gap-3 w-full px-10 pt-10 pb-5 ">
          <button className='border border-[black] py-3 hover:bg-[black] hover:text-[white]'>View Cart</button>
          <button className='py-3 bg-[black] text-[white]'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer