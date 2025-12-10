'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div>
      <ul>
        <Link href={"/"}> <li> Home </li> </Link>
        <Link href={"/about"}> <li> Home </li> </Link>
      </ul>
<button  onClick={ () => router.push("/about")} className='bg-red-600 p-4 rounded-2xl' > 
  Go to ABOUT and see image  </button>
    </div>
  )
}

export default page