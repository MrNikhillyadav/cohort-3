import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){
        const Navigate = useNavigate()
        const usernameRef = useRef<HTMLInputElement>();
        console.log('usernameRef: ', usernameRef.current);
        const passwordRef = useRef<HTMLInputElement>();

        async function SignIn(){
                const username = usernameRef.current?.value;
                const password = passwordRef.current?.value;
                
                await axios.post(BACKEND_URL + "/api/v1/signin", {
                        
                        
                        username,
                        password
                        
                })
                // alert(' Sigin Successfull');
                Navigate('/dashboard')
                
        }
        return (
                <div className="bg-slate-300  flex justify-center items-center h-screen w-screen">
                        <div className="flex shadow-md flex-col min-w-[24vw] p-6 py-8 gap-2 rounded-md bg-white justify-between items-center">
                                <h1 className="text-xl font-semibold text-center">Sign In</h1>
                                        <Input reference={usernameRef} placeholder={'Username'}/>
                                        <Input reference={passwordRef} placeholder={'Password'}/>
                                        <Button onClick={SignIn} loading={false} variant="submit" size="md" title="Sign in"/>

                        </div>
                </div>
        )
}