import axios from 'axios'

const instance=axios.create({
    baseURL:'https://my-json-server.typicode.com/typicode/demo'
});

instance.defaults.headers.common['Authorization']='AUTH TOKEN from Instance in Axios.js';

instance.interceptors.request.use((request)=>{
    console.log(request);
    return request;
}, (error => {
    console.log(error);
    return Promise.reject(error);
}));

export default instance;
