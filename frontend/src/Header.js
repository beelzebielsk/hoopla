import React, { Component } from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/home">
                        <img id="header-logo" src={require('./images/hoopla-logo.png')} alt="hoopla logo"/>
                    </Link>
                    <button id="to-right">
                        <img id="menu" src={require('./images/dot_menu.png')} alt="dot menu"/>
                    </button>
                </div>
                <div className="navbar">
                    <button className="header-button col-md-3 col-md-offset-3">
                        Find Challenges
                    </button>
                    <button className="header-button col-md-2">
                        Create a Challenge
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
