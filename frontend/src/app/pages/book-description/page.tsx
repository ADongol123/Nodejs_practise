import BookDescription from '@/app/components/BookDescription'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="border-y border-[lightgray]">
        <div className='w-[80%] mx-auto py-4'>
          <h1 className="font-[400] text-[13px]">Home {'>'} Romance {'>'} Book Name</h1>
        </div>
      </div>
      <div className="mt-16 w-[75%] mx-auto">
        <BookDescription />
      </div>
    </div>
  )
}

export default page