import React, { Component } from 'react';

class ChallengePage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageURL}/>
            </div>
        );
    }
}

export default ChallengePage;