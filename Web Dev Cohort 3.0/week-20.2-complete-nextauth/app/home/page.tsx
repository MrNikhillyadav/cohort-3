import React from 'react'
import { getServerSession } from 'next-auth'
import {SignOut} from '@/components/SignOut'
import {redirect} from 'next/navigation'

const Home = async() => {
  const session = await getServerSession();
  if(!session) redirect('/sign-in');
  
  return (
    <div className="flex h-screen w-full bg-white text-slate-800 flex-col justify-center items-center">

        <div className='p-8  rounded-md flex flex-col border border-blue-100  text-center bg-blue-100 bg-opacity-50 w-[22rem]'>
            <h1 className='text-md'>signed in as {session.user?.name}</h1>
            <p className='text-[12px] mb-2 text-black/70'>{session.user?.email}</p>
            <SignOut/>
        </div>
        
    </div>
  )
}

export default Home