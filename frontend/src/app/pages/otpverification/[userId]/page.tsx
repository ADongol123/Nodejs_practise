"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = ({ params }) => {
  const { userId } = params
  console.log(userId, params, "999")
  const router = useRouter();

  const [digits, setDigits] = React.useState(['', '', '', '', '']);
  const handleDigitChange = (index, value) => {
    const updatedDigits = [...digits];
    updatedDigits[index] = value.slice(0, 1); // Restrict input to one character
    setDigits(updatedDigits);
  };
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/user/verify", { otp: digits.join(''), userId: userId })
      .then((response) => {
        // Handle the response
        console.log(response.data);
        router.push('/pages/login')
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <h1>Please check your email</h1>
      <h2>Enter Verification Code:</h2>
      <form className='flex flex-col gap-6 items-center' onSubmit={handleFormSubmit}>
        <div className='flex gap-2'>
          {digits.map((digit, index) => (
            <input
              className='border border-[black] w-10 h-10 text-center rounded-sm'
              key={index}
              type="number"
              pattern="[0-9]"
              maxLength="1"
              value={digit}
              onChange={(e) => handleDigitChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="flex gap-5">
          <button onClick={() => setDigits(["", "", "", "", ""])} className="border border-[gray] w-[100px] h-[50px] rounded-md">Clear</button>
          <button type="submit" className="bg-[#0a8080] text-[white] w-[100px] h-[50px] rounded-md">Verify</button>
        </div>
      </form>
    </div>
  )
}

export default page