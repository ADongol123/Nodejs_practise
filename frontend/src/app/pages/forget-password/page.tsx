'use client'
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const ForgetPasswordPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('token');

  console.log(search, "search")
  return <div>
    <h1>Set new password</h1>
    <p>Your new password must be different to previouly used password</p>

    <div>
      <div>
        <p>Password</p>
        <input className='border border-[black] rounded-sm p-2' type='text' />
      </div>
      <div>
        <p>Confirm Password</p>
        <input className='border border-[black] rounded-sm p-2' type='text' />
      </div>
    </div>
  </div>;
};

export default ForgetPasswordPage;
