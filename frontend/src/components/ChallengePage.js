import React, { Component } from 'react';
import '../styles/challengepage.css';
import { Button, Input } from 'react-materialize';
import Comment from './CommentCard';

class ChallengePage extends Component {
    render() {
        return (
            <div>
                <div className="center-page">
                    <h3>{this.props.title}</h3>
                    <img  className="challenge-image" alt="Description of challenge here" src={require("../images/hoopla-logo.png")}/>
                    <div className="description-challenge">
                        <div className="posted-by">
                            Posted by
                        </div>
                        <div className="user-info">
                            <img className="owner-image" src={this.props.ownerImage}/>
                            <span className="owner-name">{this.props.owner}</span>
                        </div>
                        <div>
                            <p>
                                {this.props.description}
                            </p>
                            <div className="participate">
                                <Button>Participate</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="center-page">
                        <Input
                            type="text"
                            id="input_2"
                            placeholder="Comment here..."/>
                        <Button className="comment-button">Comment</Button>
                    </div>
                </div>
                <div>
                    <Comment/>
                </div>
            </div>
        );
    }
}

export default ChallengePage;