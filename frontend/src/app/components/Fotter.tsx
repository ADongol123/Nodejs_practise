import React from 'react'

const Fotter = () => {
  return (
    <div className='border-t border-[lightgray] py-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center font-medium text-[30px]'>Join Our Newsletter</h1>
        <p className='font-normal text-[14px] text-[gray]'>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</p>
        <div className='flex items-center gap-2'>
          <input className='border border-[black] px-8 py-4 w-[800px]' type=' text' placeholder='Enter email for weekly newsletter. ' />
          <button className='bg-[black] text-[white] px-8 py-4'>Subscribe</button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Fotter