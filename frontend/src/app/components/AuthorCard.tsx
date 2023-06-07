import Image from 'next/image'
import React from 'react'

const AuthorCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image className='rounded-full h-[100px] w-[100px]' height={100} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGVOW5uvICZcloeIkxwMQ4Zp_QygKxobHgdrcqmU&s" alt="image" />
      <div className="text-center">
        <h1 className="font-[600] text-[15px]">Aayush Dongol</h1>
        <p className="font-normal text-[12px] text-[gray]">3 Published Books</p>
      </div>
    </div>
  )
}

export default AuthorCard