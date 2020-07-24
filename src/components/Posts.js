import React, {Component} from 'react';
import { 
    Link
  }from "react-router-dom";
class Posts extends Component{
    constructor(){
        super();
        this.posts = [
            {id: 1, title:"A"},
            {id: 2, title:"B"},
            {id: 3, title:"C"}
        ]
    }
    render() {
        return(
            <div>
            <h1>Posts</h1>
            {this.posts.map(item =>
                <div>
                    <h2>{item.id}</h2>
                    <h2>{item.title}</h2>
                    <Link to={'/posts/'+item.id}>Details</Link>
                </div>
            )}
            </div>
        )
    }
}

export default Posts;