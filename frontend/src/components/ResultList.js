import React, { Component } from 'react';
import ResultDetail from './ResultDetail';

class ResultList extends Component {
    renderCards(){
        if(this.props.cards.length === 0) {
            return (<div><p>No results</p></div>);
        }
    
        else {
            /* each key is unique */
// <<<<<<< 41199bb59ff3de85be61afb570e630c9e6c6a38c
//             console.warn(this.props.cards);
//             return (this.props.cards.map(card =>
//                 <ResultDetail
//                     key={card.id}
//                     cardTitle={card.title}
//                     description={card.content}
//                     moreInfo="/"
//                     participate="/postChallenge"
//                 />));
// =======
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
                            participate="/postChallenge"
                        />));
            }
            
// >>>>>>> Working on Search and ResultList
        }
    }

    render() {
        return (
            <div className="results">
                {this.renderCards()}
            </div>
        );
    }
}

export default ResultList;