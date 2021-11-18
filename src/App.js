import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main'
import Footer from './components/Footer'
import MyPocket from './components/MyPocket';
import Shop from './components/Shop'

import Home from './chat/Home'
import ChatRoom from './chat/ChatRoom'

// import Test from './components/selectTest'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />

                <Nav />

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:roomId' component={ChatRoom} />
                </Switch>

                {/* Nav메뉴로 인해 변경되는 컴포넌트 */}
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/shop/category/index' component={Shop} />
                    <Route exact path='/mypocket/userid' component={MyPocket} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
