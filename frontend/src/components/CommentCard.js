import React, { Component } from 'react';
import '../styles/comment.css';

class CommentCard extends Component {
    render(){
        return(
            <div className="my-card">
                <div className="comment-card">
                    <div>
                    <img className="owner-img" src={require('../images/panda-paint.png')}/>
                    <span className="owner-name">{this.props.userName}</span>
                    </div>
                    {this.props.commentText}
                </div>
            </div>
        );
    }
}

export default CommentCard;