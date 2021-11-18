import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Shop = () => {
    return (
        <div className="Shop">
            <input type="text" />
            <ul>
                <li>패션</li>
                <li>뷰티</li>
                <li>홈 & 라이프</li>
                <li>푸드</li>
                <li>IT & 전자제품</li>
                <li>건강 & 치료</li>
                <li>취미생활</li>
                <li>키즈 & 베이비</li>
            </ul>
        </div>
    );
}

export default Shop;