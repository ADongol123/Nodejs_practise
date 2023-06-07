import Image from 'next/image';
import React from 'react';
import Star from '../../../public/images/Star';
import QuantitySelector from './QuantitySelector';

const BookDescription = () => {
  const rating = 4;
  const roundedRating = Math.ceil(rating);

  return (
    <div>
      <div className='flex items-center justify-between w-[80%]'>
        <div className='relative'>
          <Image
            height={100}
            width={100}
            src='https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/22.jpg'
            alt='image'
            className='h-[400px] w-[270px]'
          />
          <div className='flex flex-col items-center justify-center bg-[#041e42] h-[100px] w-[100px] rounded-full absolute top-[-30px] left-[-30px]'>
            <p className='font-medium text-[15px] text-white'>save</p>
            <p className='font-medium text-[18px] text-white'>$0.45</p>
          </div>
        </div>
        <div>
          <h1>Angry God (This is the title part)</h1>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[2px]'>
              {Array(roundedRating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className='text-accent-6 w-4 h-4'
                  />
                ))}
            </div>
            <p>By author : the author name </p>
          </div>
          <p>$1.30</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat.</p>
          <div>
            <QuantitySelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
