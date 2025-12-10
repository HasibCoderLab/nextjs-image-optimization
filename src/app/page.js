'use  client'
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

    </div>
  )
}

export default page