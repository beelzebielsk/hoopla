import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import Register from './Register';
import '../styles/register.css';
import AuthService from './AuthService';


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
            <div className="break">
                <Register/>
                <div className="login-form">
                    {this.state.loginError && <h3>Failed to Login</h3>}
                    <h4>Login</h4>
                    <form>
                        <label>E-mail</label>
                        <input
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            name="password"
                            id="password-user"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <form className="button-wrap">
                            <Button onClick={(e) => this.handFormSubmit(e)}>Login</Button>
                        </form>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;