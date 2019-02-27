import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId:null,
    };
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
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
                console.log(updatedPost)
            });
    }

    postSelectedHandler(id){
        this.setState({selectedPostId:id});
    }

    render () {
        const posts=this.state.posts.map((post)=>{
                    return <Post key={post.id}
                                 title={post.title}
                                 author={post.author}
                                 clicked={()=>{this.postSelectedHandler(post.id)}}/>
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
