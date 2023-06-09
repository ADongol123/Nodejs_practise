import Image from 'next/image'
import React from 'react'
import nullImage from "../../../public/images/null.jpg"
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
const BookCard = ({ image, name, brand, price, allDetails }: any) => {
  const dispatch = useDispatch();
  const [ishovered, setIsHovered] = React.useState(false)
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  console.log(allDetails, "details")
  return (
    <div className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full border h-[350px] ${ishovered ? "border-[black]" : "border-[lightgray]"}`}>
        <div className=' w-full flex flex-col items-center justify-center'>
          <Image height={300} width={155} src={image ? image : nullImage} alt="image" className='py-5 h-[250px]' />
        </div>
        <div

        >
          {ishovered ?
            <div className=' w-full absolute top-[220px] z-40 bg-[white] hovered '>
              <h1 className='font-normal text-xs mt-2 text-[red]cursor-pointer  text-[red]'>KINDLE</h1>
              <p className='font-semibold text-base cursor-pointer '>{name}</p>
              <p className='font-light text-sm text-[gray] hover:text-[red] cursor-pointer'>{brand}</p>
              <p>${price}</p>
              <div className='flex items-center justify-between mb-3 cursor-pointer'>
                <p onClick={() => handleAddToCart(allDetails)}>ADD TO CART</p>
                <AiOutlineHeart className='h-5 w-5' />
              </div>
            </div>
            :
            <div className='p-2'>
              <h1 className='font-normal text-xs text-[red]'>KINDLE</h1>
              <p className='font-bold text-base'>{name}</p>
              <p className='font-light text-sm text-[gray]'>{brand}</p>
              <p>${price}</p>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default BookCard