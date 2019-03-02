import React, { Component } from 'react';
import {Route, NavLink, withRouter, Switch, Redirect} from "react-router-dom";
//import axios from 'axios'
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'
//import NewPost from './NewPost/NewPost'
import AsynComponent from '../../HOC/AsynComponent'
const AsynNewPost=AsynComponent(()=>{
    return import('./NewPost/NewPost');
});



class Blog extends Component {
    state={
        authenticated:true,
    }

    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts" activeClassName="my-active" activeStyle={{textDecoration:'underline'}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                            pathname: this.props.match.url+'new-post',
                                            hash:'#submit',
                                            search:'?quick-submit=true' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=><h1>Home</h1>hh}/>
                <Route path="/" render={()=><h1>Home2</h1>}/>*/}

                <Switch>
                    {this.state.authenticated? <Route path="/new-post" exact component={AsynNewPost}/>:null}

                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to="/posts" /> {/*Can work as guard for not found and not authenticated paths*/}
                    {/*<Route render={()=><h1>Not Found</h1>}/> */}{/*Can also work as guard for not found and not authenticated paths*/}
                    {/*<Route path="/" exact component={Posts}/>*/}
                </Switch>


            </div>
        );
    }
}

export default withRouter(Blog);
