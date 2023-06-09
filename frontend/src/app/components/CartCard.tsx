import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

const CartCard = () => {
  return (
    <div className="flex w-[500px]">
      <Image height={120} width={120} alt="image" src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22-150x200.jpg" />
      <div className="flex w-full">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h1>ROMANCE</h1>
            <h1>Angry God</h1>
            <h1>L.J. Shen</h1>
            <h1>$1.30</h1>
          </div>
          <AiOutlineClose className='h-4 w-4' />
        </div>
      </div>

    </div>
  )
}

export default CartCard