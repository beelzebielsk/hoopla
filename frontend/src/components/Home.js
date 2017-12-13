import React, { Component } from 'react';
import Search from './Search';
import '../styles/home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="grad-hero-img">
                    <img src={require('../images/panda-paint.png')}/>
                    <div className="title-container">
                        <h1 className="title-home">
                            Create, Share, Enjoy
                        </h1>
                    </div>
                </div>
                <Search />
            </div>
        );
    }
}

export default Home;