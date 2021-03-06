import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ResultDetail from './components/ResultDetail';
import ResultList from './components/ResultList';
import Submission from './components/Submission';
import ChallengePage from './components/ChallengePage';
import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import Team from './components/Team';
import Comments from './components/Comments';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/detail' component={ResultDetail}/>
                    <Route path='/list' component={ResultList}/>
                    <Route path='/search' component={Search}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/comments" component={Comments}/>
                    <Route path='/challengeDetail' component={() => (<ChallengePage imageURL="" />)}/>
                    <Route path="/createChallenge" component={() => (<Submission postOrChallenge="Create Challenge" />)}/>
                    <Route path="/postChallenge" component={() => (<Submission postOrChallenge="Your Submission" />)}/>
                </Switch>
            </main>
        );
    }
};

export default Routes;