import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from './../config';
import { useNavigate } from "react-router-dom";


export function SignUp(){
        const Navigate = useNavigate()
        const usernameRef = useRef<HTMLInputElement>();
        const passwordRef = useRef<HTMLInputElement>();

        async function signup(){
                const username = usernameRef.current?.value;
                console.log('username: ', username);
                const password = passwordRef.current?.value;
                console.log('password: ', password);
                
                const response = await axios.post(BACKEND_URL +"/api/v1/signup", {
                        
                         
                                username : username,
                                password : password
                        

                })
                console.log(response)
                // alert(' Signup Successfull');
                Navigate('/signin')
                
                
        }
        return (
                <div className="bg-gray-300  flex justify-center items-center h-screen w-screen">
                        <div className="flex shadow-md flex-col min-w-[24vw] p-6 py-8 gap-2 rounded-md bg-white justify-between items-center">
                                <h1 className="text-xl font-semibold text-center">SignUp</h1>
                                        
                                        <Input reference={usernameRef} placeholder={'Username'}/>
                                        <Input reference={passwordRef}  placeholder={'Password'}/>
                                        <Button onClick={signup} loading={false} variant="submit" size="md" title="Sign Up"/>

                        </div>
                </div>
        )
}