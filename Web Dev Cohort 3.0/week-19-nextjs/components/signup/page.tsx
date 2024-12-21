"use client"
import axios from 'axios'
import { useRef } from 'react'
import { redirect } from 'next/navigation'

export default function Signup() {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
  


async function handleSignUp() {
        const username  = nameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post('/api/v1/signup', {
            username, 
            password 

        });

        if(response){
            redirect('/signin')
        }
                    
}

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        <div className="px-10">
                            <div className="text-3xl text-gray-800 font-extrabold">
                                Sign Up
                            </div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput reference={nameRef} label="Username" placeholder="harkirat@gmail.com" />
                            <LabelledInput reference={passwordRef} label="Password" type={"password"} placeholder="123456" />
                            <button 
                                onClick={handleSignUp}
                                type="button" 
                                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                Sign up
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    reference? : string
}

function LabelledInput({reference, label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input 
                type={type || "text"} 
                id="first_name" 
                ref={reference}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
            />
        </div>
    )
}
