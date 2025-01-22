import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";

const LandingPage = () => {
  const session = getServerSession()
  if(session) redirect('/sign-in')
  
  return (
    <div className="flex h-screen bg-white text-slate-800 flex-col justify-center items-center">

        <h1 className='text-4xl font-semibold'>Short links with superpowers</h1>
        <p>Dub is the open-source link management platform for modern marketing teams</p>
        
    </div>
  )
}

export default LandingPage