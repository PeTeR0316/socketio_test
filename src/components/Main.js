import React, { useState, useEffect } from "react";
// import socketio from 'socket.io-client';

import '../css/main.css'
import Products from "./Products";
import Best from "./Best";
import Retail from "./Retail";
import Live from "./Live";
import Timedeal from './Timedeal'

const Main = () => {
    const [selectMenu, setSelectMenu] = useState('recommand');

    const changeContent = (e) => {
        setSelectMenu(e.target.id)
    };

    const contents = () => {
        if(selectMenu === "recommand") {
            return <Products />
        } else if (selectMenu === "best") {
            return <Best />
        } else if (selectMenu === "retail") {
            return <Retail />
        } else if (selectMenu === "live") {
            return <Live />
        } 
    }

    return(
        <div className="main">
            <ul className="productMenu">
                <li id="recommand" onClick={changeContent}>추천</li>
                <li id="best" onClick={changeContent}>베스트</li>
                <li id="retail" onClick={changeContent}>리테일샵</li>
                <li id="live" onClick={changeContent}>라이브</li>
            </ul>

            <Timedeal />

            {/* 선택한 메뉴의 컴포넌트 출력*/}
            {contents()}

        </div>
    );
}

export default Main;