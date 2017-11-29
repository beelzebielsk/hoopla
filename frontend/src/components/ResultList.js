import React, { Component } from 'react';
import ResultDetail from './ResultDetail';

class ResultList extends Component {
    constructor(props) {
        super(props);
    }

    renderCards(){
        if(this.props.cards.length === 0) {
            return (<div><p>No results</p></div>);
        }
    
        else {
            /* each key is unique */
            console.warn(this.props.cards);
            return (this.props.cards.map(card =>
                <ResultDetail
                    key={card.id}
                    cardTitle={card.title}
                    description={card.content}
                    moreInfo="/"
                    participate="/createChallenge"
                />));
        }
    }

    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

export default ResultList;