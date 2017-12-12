import React, { Component } from 'react';
import ResultDetail from './ResultDetail';

class ResultList extends Component {
    renderCards(){
        if(this.props.cards.length === 0) {
            return (<div><p>No results</p></div>);
        }
    
        else {
            /* each key is unique */
            switch(this.props.val) {
                case 'Users':
                    return (this.props.cards.map(card =>
                        <ResultDetail
                            key={card.id}
                            cardTitle={card.username}
                            moreInfo="/"
                        />));
                default:
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