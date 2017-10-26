import React, { Component } from 'react';
import './styles/home.css';

class Home extends Component {
    render() {
        return (
            <div className="col-md-5 col-md-offset-4">
                <input
                    type="search"
                    name="main-search"
                    placeholder="Search..."
                    className="form-control"/>
            </div>
        );
    }
};

export default Home;