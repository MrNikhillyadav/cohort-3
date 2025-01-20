import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async () => {
  const session = await getServerSession()
  if(!session?.user) redirect('/')

  return (
    <div  className="flex bg-gray-100 h-screen text-slate-800 gap-12  flex-col justify-center items-center">
        <h1 className='text-2xl'>Welcome to the dashboard</h1>
        <Image 
            src ="/graph.png"
            width = {800}
            height= {800}
            alt='graph.png'
            className='rounded-xl shadow-md cursor-pointer'
        />
    </div>
  )
}

export default Home