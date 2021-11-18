import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/home.css';

const Home = () => {
    const [roomName, setRoomName] = useState('');

    const handleRoomNameChange =(e) => {
        setRoomName(e.target.value);
    };

    return (
        <div className="home">
            {/* <h1>seller 입력</h1> */}
            <input 
                type="text"
                placeholder="판매자 닉네임 입력"
                value={roomName}
                onChange={handleRoomNameChange}
                className="text-input-field"
            />
            <Link to={`/${roomName}`} className="enter-room-button">
                채팅방 입장
            </Link>
        </div>
    );
}

export default Home