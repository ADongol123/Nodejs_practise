import Image from 'next/image'
import React from 'react'
import { FcFolder } from "react-icons/fc"

const data = [

]


const DataContent = ({ data, handleFormSubmit, handleInputChange, formData, handleProductImageUploader, page }: any) => {
  return (
    <form onSubmit={(e) => handleFormSubmit(e, page)}>
      <div className='flex flex-col gap-10'>
        {data?.map((details: any) =>
          <div className='flex items-center justify-between px-36'>
            <h1>{details?.title}</h1>
            {details?.type === "file" ? <div className="flex items-center justify-center my-5">
              <label className="relative inline-flex items-center">
                <input value={""} type="file" accept="image/" className="hidden" name="image" onChange={handleProductImageUploader} />
                <div className="bg-[#0a8080] hover:bg-[#0b6666] text-white font-semibold gap-2 py-2 px-4 rounded flex items-center">
                  <FcFolder />
                  <p>Select File</p>
                </div>
                <span className="ml-2" id="selected-file"></span>
              </label>
              <Image src={formData?.pic ? formData?.pic : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} width={50} height={50} className='w-[80px] h-[50px]' alt="" />
            </div> : <input type={details?.type} className='border border-gray rounded-md' name={details?.name} onChange={handleInputChange} />}


          </div>
        )}

        <button type='submit' className="bg-[#f8e9ec] w-[100px] p-3 rounded-md" >
          Send
        </button>
      </div>
    </form>
  )
}

export default DataContent