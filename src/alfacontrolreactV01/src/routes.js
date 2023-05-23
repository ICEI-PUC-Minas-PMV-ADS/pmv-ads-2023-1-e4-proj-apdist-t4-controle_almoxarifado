import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Item from './pages/Item';
//import NovoAluno from './pages/NovoAluno';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/item" component={Item}/>
            </Switch>
        </BrowserRouter>
    );
}