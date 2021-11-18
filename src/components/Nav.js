import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyPocket from './MyPocket';
import '../css/nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="mainMenu">
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/shop/category/index'>샵</Link>
                </li>
                <li>
                    <Link to='/mypocket/userid'>내서랍</Link>
                </li>
                <li>가이드</li>
                <li>MY</li>
            </ul>
        </div>
    );
}

export default Nav;