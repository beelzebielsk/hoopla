import React, { Component } from 'react';
import '../styles/team.css';

class Team extends Component {
    render() {
        return (
            <div className="golden">
                <div className="bkgd">
                    <h3>Our Team</h3>
                    <div>
                        <img alt="Adam in a stripped T-Shirt" className="images" src={require('../images/adam.PNG')} />
                        <img alt="Aby wearing a blazer" className="images" src={require('../images/aby.PNG')}/>
                        <img alt="Chris closeup" className="images" src={require('../images/chris.PNG')}/>
                        <img alt="Laisa with a hair bun" className="images" src={require('../images/laisa.png')}/>
                    </div>
                    <div>
                        <h4 className="member-name"><a href="linkedin.com/in/adam-ibrahim">Adam Ibrahim</a></h4>
                        <h4 className="member-name"><a href="linkedin.com/in/abigail-banting">Abigail Banting</a></h4>
                        <h4 className="member-name"><a href="linkedin.com/in/cpanican">Chris Panican</a></h4>
                        <h4 className="member-name"><a href="linkedin.com/in/laisa-barros">Laisa Barros</a></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;