import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import AuthorCard from './AuthorCard'

const Author = () => {
  return (
    <div className='mt-10 mb-10 flex flex-col gap-5'>
      <h1 className='w-[80%] mx-auto font-medium text-[30px]'>Favourite Authors</h1>
      <div className='w-[80%] mx-auto mt-5 flex items-center gap-16'>
        <IoIosArrowBack className='h-10 w-10 p-2 border border-[lightgray]' />
        <div className='grid grid-cols-5 gap-[195px]'>
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
        <IoIosArrowForward className='h-10 w-10 p-2 border border-[lightgray]' />
      </div>
    </div>
  )
}

export default Author