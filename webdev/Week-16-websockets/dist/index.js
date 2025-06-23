"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({
    port: 8080
});
wss.on('connection', function (socket) {
    console.log('Client connected');
    socket.on('message', (e) => {
        if (e.toString() === 'ping') {
            socket.send('pong');
        }
    });
    // setInterval(()=>{
    //         socket.send('Current price of Solana is '+ Math.random())
    // },500)
});
