import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

const CartCard = ({ cartopen, setCartOpen }: any) => {
  return (
    <div className="flex w-[500px]">
      <Image height={120} width={120} alt="image" src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-150x200.jpg" />
      <div className="flex w-[300px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 p-2">
            <h1 className="text-[12px] text-[#ff3538]">ROMANCE</h1>
            <h1 className="text-[15px] font-[700]">Angry God</h1>
            <h1 className="text-[12px] font-[400] text-[gray]">L.J. Shen</h1>
            <h1>$1.30</h1>
          </div>
          <AiOutlineClose className='h-4 w-4' />
        </div>
      </div>

    </div>
  )
}

export default CartCard