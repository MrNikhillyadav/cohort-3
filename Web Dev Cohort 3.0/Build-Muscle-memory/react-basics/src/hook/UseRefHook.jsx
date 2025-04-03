import {useRef } from 'react'

export  function UseRefHook(){
    const inputRef = useRef('')


    const handleSubmit = () => {
        let username = inputRef.current.value
        console.log(username)
    }

    return (
        <div>
            <input type='text' ref = {inputRef} placeholder="Name"/>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}