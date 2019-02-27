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
        error:false,
    };
    componentDidMount() {
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
            }).catch((err)=>{
                this.setState({error:true});
        });
    }

    postSelectedHandler(id){
        this.setState({selectedPostId:id});
    }

    render () {

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
