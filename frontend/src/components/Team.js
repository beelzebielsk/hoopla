import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div className="">
                <div>
                    <img alt="Adam in a stripped T-Shirt" src={require('../images/adam.PNG')} />
                    <h4>Assistant Dreamnaught</h4>
                    <p>I did an internship here ten years ago, when I was really new to the
                        Dreamnaught field. I've been with the company ever since. Good community, good benefits, and
                        the pay is right.</p>
                </div>
            </div>
        );
    }
}

export default Team;