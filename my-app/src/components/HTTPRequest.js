import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        });
    }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts</h2>
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By user ID {post.userID}</h4>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                ))
            ) : (
                <h4>Loading posts</h4>
            )
        }
      </div>
    )
  }
}

export default HTTPRequest