import React from 'react'

const data = [

]

const DataContent = ({ data }: any) => {
  return (
    <div className='flex flex-col gap-10'>
      {data?.map((details: any) =>
        <div className='flex items-center justify-between px-36'>
          <h1>{details?.title}</h1>
          <input type={details?.type} className='border border-gray rounded-md' />
        </div>
      )}
    </div>
  )
}

export default DataContent