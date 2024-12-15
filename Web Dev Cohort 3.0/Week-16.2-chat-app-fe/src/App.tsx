import { useEffect, useRef, useState } from 'react'

function App() {
  const socketRef = useRef<any>()
  const inputRef = useRef<HTMLInputElement>()
  const [sendMsg,setSendMsg] = useState([])
  const [responseMsg,setResponseMsg] = useState([])
  
  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080/')
    socketRef.current = ws

    //join red room by default for now
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type : 'join',
        payload : {
          roomId : "red"
        }
      }))
    }

    ws.onmessage = (ev) => {
      const data = JSON.parse(ev.data)
      console.log('data: ', data);
      setResponseMsg(r => [...r, data])
    }


    return () => {
      ws.close()
    }

  },[])


 function handleSendMessage(){
  const message = inputRef.current?.value
  console.log('message: ', message);
  setSendMsg(m => [...m, message])

  socketRef.current.send(JSON.stringify({
    type:"chat",
    payload:{
      message: message
    }
  }))

  

 }

  return (
    <div className='bg-gray-800 relative w-full  h-[100vh] '>
        <div className='flex flex-col gap-10 relative justify-between  text-white mx-[15vw] p-20 '>
            <p className=' text-start text-white'> 
                { sendMsg.map((message,index) => <div>
                    <span key={index} className='bg-blue-600 p-2  px-4 rounded-tl-xl rounded-br-xl rounded-bl-xl '>{message}</span>
                  </div>)
                }
            </p> 
            <p className=' text-start text-white'> 
                { responseMsg.map((response,index) => <div>
                    <span key={index} className='bg-white p-2 text-black px-4 rounded-tr-xl rounded-bl-xl rounded-br-xl '>{response}</span>
                  </div>)
                }
            </p> 
        </div>

        <div className=' absolute left-0 bottom-20 flex justify-center gap-4  bg-gray-800  w-full '>
          <input ref={inputRef} className='rounded-lg outline-none px-4 p-2 w-[40vw]  ' type="text" placeholder='Message ....' />
          <button onClick={handleSendMessage} className='px-4 py-2 bg-blue-600 rounded-md text-white hover:cursor-pointer' >Submit</button>
        </div>

    </div>
  )
}

export default App
