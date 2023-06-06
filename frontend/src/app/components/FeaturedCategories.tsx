import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"
import arts from "../../../public/images/arts.png"
import bio from "../../../public/images/bio.png"
import food from "../../../public/images/food.png"
import health from "../../../public/images/health.png"
import romance from "../../../public/images/romance.png"
import Image from 'next/image'
const data = [
  {
    id: 1,
    image: arts,
    title: "Arts & Photo",
    sub_title: "Shop Now",
    bg_color: "#faf1ff"
  },
  {
    id: 2,
    image: food,
    title: "Food & Drinks",
    sub_title: "Shop Now",
    bg_color: "#faf4eb"
  },
  {
    id: 3,
    image: romance,
    title: "Romance",
    sub_title: "Shop Now",
    bg_color: "#f4e6e5"
  },
  {
    id: 4,
    image: health,
    title: "Health",
    sub_title: "Shop Now",
    bg_color: "#e6f2f4"
  },
  {
    id: 5,
    image: bio,
    title: "Biography",
    sub_title: "Shop Now",
    bg_color: "#fff6f6"
  }
]
const FeaturedCategories = () => {
  return (
    <div className='mt-[80px]'>
      <div className='flex items-center justify-between w-[80%] mx-auto'>
        <h1 className="font-medium text-[30px]">Featured Categories</h1>
        <div className='flex items-center gap-3'>
          <h1>All Categories</h1>
          <MdKeyboardArrowRight className='h-5 w-5' />
        </div>
      </div>
      <div className='flex items-center gap-5 w-[80%] mx-auto mt-5 h-[200px]'>
        {data?.map((details: any) =>
          <div key={details?.id}
            style={{ backgroundColor: details?.bg_color }}
            className={`flex flex-col items-center justify-center bg-cover bg-center h-full w-[300px] cursor-pointer`}>
            <Image height="80" width="100" src={details?.image} alt="image" />
            <h1 className="font-medium text-[20px]">{details?.title}</h1>
            <p>{details?.sub_title}</p>
          </div>)}
      </div>
    </div>
  )
}

export default FeaturedCategories