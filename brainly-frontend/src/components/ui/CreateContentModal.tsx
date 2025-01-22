import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { BACKEND_URL } from "../../config"
import axios from "axios"

interface ModalInterface {
        open : boolean,
        onClose : () => void
}

enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter"
}



//Controlled Component
export function CreateContentModal({open, onClose}:ModalInterface){
        const titleRef = useRef<HTMLInputElement >()
        const linkRef = useRef<HTMLInputElement >()
        const [type,setType] = useState('')


        async function CreateContent(){
               const title = titleRef.current?.value;
               const link = linkRef.current?.value
                
               await axios.post(BACKEND_URL+'/api/v1/content',{
                        title,
                        link,
                        type
               },{
                        headers :{
                                'token':localStorage.getItem('token')
                        }
               })
               
               onClose()

        }

return (
<div>
        {open && <div className="bg-gray-500 bg-opacity-80 flex justify-center items-center h-screen w-screen top-0 left-0 fixed">
                <div  className="flex flex-col outline-none justify-center items-center rounded-md drop-shadow-sm  bg-white w-[25vw] p-6">

                        <div className="flex mb-4  w-full  justify-between items-center ">
                                <h2 className="  font-bold text-lg ">Add Note</h2>

                                <div className=" p-1 text-center flex items-center  rounded-full hover:bg-slate-100 cursor-pointer">
                                        <CrossIcon onClick={onClose}  size="md"/>
                                </div>
                        </div>

                        <div className=" flex flex-col justify-center items-center w-full gap-2">
                                <Input reference={titleRef}  placeholder={'title'}/>
                                <Input reference={linkRef} placeholder={'link'}/>
                                <p className="text-gray-400">choose Content-type</p>
                                <div className="flex gap-2">
                                        <Button title="Youtube"  size="md" variant={type === ContentType.Youtube ? 'primary':"secondary"} onClick={() => {
                                                setType(ContentType.Youtube)
                                        }}/>
                                        <Button title="Twitter"  size="md" variant={type === ContentType.Twitter ? 'primary':"secondary"} onClick={() => {
                                                setType(ContentType.Twitter)
                                        }}/>
                                </div>
                                <Button onClick={CreateContent}  variant={type === ''?'disable':'submit' } size="md" title="Submit"/>

                        </div>


                </div>
        </div>}


</div>
)
}


