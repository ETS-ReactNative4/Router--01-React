import React, { Component } from 'react';
//import axios from 'axios'
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
import {Route, NavLink, withRouter} from "react-router-dom";

class Blog extends Component {




    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="my-active" activeStyle={{textDecoration:'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                            pathname: this.props.match.url+'new-post',
                                            hash:'#submit',
                                            search:'?quick-submit=true' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=><h1>Home</h1>}/>
                <Route path="/" render={()=><h1>Home2</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default withRouter(Blog);
