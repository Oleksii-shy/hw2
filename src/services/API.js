import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

let getComments = () => axiosInstance();
let getComment = (id) => axiosInstance('/' + id);

export {getComments, getComment};