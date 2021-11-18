import React, {useState} from 'react';
import useChat from './useChat'
import '../css/chatRoom.css'

const ChartRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMEssage] = useState('');

    const handleNewMessageChange = (e) => {
        setNewMEssage(e.target.value);
    };

    const handleSendMessage = () => {
        if(newMessage !== "") {
            sendMessage(newMessage);
            setNewMEssage('');
        }
    };

    const historyBack = () => {
        window.history.back();
    }

    return (
        <div className="chatRoom">
            <button onClick={historyBack}>나가기</button>
            <h2>Seller: {roomId}</h2>

            <div className="chatListArea">
                <ul className="chatList">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item-${
                                message.ownedByCurrentUser ? 'my-message' : 'received-message'
                            }`}
                        >
                            {message.body}
                            <span className="sendTime">{message.time}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <textarea 
                value={newMessage}
                onChange={handleNewMessageChange}
                className="new-message-input-field"
            />
            <button
                onClick={handleSendMessage}
                className="send-message-button"
            >
                전송
            </button>
        </div>
    );
}

export default ChartRoom;