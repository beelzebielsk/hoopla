import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/resultdetail.css';
import { Card, CardTitle, Icon } from 'react-materialize';

class ResultDetail extends Component {
    render() {
        return(
            <Card
                header={<CardTitle title="More Info" reveal image={this.props.imageSource} waves='light'/>}
                title={this.props.cardTitle}
                reveal={
                    <p>
                        {this.props.description}
                        <Link to={{ pathname: this.props.moreDetail }}>Read More</Link>
                    </p>}>
                <p>
                    <Link className="comment-icon" title="Comment" to="/">
                        <Icon>chat_bubble_outline</Icon>
                    </Link>
                    <Link className="participate-button" to={{ pathname: this.props.participate }}>Participate</Link>
                </p>
            </Card>
        );
    }
}

export default ResultDetail;