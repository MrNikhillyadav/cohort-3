import { useEffect, useRef, useState } from 'react'

function App() {
  const wsRef = useRef<any>()
  const inputRef = useRef<HTMLInputElement>()
  const [sendMsg,setSendMsg] = useState(["hi there"])
  
  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080/')
    wsRef.current = ws

    //After connecting to ws, send request to join red room by default 
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type : "join",
        payload : {
          roomId : "red"
        }
      }))
    }

    //recieving messages
   
      ws.onmessage = (ev) => {
        const data = JSON.parse(ev.data)
        console.log('data: ', data);
        setSendMsg( originalMsg => [...originalMsg, data])
      }

    

    return () => {
      ws.close()
    }

  },[])


 function handleSendMessage(){
  const message = inputRef.current?.value

  // sending messages
  wsRef.current.send(JSON.stringify({
    type:"chat",
    payload:{
      message: message
    }
  }))

 }

  return (
    <div className='bg-gray-800 relative w-full  h-[100vh] '>
        <div className='flex flex-col gap-10 relative justify-between  text-white mx-[15vw] p-20 '>
            <div className=' text-start flex  flex-col gap-6 text-white'> 
                { sendMsg.map((message,index) => <div>
                    <span key={index} className='bg-blue-600 p-2  px-4 rounded-tl-xl rounded-br-xl rounded-bl-xl '>{message}</span>
                  </div>)
                }
            </div> 

        </div>

        <div className=' absolute left-0 bottom-20 flex justify-center gap-4  bg-gray-800  w-full '>
          <input ref={inputRef} className='rounded-lg outline-none px-4 p-2 w-[40vw]  ' type="text" placeholder='Message ....' />
          <button onClick={handleSendMessage} className='px-4 py-2 bg-blue-600 rounded-md text-white hover:cursor-pointer' >Submit</button>
        </div>

    </div>
  )
}

export default App
