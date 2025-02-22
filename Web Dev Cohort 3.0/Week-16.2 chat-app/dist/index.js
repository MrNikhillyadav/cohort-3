"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    console.log('user connected');
    socket.on('message', (message) => {
        const parsedMessage = JSON.parse(message); //  convert message from string to object
        console.log('parsedMessage: ', parsedMessage);
        if (parsedMessage.type === 'join') {
            console.log('user joined room', parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                roomId: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type === 'chat') {
            console.log('user ready to chat');
            //find current user roomId
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].roomId;
                }
            }
            //broadcast msg to all sockets in the same roomId
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].roomId == currentUserRoom) {
                    // convert to string and send to client
                    console.log(JSON.stringify(parsedMessage.payload.message));
                    allSockets[i].socket.send(JSON.stringify(parsedMessage.payload.message));
                }
            }
        }
    });
    socket.on('close', () => {
        console.log('user disconnected');
        allSockets = allSockets.filter((x) => x.socket !== socket); // Reassign filtered array
    });
});
