import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../styles/header.css';
import { Link } from 'react-router-dom';
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
                <Navbar brand={<Link to="/home">hoopla</Link>} right>
                    <NavItem href="/home">Our Team</NavItem>
                    <NavItem href="/createChallenge">Create Challenge</NavItem>
                    <NavItem className="hide-on-mobile" id="search-icon" href="#">
                        <form className="spacing">
                            <Input autocomplete="off"
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
                    <NavItem className="hide-on-mobile" href="#"><Icon>more_vert</Icon> </NavItem>
                </Navbar>
            </div>
        );
    }
}

export default Header;
