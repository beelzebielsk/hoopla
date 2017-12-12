import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import '../styles/submission.css';

class Submission extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
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
        
    }

    render() {
        return (
            <div className="submission-form">
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
        );
    }
}

export default Submission;