"use client"

import DataContent from '@/app/components/AdminComponents/DataContent'
import Sidebar from '@/app/components/AdminComponents/Sidebar'
import Navbar from '@/app/components/Navbar'
import { authorInput, productInput } from '@/app/data/inputdata'
import axios from 'axios'
import React from 'react'
import Noimg from "../../../../public/images/null.jpg"
const page = () => {
  const [page, setPage] = React.useState("Product")
  const [formData, setFormData] = React.useState({
  })
  const [productImage, setProductImage] = React.useState<any>(" ")
  console.log(formData, "form")
  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleProductImageUploader = (e: any) => {
    const file = e.target.files[0] ? e.target.files[0] : Noimg;
    TransformFile(file)

  }

  const TransformFile = (file: any) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProductImage(reader.result)
        setFormData({
          image: reader.result
        })
      }
    }
  }
  const handleFormSubmit = (event: any, page: string) => {
    event.preventDefault();
    if (page === "product") {
      axios.post("http://localhost:5000/api/books/accessProduct", formData)
        .then((response) => {
          // Handle the response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    }
    console.log(page, "page")
  };

  return (
    <div>
      <Navbar />
      <div className='px-3 flex'>
        <div className="flex-[0.2]">
          <Sidebar page={page} setPage={setPage} />
        </div>
        <div className='flex-[0.8]'>
          {page === "Product" ? <DataContent data={productInput} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} formData={formData} handleProductImageUploader={handleProductImageUploader} page="product" /> :
            page === "Author" ? <DataContent data={authorInput} /> : null}

        </div>
      </div>
    </div>
  )
}

export default page