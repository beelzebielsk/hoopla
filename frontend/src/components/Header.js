import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../styles/header.css';
import AuthService from './AuthService'
import { Navbar, NavItem, Icon, Input, Button } from 'react-materialize';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: '',
            redirect: false
        }
        this.newSearch = this.newSearch.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.Auth = new AuthService();

    }

    updatePost(evt) {
        let postStr = evt.target.value;
        this.setState({
            post: postStr
        })
    }

    newSearch(e) {
        this.setState({
            redirect: true
        });
        e.preventDefault();
    }


    render() {
        return (
            <div className="wrap-header">
                <Navbar brand="hoopla" to="/home" right>
                    <NavItem href="/team">Our Team</NavItem>
                    <NavItem href="/createChallenge">Create Challenge</NavItem>
                    {!this.Auth.loggedIn() && <NavItem href="/login">Login</NavItem>}
                    {this.Auth.loggedIn() && <NavItem href="/login">Logout{this.Auth.logout()}</NavItem>}
                    <NavItem className="hide-on-mobile" id="search-icon" href="#">
                        <form className="spacing">
                            <Input autoComplete="off"
                                   placeholder="Search"
                                   type="search"
                                   value={this.state.post}
                                   onChange={this.updatePost}
                                   onsearch={(e) => this.newSearch(e)}
                                   />
                            <Button id="search-btn" onClick={(e) => this.newSearch(e)}><Icon>search</Icon></Button>
                        </form>
                        {this.state.redirect && <Redirect to={{
                            pathname: '/search',
                            state: {post: this.state.post}
                        }}/>}
                    </NavItem>
                </Navbar>
            </div>
        );
    }
}

export default Header;
