import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import noimage from "../../../public/images/null.jpg";
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai'
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Carousel = ({ images, books }: any) => {
  const dispatch = useDispatch();
  const [ishovered, setIsHovered] = React.useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const getVisibleImages = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return images.slice(startIndex, endIndex);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <IoIosArrowBack onClick={goToPrevSlide} className='h-10 w-10 p-2 border border-[lightgray]' />
      <div className="carousel-image-container grid grid-cols-5 gap-4 grid-flow-row w-full px-3">
        {getVisibleImages().map((image, index) => (
          <div className='border border-gray px-3' key={index}>
            <Image src={image ? image : noimage} alt="carousel-slide" width={300} height={100} className='p-5 h-[250px]' />
            <h1 className='font-normal text-xs mt-2 text-[red]cursor-pointer  text-[red]'>KINDLE</h1>
            <p className='font-semibold text-base cursor-pointer '>{books[index].name}</p>
            <p className='font-light text-sm text-[gray] hover:text-[red] cursor-pointer'>{books[index].brand}</p>
            <p>${books[index].price}</p>
            <div className='flex items-center justify-between mb-3 cursor-pointer'>
              <p onClick={() => handleAddToCart(books[index])}>ADD TO CART</p>
              <AiOutlineHeart className='h-5 w-5' />
            </div>
          </div>
        ))}
      </div>
      <IoIosArrowForward onClick={goToNextSlide} className='h-10 w-10 p-2 border border-[lightgray]' />
    </div>
  );
};

export default Carousel;
