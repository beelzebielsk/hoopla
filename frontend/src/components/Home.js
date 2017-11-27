import React, { Component } from 'react';
import '../styles/home.css';
import ResultList from './ResultList';

class Home extends Component {
    render() {
        return (
            <div className="results">
                <ResultList />
            </div>
        );
    }
}

export default Home;