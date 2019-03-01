import React, { Component } from 'react';
import './Posts.css'
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import {withRouter} from "react-router-dom";


class Posts extends Component{
    state={
        posts:[]
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then((response)=>{
                //const posts=response.data.slice(0, 4);
                const posts=response.data;
                const updatedPost=posts.map((post)=>{
                    return{
                        ...post,
                        author:'Aman'
                    }
                });
                this.setState({posts:updatedPost});
                console.log(response)
            }).catch((err)=>{console.log(err)});
    }

    postSelectedHandler=(id)=>{
        this.setState({selectedPostId:id});
    }

    render(){
        let posts=this.state.posts.map((post)=>{
            return <Post key={post.id}
                         title={post.title}
                         author={post.author}
                         clicked={()=>{this.postSelectedHandler(post.id)}}/>
        });

        if(this.state.error)
        {
            posts=<p>Something went wrong Aman ! </p>;
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default withRouter(Posts);
