import axios from "axios";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";

export function SignIn(){
        const usernameRef = useRef<HTMLInputElement>();
        console.log('usernameRef: ', usernameRef.current);
        const passwordRef = useRef<HTMLInputElement>();

        async function SignIn(){
                const username = usernameRef.current?.value;
                const password = passwordRef.current?.value;
                alert(' Sigin Successfull');
                
                await axios.post(BACKEND_URL + "/api/v1/signin", {
                        
                        data : {
                                username,
                                password
                        }
                })
                
                
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