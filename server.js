const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

const PORT = 3001;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  
    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {

        //클라이언트로 메시지 전달
        io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
        console.log(roomId); //추후 삭제하기
    });

    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
        socket.leave(roomId);
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


// // io.on('connection', (socket) => {
// //     socket.on('room', (user_id) => {
// //         socket.join(user_id, () => {
// //             console.log(`${user_id}방 입장.`);
// //         });
// //     });

// //     console.log('a user connected');

// //     socket.on('send message', (messageobject) => {
// //         console.log(messageobject.name);
// //         console.log(messageobject.body);

// //         io.to(messageobject.name).emit('message',messageobject.body);
// //     });
// // });

// io.on('connection', (socket) => {
//     socket.on('message', ({ author, message }) => {
//         console.log(author, message)
//         io.emit('message', { author, message });
//     });
// });


