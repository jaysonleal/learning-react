import React, { Component } from 'react';
import Card from '../components/Card';
import { httpClient } from '../helpers';
// const Home = () => (

//     <div>
//         <h1>Welcome Home</h1>
//     </div>

// );

class Home extends Component {

    state = {
        posts: []
    };

    fetchPost = () => {
        httpClient({
            url: "/posts",
            method: "get"
        }).then(response => {
            this.setState({
                posts: [...this.state.posts, ...response.data]
            })
        });
    }

    componentDidMount() {
        this.fetchPost();
    }

    viewPost = postID => {
        const post = this.state.posts.find(post => post.id === postID);
        this.props.history.push(`/posts/${postID}`, post);
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="container mt-5">
                <div className="row">
                    {posts.map((post, index) => {
                        return(
                            <div className="col-md-3 col-lg-3 col-sm-12 my-3 mx-3" key={index}
                                 style={{
                                     cursor: "pointer"
                                 }}
                                 onClick={() => this.viewPost(post.id)}>
                                <Card  post={post}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }

}

export default Home;