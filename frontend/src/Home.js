import React, { Component } from 'react';
import './styles/home.css';

function Title(props) {
    return (
        <div>
            <p>{props.postData.title}</p>
        </div>
    );
};

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: '',
            data: [<div className="center-block">No Result</div>]
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

    searchPost() {
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
                const titles = respJson.map(d => {
                    return <Title postData={d} />
                })

                this.setState({
                    data: titles
                })
            })
        }

    }



    render() {
        return (
            <div className="col-md-5 col-md-offset-4">
                <input
                    type="search"
                    name="main-search"
                    placeholder="Search..."
                    className="form-control"
                    value={this.state.post}
                    onChange={this.updatePost}/>
                <button className="btn btn-default" onClick={this.searchPost}>Submit</button>
                {this.state.data}
            </div>
        );
    }
};

export default Home;