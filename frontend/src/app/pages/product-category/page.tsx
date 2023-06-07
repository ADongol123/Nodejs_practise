import CategoryDetail from '@/app/components/CategoryDetail'
import Fotter from '@/app/components/Fotter'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="border-y border-[lightgray]">
        <div className='w-[80%] mx-auto py-4'>
          <h1 className="font-[400] text-[13px]">Home {'>'} Arts & Photography</h1>
        </div>
      </div>
      <div className='py-5'>
        <CategoryDetail />
      </div>
      <Fotter />
    </div>
  )
}

export default page