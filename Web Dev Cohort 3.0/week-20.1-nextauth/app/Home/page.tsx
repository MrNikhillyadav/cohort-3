'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export  function Dashboard() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-center">
        Signed in as {session?.user?.name} <br />
        <button className="bg-blue-600 outline-none hover:bg-blue-500 text-white px-6 py-2 rounded" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="text-center">
      Not signed in <br />
      <button className="bg-orange-600 outline-none text-white px-6 py-2 rounded" onClick={() => signIn()}>Sign in</button>
    </div>
  )
}