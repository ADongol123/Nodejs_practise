import React from 'react'
import { AiOutlineFileText } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import AdminDropDown from './AdminDropDown'
const data = [
  {
    id: 1,
    title: "Product",
    icon: AiOutlineFileText,
  },
  {
    id: 2,
    title: "Author",
    icon: BsFillPersonFill
  }
]

const Sidebar = ({ page, setPage }: any) => {
  return (
    <div>
      {data?.map((details: any) =>
        <AdminDropDown title={details?.title} icon={details?.icon} setPage={setPage} />
      )}
    </div>
  )
}

export default Sidebar