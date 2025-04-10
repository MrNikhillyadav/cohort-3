import { useState } from "react"

export  function SimpleForm(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
    }

    return <div>
        Basic form validation
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            <input name="email" type="email"  onChange={(e) => setEmail(e.target.value)}placeholder="email" />
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
            <button type="submit">Submit</button>
        </form>
    </div>
}