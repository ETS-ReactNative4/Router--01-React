import React, { Component } from 'react';
import './Posts.css'
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import {withRouter, Route, Link} from "react-router-dom";
import FullPost from "../FullPost/FullPost";


class Posts extends Component{
    state={
        posts:[]
    }

    componentDidMount() {
        //console.log(this.props)
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
        console.log(this.props);
        this.props.history.push({pathname:this.props.match.url+'/'+id}); //To programmacially load component with <Link>
        //this.props.history.push(`/${id}`);
    }

    render(){
        let posts=this.state.posts.map((post)=>{
            return (//<Link to={'/posts/'+post.id} key={post.id}>
                         <Post title={post.title}
                               author={post.author}
                               key={post.id}
                               clicked={()=>{this.postSelectedHandler(post.id)}}/>
                   // </Link>
            );
        });

        if(this.state.error)
        {
            posts=<p>Something went wrong Aman ! </p>;
        }
        return(
                <div>
                    <section className="Posts">
                        {posts}
                    </section>
                    <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
                </div>
        )
    }
}

export default withRouter(Posts);
