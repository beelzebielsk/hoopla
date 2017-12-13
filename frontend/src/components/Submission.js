import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import '../styles/submission.css';
import AuthService from './AuthService';
import ChallengePage from './ChallengePage';

class Submission extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            loginError: false,
            submit: false,
            user: 'johndoe'
        };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.Auth = new AuthService();
    }

    updateTitle(evt) {
        this.setState({
            title: evt.target.value
        });
    }

    updateDescription(evt) {
        this.setState({
            description: evt.target.value
        });
    }

    submitChallenge(e) {
        e.preventDefault();

        console.log(this.Auth.loggedIn());
        if(!this.Auth.loggedIn()) {
            this.setState({
                loginError: true
            })
            return;
        }

        let searchURL = 'http://localhost:8000/posts/';
        let header = new Headers({
            Authorization : "Bearer " + localStorage.getItem('tokenID'),
            "Content-Type" : 'application/json; charset=UTF-8'
        });

        fetch(searchURL, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                content: this.state.description,
                title: this.state.title,
                UserId: this.Auth.getUser().id
            })
        }).then(res => {
            console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                console.error("Response fucked up.");
            }
        });

        this.setState({
            submit: true,
        })
        //this.getUsername();
    }

    render() {
        return (
            <div className="submission-form">
                {this.state.loginError && <h3>Please Login</h3>}
                {this.state.submit && 
                    <ChallengePage 
                        title={this.state.title}
                        description={this.state.description}
                        owner={this.state.user}
                        />
                    }
                <div className={this.state.submit && 'hide'}>
                    <h4>{this.props.postOrChallenge}</h4>
                    <form className="form-wrap">
                        <label>Photo</label>
                        <Input type="file"/>

                        <Input value={this.state.title} 
                               onChange={this.updateTitle} 
                               label="Title" 
                               type="text"/>

                        <br/>

                        <label>Description</label>
                        <textarea value={this.state.description} 
                                  onChange={this.updateDescription} 
                                  placeholder="Type Text Here..." 
                                  rows="20" 
                                  cols="40" 
                                  className="description" 
                                  type="text"/>

                        <form className="button-wrap">
                            <Button onClick={(e) => this.submitChallenge(e)}>Submit</Button>
                            {console.log("TITLE, DES:",this.state.title,this.state.description)}
                        </form>
                    </form>
                </div>
            </div>
        );
    }
}

export default Submission;

