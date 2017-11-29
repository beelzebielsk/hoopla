import React, { Component } from 'react';
import { Input, Button, Icon } from 'react-materialize';
import '../styles/search.css';

function Title(props) {
    return (
        <div>
            <p>{props.postData.title}</p>
        </div>
    );
}

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: '',
            data: [<div className="center-block">No Results</div>]
        };
        this.updatePost = this.updatePost.bind(this);
        this.searchPost = this.searchPost.bind(this);
    }

    updatePost(evt) {
        let postStr = evt.target.value;
        this.setState({
            post: postStr
        })
    }

    searchPost(e) {
        if(this.state.post === '') {
            this.setState({
                data: [<div className="center-block">No Result</div>]
            })
        }else {
            fetch('http://localhost:8000/post/' + this.state.post)
                .then((resp) => {
                    if(resp.ok){
                        return resp.json();
                    }else{
                        return [];
                    }
                }).then((respJson) => {
                const titles = respJson.map(item => {
                    return <Title postData={item} />
                    /* take into consideration whether or not this item has an image. If it doesn't
                     * use hoopla-logo.png as default. Logic is not implemented yet */
                    // return <ResultDetail cardTitle={item} imageSource={require('./images/hoopla-logo.png')} moreDetail="/createChallenge" participate="/postChallenge"/>
                });

                this.setState({
                    data: titles
                })
            })

            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="bckg-search">
                <form className="form-wrapper cf">
                    <Input
                        id="search-bar"
                        autocomplete="off"
                        type="search"
                        label="Search"
                        value={this.state.post}
                        onChange={this.updatePost}/>
                    <Button onClick={(e) => this.searchPost(e)}><Icon>search</Icon></Button>
                    <form className="select-wrapper">
                        <Input type='select' defaultValue='1'>
                            <option value='1'>Select...</option>
                            <option value='2'>Art</option>
                            <option value='3'>Coding</option>
                            <option value='4'>Music</option>
                            <option value='5'>Video</option>
                        </Input>
                    </form>
                    {this.state.data}
                </form>
            </div>
        );
    }
}

export default Search;