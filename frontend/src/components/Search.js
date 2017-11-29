import React, { Component } from 'react';
import { Input, Button, Icon } from 'react-materialize';
import '../styles/search.css';
import ResultList from './ResultList';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: '',
            data: []
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
                data: []
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
                    console.warn(item);
                    return item;
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
                </form>
                <ResultList cards={this.state.data}/>
            </div>
        );
    }
}

export default Search;