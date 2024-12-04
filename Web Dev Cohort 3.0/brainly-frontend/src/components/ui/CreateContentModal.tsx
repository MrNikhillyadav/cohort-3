import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"

interface ModalInterface {
        open : boolean,
        onClose : () => void
}

export function CreateContentModal({open, onClose}:ModalInterface){
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
                                        <Input placeholder={'title'}/>
                                        <Input placeholder={'link'}/>
                                        <Button   variant="submit" size="md" title="Submit"/>

                                </div>


                        </div>
                </div>}

        
        </div>
        )
}


function Input({onChange,placeholder} : {onChange: () => void}){
        return (
                <div className="flex w-full gap-2 flex-col">
                        <input type="text" placeholder={placeholder} onChange={onChange} className="rounded-md p-2 border-2 outline-none  border-gray-400"/>
                </div>
        )
}