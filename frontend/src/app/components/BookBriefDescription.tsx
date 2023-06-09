"use client"

import React from 'react'

const data = [
  {
    id: 1,
    title: "Description",
    description: "For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens."
  },
  {
    id: 2,
    title: "Product Details",
    description: "dasdsa dsa dfkbfsdblsd"
  },
  {
    id: 3,
    title: "Videos",
    description: ' ksbibfgibgiubfsdgbifd bgipu'
  },
  {
    id: 4,
    title: "Reviews",
    description: "f jsdvusbmnvvuoesifb siuof "
  },
]

const BookBriefDescription = () => {
  const [active, setActive] = React.useState("Description")
  return (
    <div className="border-t border-[lightgray] w-full flex">
      <div className='pt-5 border-r border-[lightgray] flex flex-col gap-3 w-[30%] ml-3'>
        {
          data?.map((details: any) =>
            <h1 key={details?.id} className={`cursor-pointer ${details?.title === active ? "border-b border-[black] w-fit" : null}`} onClick={() => setActive(details?.title)}>
              {details?.title}
            </h1>)
        }
      </div>
      <div className='pt-5 w-[70%] pl-5'>
        {
          active === "Description" ?
            <h1>For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens.</h1> :
            active === "Product Details" ?
              <h1>this is product</h1> :
              active === "Videos" ?
                <h1>This is video</h1> :
                <h1>This is reviewa</h1>
        }
      </div>
    </div>
  )
}

export default BookBriefDescription