import React from 'react'
import { useFetchAllBooks } from '../hooks/api'
import nullImage from "../../../public/images/null.jpg"
import Image from 'next/image'
import BookCard from './BookCard'
import Carousel from './Carousel'
const BestSellingBooks = () => {
  const books = useFetchAllBooks()
  const images: any = []

  if (books && Array.isArray(books.data)) {
    for (const values of books.data) {
      images.push(values?.image);
    }
  }
  console.log(images, "data")
  return (
    <div className='mt-10 mb-10'>
      <h1 className='w-[80%] mx-auto font-medium text-[30px]'>Bestselling Books</h1>
      <div className='w-[95%] mx-auto mt-5 flex items-center'>
        <div className='w-[84%] mx-auto flex items-center'>
          {/* {books?.data?.map((details: any) =>
            <div className='w-full'>
              <BookCard
                image={details?.image}
                name={details?.name}
                brand={details?.brand}
                price={details?.price}
                allDetails={details}
              />
            </div>
          )} */}
          <Carousel images={images} books={books?.data} />
        </div>
      </div>
    </div>
  )
}

export default BestSellingBooks