import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
       <h1 className='text-2xl mb-4 text-center'>  this page for learing image optimization . </h1>
        <Image  src={"/vercel.svg"}  alt='vercel image' width={200} height={400} />
        <Image  src={"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}  alt='vercel image' width={600} height={600} />
    </div>
  )
}

export default page