import Image from 'next/image'
import React from 'react'
import nullImage from "../../../public/images/null.jpg"

const BookCard = ({ image, name, brand, price }: any) => {
  return (
    <div>
      <div className='w-full border border-[lightgray]'>
        <div className=' w-full flex flex-col items-center justify-center'>
          <Image height={300} width={155} src={image ? image : nullImage} alt="image" className='py-5 h-[250px]' />
        </div>
        <div className='ml-4 mr-4'>
          <h1 className='font-normal text-xs text-[red]'>KINDLE</h1>
          <p className='font-bold text-base'>{name}</p>
          <p className='font-light text-sm text-[gray]'>{brand}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard