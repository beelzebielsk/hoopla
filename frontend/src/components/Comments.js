import React, { Component } from 'react';
import CommentCard from './CommentCard';

class Comments extends Component {
    renderComments() {
        return (this.props.comments.map(comment =>
            <CommentCard
                key={comment.id}
                userName={comment.userId}
                commentText={comment.content}
            />));
    }

    render(){
        return(
            <div>
                {this.renderComments()}
            </div>
        );
    }
}

export default Comments;