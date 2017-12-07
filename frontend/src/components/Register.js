import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import '../styles/register.css';

class Register extends Component {
    render() {
        return (
            <div className="registration-form">
                <h4>Register</h4>
                <form className="form-wrap register-table">
                    <label>Username</label>
                    <Input type="text" id="register-user"/>
                    <label>E-mail</label>
                    <Input type="text" id="email-user"/>
                    <label>Password</label>
                    <Input type="password" id="password-user"/>
                    <label>Confirm Password</label>
                    <Input type="password" id="password-user"/>

                    <form className="button-wrap">
                        <Button>Submit</Button>
                    </form>
                </form>
            </div>
        );
    }
}

export default Register;