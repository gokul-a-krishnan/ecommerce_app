import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/home-page/HomePage";
import './App.css';
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./component/header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
