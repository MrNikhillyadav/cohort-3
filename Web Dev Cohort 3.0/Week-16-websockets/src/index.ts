import { WebSocketServer,WebSocket } from 'ws'


const wss = new WebSocketServer({
        port : 8080
})

wss.on('connection', function (socket){
        console.log('Client connected')

        socket.on('message', (e) =>{
                if(e.toString() === 'ping'){
                        socket.send('pong')
                }
        })

        // setInterval(()=>{
        //         socket.send('Current price of Solana is '+ Math.random())
        // },500)

})

