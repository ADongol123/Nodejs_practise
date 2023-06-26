import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import nullImage from "../../../public/images/null.jpg"

const CartCard = ({ cartopen, setCartOpen, name, brand, price, description, image, handleAddToCart, handleRemoveFromCart, allDetails }: any) => {
  console.log(name, brand, "namebrand")
  return (
    <div className="flex w-[500px]">
      <Image height={120} width={120} alt="image" src={image ? image : nullImage} />
      <div className="flex w-[300px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 p-2">
            <h1 className="text-[12px] text-[#ff3538]">{brand}</h1>
            <h1 className="text-[15px] font-[700]">{name}</h1>
            <h1 className="text-[12px] font-[400] text-[gray]">{description}</h1>
            <h1>${price}</h1>
          </div>
          <AiOutlineClose className='h-4 w-4 cursor-pointer' onClick={() => handleRemoveFromCart(allDetails)} />
        </div>
      </div>

    </div>
  )
}

export default CartCard