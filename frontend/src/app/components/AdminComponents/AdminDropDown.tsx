import React from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

const AdminDropDown = ({ title, icon, setPage }: any) => {
  return (
    <div onClick={() => setPage(title)}>
      <div className="flex items-center p-3 gap-5 border-b border-gray cursor-pointer">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default AdminDropDown