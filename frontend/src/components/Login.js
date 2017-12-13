import React, { Component } from 'react';
import AuthService from './AuthService';
import '../styles/login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginError: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handFormSubmit = this.handFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handFormSubmit(e){
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;

        this.Auth.login(e, username, password).then(
            res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                console.warn("ERROR:",err);
                this.setState({
                    loginError: true
                })
                console.log("Login Error:", this.state.loginError)
            })
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <div className="center">
                <div className="login-form">
                    {this.state.loginError && <h3>Failed to Login</h3>}
                    <h4>Login</h4>
                    <form>
                        <input
                            className="form-item"
                            placeholder="Username goes here..."
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                            onClick={(e) => this.handFormSubmit(e)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;