import React, { useState, useEffect } from "react";
// import socketio from 'socket.io-client';

const Test = () => {

    const [selectLocal, setSelectLocal] = useState('')

    return(
        <>
            <select onChange={(e)=>alert(e.target.value)}>
                <option>-선택-</option>
                <option>서울</option>
                <option>인천</option>
            </select>

        </>
    );
}

export default Test;