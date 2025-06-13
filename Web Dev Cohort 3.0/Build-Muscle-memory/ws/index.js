const { WebSocket,WebSocketServer } = require("ws");

const wss = new WebSocketServer({
    port : 8080

})

wss.on("connection", (socket) => {

    socket.on("open",() => {
        console.log('connected!')
    })

    socket.on("error", ()=>{
        console.error
    })

    socket.on("message",(message) =>{
        const prasedMsg = message.toString()

        socket.send(prasedMsg)
    })

    socket.on("close",() => {
        console.log('connection closed!')
    })
    
})

