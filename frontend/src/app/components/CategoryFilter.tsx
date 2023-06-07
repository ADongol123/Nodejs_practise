import React from 'react'
import { IoIosAdd } from "react-icons/io"
import { HiOutlineMinusSmall } from "react-icons/hi2"
import MultiRangeSlider from './multiRangeSlider/MultiRangeSlider';
const CategoryFilter = ({ title }: props) => {
  const [boolean, setBoolean] = React.useState(false)

  return (
    <div>
      {(() => {
        switch (title) {
          case 'Categories':
            return <div className='border border-[lightgray] p-5 '>
              <div className='flex items-center justify-between'>
                <h1 className='font-[500] text-[18px]'>{title}</h1>
                {boolean === true ?
                  <HiOutlineMinusSmall onClick={() => setBoolean(!boolean)} className='h-5 w-5 cursor-pointer' />
                  :
                  <IoIosAdd className='h-5 w-5 cursor-pointer' onClick={() => setBoolean(!boolean)} />}
              </div>
              {boolean === true ? null : <div className='mt-5 flex flex-col gap-3'>
                <p className='text-[15px]'>Arts & Photography</p>
                <p className='text-[15px]'>Biography</p>
                <p className='text-[15px]'>Business & Money</p>
                <p className='text-[15px]'>BWafts</p>
                <p className='text-[15px]'>Cookbooks</p>
                <p className='text-[15px]'>Food & Drink</p>
              </div>}
            </div>
          case 'Authors':
            return <div className='border border-[lightgray] p-5 '>
              <div className='flex items-center justify-between'>
                <h1 className='font-[500] text-[18px]'>{title}</h1>
                {boolean === true ?
                  <HiOutlineMinusSmall onClick={() => setBoolean(!boolean)} className='h-5 w-5 cursor-pointer' />
                  :
                  <IoIosAdd className='h-5 w-5 cursor-pointer' onClick={() => setBoolean(!boolean)} />}
              </div>
              {boolean === true ? null : <div className='mt-5 flex flex-col gap-3'>
                <p className='text-[15px]'>First Author</p>
                <p className='text-[15px]'>Second Author</p>
                <p className='text-[15px]'>Third Author</p>
              </div>}
            </div>
          case 'Format':
            return <div className='border border-[lightgray] p-5 '>
              <div className='flex items-center justify-between'>
                <h1 className='font-[500] text-[18px]'>{title}</h1>
                {boolean === true ?
                  <HiOutlineMinusSmall onClick={() => setBoolean(!boolean)} className='h-5 w-5 cursor-pointer' />
                  :
                  <IoIosAdd className='h-5 w-5 cursor-pointer' onClick={() => setBoolean(!boolean)} />}
              </div>
              {boolean === true ? null : <div className='mt-5 flex flex-col gap-3'>
                <div className="flex items-center justify-between">
                  <p className='text-[15px]'>Hardcover</p>
                  <p className='text-[15px]'>(7)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className='text-[15px]'>Kindle</p>
                  <p className='text-[15px]'>(4)</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className='text-[15px]'>Paperback</p>
                  <p className='text-[15px]'>(17)</p>
                </div>
              </div>}
            </div>
          case 'Filter by price':
            return <div className='border border-[lightgray] p-5 '>
              <div className='flex items-center justify-between'>
                <h1 className='font-[500] text-[18px]'>{title}</h1>
                {boolean === true ?
                  <HiOutlineMinusSmall onClick={() => setBoolean(!boolean)} className='h-5 w-5 cursor-pointer' />
                  :
                  <IoIosAdd className='h-5 w-5 cursor-pointer' onClick={() => setBoolean(!boolean)} />}
              </div>
              {boolean === true ? null : <div className='mt-5 flex flex-col gap-3'>
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
                <button className='p-2 mt-5 bg-[#e64c3b] text-white'>Filter</button>
              </div>}
            </div>
          default:
            return null
        }
      })()}
    </div>
  )
}

export default CategoryFilter