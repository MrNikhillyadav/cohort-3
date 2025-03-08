import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8080});


wss.on('connection', (socket,req) => {

    socket.on('open',()=>{
        console.log('Client disconnected!')
    })

    socket.on('message',(message)=>{
        const parsedMessage = JSON.parse(message as unknown as string);

        socket.send(JSON.stringify(parsedMessage.payload.message))
    })

    socket.on('close',() =>{
        console.log('Client disconnected!')
    })
})

