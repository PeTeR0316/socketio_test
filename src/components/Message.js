import React, { useState, useEffect} from 'react';
import socketio from 'socket.io-client';

const socket = socketio.connect('http://localhost:3000');
console.log(socket);

const Message = () => {
    const [state, setState] = useState({author: '', message: ''});
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        socket.on('message', ({author, message}) => {
            console.log('message from server', message);
            setChatList([...chatList, {author, message}]);
        });
    }, [state.message]);

    const onChangeHandler = (e) => {
        setState({author: 'peter', message : e.target.value});
    };

    const onClickHandler = () => {
        const {message, author}  = state;
        const newMessage = {
            ...state,
        };
        
        setChatList([...chatList, newMessage]);
        socket.emit('message', {author, message});
    };

    const handleTextSending = (text, socketId) => {
        if (!text.trim()) {
            return;
        }
        socket.emit('sendTextMessage', text, socketId);
    };
        
        

    return(
        <div>
            <h1>소켓통신!</h1>
        </div>
    )
};

export default Message;