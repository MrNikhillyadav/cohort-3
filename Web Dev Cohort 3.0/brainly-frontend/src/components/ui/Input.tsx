interface InputInterface{
        placeholder : string;
        reference ?: any
}

export function Input({reference,placeholder}:InputInterface){
        return (
                <div className="flex w-full gap-2 flex-col">
                        <input ref={reference} type="text" placeholder={placeholder}  className="rounded-md p-2 border-2 outline-none  border-gray-400"/>
                </div>
        )
}