import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useFetchAllBooks } from '../hooks/api'
import nullImage from "../../../public/images/null.jpg"
import Image from 'next/image'
import BookCard from './BookCard'
const BestSellingBooks = () => {
  const books = useFetchAllBooks()
  console.log(books)
  return (
    <div className='mt-10 mb-10'>
      <h1 className='w-[80%] mx-auto font-medium text-[30px]'>Bestselling Books</h1>
      <div className='w-[95%] mx-auto mt-5 flex items-center'>
        <IoIosArrowBack className='h-10 w-10 p-2 border border-[lightgray]' />
        <div className='w-[84%] mx-auto flex items-center'>
          {books?.data?.map((details: any) =>
            <div className='w-full'>
              <BookCard
                image={details?.image}
                name={details?.name}
                brand={details?.brand}
                price={details?.price}
                allDetails={details}
              />
            </div>
          )}
        </div>
        <IoIosArrowForward className='h-10 w-10 p-2 border border-[lightgray]' />
      </div>
    </div>
  )
}

export default BestSellingBooks