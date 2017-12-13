import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import '../styles/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updatePassword2 = this.updatePassword2.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.registerUser = this.registerUser.bind(this);

    }

    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        });
    }

    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }

    updatePassword2(evt) {  
        this.setState({
            password2: evt.target.value
        });
    }

    // Check if user is in database./
    fetchUser(user_input, email_input) {
        let url_builder = 'http://localhost:8000/users/registration?user=' + user_input + '&email=' + email_input;
        console.log("URL: ", url_builder)
        return fetch(url_builder).then(function(res) {
            if (res.ok) {
                return res.json();
            } else {
                console.log("error on fetch")
            }
        }).then((resJson) => {
            if (resJson.length === 0)
                return true
            else
                return false
        }).catch(err => {
            console.log("ERRRRRROR")
        })
    }


    // Put user into the database
    confirmRegistration(username, email, password) {
        let searchURL = 'http://localhost:8000/users/';
        let header = new Headers({
            "Content-Type" : 'application/json; charset=UTF-8'
        });

        fetch(searchURL, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then(res => {
            console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                console.error("You fucked up.");
            }
        });
    }

    // Check if passwords are same or if email/user already taken
    // then, call confirmRegistration() to insert the user to database.
    registerUser(e) {
        e.preventDefault();
        let user_input = this.state.username;
        let email_input = this.state.email;
        let password_in = this.state.password;
        let password2_in = this.state.password2;


        if ((password_in !== password2_in) || (password_in === '') || (password2_in === '')) {
            console.warn("Passwords are not equal");
            return false;
        } else {
            let isNotUser;
            this.fetchUser(user_input, email_input)
                .then(val => {
                    isNotUser = val;
                    console.log(isNotUser);
                if (isNotUser) {
                    console.log("register user to the database");
                    this.confirmRegistration(user_input, email_input, password_in);
                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                        password2: ''
                    })
                } else {
                    console.log("Is an user:", isNotUser);
                }
            });
        }
    }

    render() {
        return (
            <div className="registration-form">
                <h4>Register</h4>
                <form>
                    <label>Username</label>
                    <Input type="text" 
                           id="register-user"
                           value={this.state.username}
                           onChange={this.updateUsername}
                           required/>
                    <label>E-mail</label>
                    <Input type="text" 
                           id="email-user"
                           value={this.state.email}
                           onChange={this.updateEmail}
                           required/>
                    <label>Password</label>
                    <Input type="password" 
                           id="password-user"
                           value={this.state.password}
                           onChange={this.updatePassword}
                           required/>
                    <label>Confirm Password</label>
                    <Input type="password" 
                           id="password-user2"
                           value={this.state.password2}
                           onChange={this.updatePassword2}
                           required/>

                    <Button onClick={(e) => this.registerUser(e)}>Submit</Button>
                </form>
                {console.warn(this.state.username, this.state.email, this.state.password, this.state.password2)}
            </div>
        );
    }
}

export default Register;