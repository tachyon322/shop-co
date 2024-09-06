"use client";
import { login } from '@/actions/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function LoginGoogle() {
  return (
    <button className='flex justify-center items-center gap-3
     bg-black text-white px-3 py-2 rounded-xl font-[Satoshi-Regular]
     hover:bg-[#333333]'
     onClick={() => login('google')}>
      <FcGoogle size={25} />
      <h4>Login with Google</h4>
    </button>
  )
}
