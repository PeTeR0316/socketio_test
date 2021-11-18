import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:3001";

let newDate = new Date();
let hours = newDate.getHours();
let minuts = newDate.getMinutes();
console.log(hours, minuts);


const useChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query: { roomId },
        });

        //서버로부터 메시지 수신
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message, sendTime) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
                time: message.sendTime,
            };
            setMessages((messages) => [...messages, incomingMessage]); //기존에 전달된 메시지를 복사한 후 새로 전송한 메시지 추가
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId])

    //서버로 메시지 전송
    const sendMessage = (messageBody) => {
        let newDate = new Date();
        let hours = newDate.getHours(); // 시
        let minutes = newDate.getMinutes();  // 분
        
        if(hours <= 12) {
            hours = "오전 " + hours;
        } else {
            hours = "오후 " + (hours - 12);
        }

        let chatTime = `${hours}:${minutes}`;

        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody, //메시지 전송
            senderId: socketRef.current.id, //셀러 아이디 전송
            sendTime: chatTime //메시지 전송 시간
        });
    };

    return { messages, sendMessage };
};

export default useChat;