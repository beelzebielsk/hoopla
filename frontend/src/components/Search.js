import React, { Component } from 'react';
import { Input, Button, Icon } from 'react-materialize';
import '../styles/search.css';
import ResultList from './ResultList';

class Search extends Component {
    constructor(props){
        super(props);

        try {
            if (this.props.location.state.post.length !== 0){
                this.state = {
                    post: this.props.location.state.post,
                    data: []
                };
                this.fetchResults();
            }else{
                this.setInitialState();
            }
        } catch(error) {
            this.setInitialState();
        }

        this.updatePost = this.updatePost.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    setInitialState() {
        this.state = {
                post: '',
                data: [],
                value: 'All'
            };
    }

    updatePost(evt) {
        let postStr = evt.target.value;
        this.setState({
            post: postStr
        })
        this.fetchResults();
    }

    updateValue(evt) {
        this.setState({
            value: evt.target.value
        });
    }

    fetchResults() {
        let title = this.state.post;
        let searchParams = new URLSearchParams();
        searchParams.append('title', title);

        let searchURL = 'http://localhost:8000/posts/search';
        if (this.state.value === 'Users') {
            searchURL = 'http://localhost:8000/users/search';
        }

        fetch(`${searchURL}?${searchParams.toString()}`)
            .then((resp) => {
                if(resp.ok){
                    return resp.json();
                }else{
                    return [];
                }
            }).then((respJson) => {
            const titles = respJson.map(item => {
                return item;
            });

            this.setState({
                data: titles
            })
        })
    }

    searchPost(e) {
        if(this.state.post === '') {
            this.setState({
                data: []
            })
        }else {
            this.fetchResults();
        }
        e.preventDefault();
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
                        <Input type='select' defaultValue={this.state.value} onChange={this.updateValue}>
                            <option value='All'>Select...</option>
                            <option value='Posts'>Posts</option>
                            <option value='Users'>Users</option>
                        </Input>
                    </form>
                </form>
                <ResultList cards={this.state.data} val={this.state.value}/>
            </div>
        );
    }
}

export default Search;
