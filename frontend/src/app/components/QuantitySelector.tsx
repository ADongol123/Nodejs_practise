import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { HiOutlineMinusSm } from "react-icons/hi"
const QuantitySelector = () => {
  console.log(null)
  return (
    <div className='flex items-center gap-2 border border-[black] w-[100px]'>
      <IoIosAdd className='h-3 w-3' />
      <input type="number" />
      <HiOutlineMinusSm className='h-3 w-3' />
    </div>
  )
}

export default QuantitySelector