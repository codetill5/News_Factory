import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import TrendingList from './TrendingList';
import World from './World';
import US from './US';

const App = ()=>{
    return(
        <>
        <Header />
        <TrendingList />
        <br/><br/>
        <Menu />
        <Switch>
            <Route exact path='/' component={World} />
            <Route exact path='/US' component={US} />
        </Switch>
        </>
    );
};

export default App;