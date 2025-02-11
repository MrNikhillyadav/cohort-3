import { addPostToDb } from '@/actions/action'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-white'>
        <form action={addPostToDb}
               className="flex flex-col items-center justify-center gap-2"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="bg-blue-100 border outline-none px-4 text-blue-600 border-blue-300 rounded-md"
                 />
                <textarea
                  rows={3}
                  name="content"
                  placeholder="content"
                  className="bg-blue-100 p-4 border outline-none text-blue-600 border-blue-300 rounded-md"
                 />
                 <button
                 className="bg-blue-600 text-white rounded-md px-4 text-sm py-2"
                  type="submit"
                 >
                  Add post
                  </button>
              </form>
    </div>
  )
}

export default page