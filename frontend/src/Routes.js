import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ResultDetail from './ResultDetail';
import ResultList from './ResultList';
import Submission from './Submission';
import ChallengePage from './ChallengePage';
import Search from './Search';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/detail' component={ResultDetail}/>
                    <Route path='/list' component={ResultList}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/challengeDetail' component={() => (<ChallengePage imageURL="" />)}/>
                    <Route path="/createChallenge" component={() => (<Submission postOrChallenge="Create Challenge" />)}/>
                    <Route path="/postChallenge" component={() => (<Submission postOrChallenge="Your Submission" />)}/>
                </Switch>
            </main>
        );
    }
};

export default Routes;