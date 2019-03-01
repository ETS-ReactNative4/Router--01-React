import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL='https://my-json-server.typicode.com/typicode/demo';
axios.defaults.headers.common['Authorization']='AUTH TOKEN AMAN';
axios.defaults.headers.post['Content-Type']='application/json';

axios.interceptors.request.use((request)=>{
    console.log(request);
    return request;
}, (error => {
    console.log(error);
    return Promise.reject(error);
}));
var myInterceptor=axios.interceptors.response.use((response)=>{
    console.log(response);
    return response;
}, (error => {
    console.log(error);
    return Promise.reject(error);
}));
axios.interceptors.request.eject(myInterceptor);//to stop the interceptor

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
registerServiceWorker();
