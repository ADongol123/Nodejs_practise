"use client"
import React from 'react'
import BookCard from './BookCard'
import CategoryFilter from './CategoryFilter'
const CategoryDetail = () => {
  return (
    <div className="w-[80%] mx-auto flex gap-5">
      <div className='w-[20%] h-fit'>
        <CategoryFilter title="Categories" />
        <CategoryFilter title="Authors" />
        <CategoryFilter title="Format" />
        <CategoryFilter title="Filter by price" />
        <CategoryFilter title="By Review" />
      </div>
      <div className='w-full'>
        <div className='py-5 border-b border-[lightgray] w-full'>
          <h1>Showing the single result</h1>
        </div>
        <div className='grid grid-cols-4'>
          {Array(10).fill(null).map((_, i) =>
            <BookCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mUo1CQGczaJ_xL9aYP57SdFABkAPjD9qR7ZOZGeMiA&s"
              name="Fever : A Novel"
              brand=" Mary Beth Keane"
              price="5.31"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail