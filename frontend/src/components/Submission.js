import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import '../styles/submission.css';

class Submission extends Component {
    render() {
        return (
            <div className="submission-form">
                <h4>{this.props.postOrChallenge}</h4>
                <form className="form-wrap">
                    <label>Photo</label>
                    <Input type="file"/>

                    <Input label="Title" type="text"/>

                    <br/>

                    <label>Description</label>
                    <textarea placeholder="Type Text Here..." rows="20" cols="40" className="description" type="text"/>

                    <form className="button-wrap">
                        <Button>Submit</Button>
                    </form>
                </form>
            </div>
        );
    }
}

export default Submission;