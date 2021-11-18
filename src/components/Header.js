import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../css/header.css'

//검색 이미지
import search from '../images/vector-smart-object-copy-4.jpg' 

const Header = () => {
    return(
        <div className="header">
            <div className="headerTop">
                <span>
                    <Link to="/">
                        <strong>OndaQual</strong>
                    </Link>
                </span>

                <ul className="headerMenu">
                    <li>
                        <a href="#">로그인</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={search}></img>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="seller">
                <div className="sellerImg"></div>
                <p>PeTeR0316</p>
                <div className="sellerInfo">
                    <ul>
                        <li>
                            상품수 : 0
                        </li>
                        <li>
                            팔로우수 : 0
                        </li>
                        <li>
                            판매수 : 0
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;