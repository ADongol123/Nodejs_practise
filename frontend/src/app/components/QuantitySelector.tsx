"use client"

import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { HiOutlineMinusSm } from "react-icons/hi"
const QuantitySelector = () => {
  const [value, setValue] = React.useState(0)
  return (
    <div className='flex items-center justify-between gap-2 border border-[lightgray] w-[100px] py-4 px-2'>
      <IoIosAdd className='h-4 w-4' onClick={() => setValue(value + 1)} />
      <input type="number" className='active:outline-none h-[20px] w-[25px]' defaultValue={value} />
      <HiOutlineMinusSm className='h-3 w-3' onClick={() =>
        value === 0 ? setValue(0) :
          setValue(value - 1)} />
    </div>
  )
}

export default QuantitySelector