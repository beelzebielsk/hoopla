import React, { Component } from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon, Input } from 'react-materialize';

class Header extends Component {
    render() {
        return (
            <div className="wrap-header">
                <Navbar brand={<Link to="/home">hoopla</Link>} right>
                    <NavItem href="/home">Our Team</NavItem>
                    <NavItem href="/createChallenge">Create Challenge</NavItem>
                    <NavItem className="hide-on-mobile" id="search-icon" href="#">
                        <Input autocomplete="off" label="Search" className="search-inp" type="search" onsearch={console.log('works')}/>
                        <Icon>search</Icon>
                    </NavItem>
                    <NavItem className="hide-on-mobile" href="#"><Icon>more_vert</Icon> </NavItem>
                </Navbar>
            </div>
        );
    }
}

export default Header;
