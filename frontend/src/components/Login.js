import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import Register from './Register';
import '../styles/register.css';

class Login extends Component {
    render() {
        return (
            <div className="break">
                <Register/>
                <div className="login-form">
                    <h4>Login</h4>
                    <form>
                        <label>E-mail</label>
                        <Input type="text"/>
                        <label>Password</label>
                        <Input type="password" id="password-user"/>

                        <form className="button-wrap">
                            <Button>Login</Button>
                        </form>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;