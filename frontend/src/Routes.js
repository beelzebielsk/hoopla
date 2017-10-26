import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </main>
        );
    }
};

export default Routes;