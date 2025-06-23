import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<any>()
  const msgRef = useRef<HTMLInputElement>()

  function sendMessage(){
    if(!socket){
      return 
    }
    const msg = msgRef.current?.value
    socket.send(msg)
  }

  useEffect(() =>{
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
    
    ws.onmessage = (ev) =>{
      alert(ev.data)
    }

  },[])

  return (
    <>
      <div>
        <input ref={msgRef} style={{ padding:10 ,width:400, height: 30, }} type="text" placeholder='Message ....' />
        <button onClick={sendMessage}  style={{ marginLeft: 10}}>Submit</button>
      </div>
    </>
  )
}

export default App
