import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
       <h1 className='text-2xl mb-4 text-center'>  this page for learing image optimization . </h1>
        <Image  src={"/vercel.svg"}  alt='vercel image' width={200} height={400} />
    </div>
  )
}

export default page