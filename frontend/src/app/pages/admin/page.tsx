"use client"

import DataContent from '@/app/components/AdminComponents/DataContent'
import Sidebar from '@/app/components/AdminComponents/Sidebar'
import Navbar from '@/app/components/Navbar'
import { authorInput, productInput } from '@/app/data/inputdata'
import React from 'react'

const page = () => {
  const [page, setPage] = React.useState("Product")
  return (
    <div>
      <Navbar />
      <div className='px-3 flex'>
        <div className="flex-[0.2]">
          <Sidebar page={page} setPage={setPage} />
        </div>
        <div className='flex-[0.8]'>
          {page === "Product" ? <DataContent data={productInput} /> :
            page === "Author" ? <DataContent data={authorInput} /> : null}

        </div>
      </div>
    </div>
  )
}

export default page