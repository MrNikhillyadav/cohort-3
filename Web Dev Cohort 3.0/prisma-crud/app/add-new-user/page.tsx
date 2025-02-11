
import { addUserToDb } from '@/actions/action'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-white'>
          <form action={addUserToDb}
               className="flex flex-col items-center justify-center gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="bg-blue-100 border outline-none px-4 text-blue-600 border-blue-300 rounded-md"
                 />
                <input
                  type="password"
                  name="password"
                  placeholder="******"
                  className="bg-blue-100 border outline-none px-4 text-blue-600 border-blue-300 rounded-md"
                 />
               
                 <button
                 className="bg-blue-600 text-white rounded-md px-4 text-sm py-2"
                  type="submit"
                 >
                  Add User
                  </button>
              </form>
    </div>
  )
}

export default page