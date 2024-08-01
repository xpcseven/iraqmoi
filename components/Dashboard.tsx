"use client";
import Link from 'next/link'
import React from 'react'
export default function Dashboard() {
  return (
    <div className='text-center font-serif'>
        <h2 className=' text-blue-200 text-xl font-bold'>Login Signup</h2>
        <Link href="/mainpage">
          <button className='border bg-orange-300 border-orange-500'>Mainpage</button>
        </Link>
    </div>
  )
}
