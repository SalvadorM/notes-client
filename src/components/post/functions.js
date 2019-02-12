import axios from 'axios'
const URL_ = 'https://noteshare-app.herokuapp.com'
const URL_test= 'http://localhost:8000'
/*
    user FUNCTION
    GET reqest to api, to get note id 
*/
export const getUserById = _id => {
    let URL = URL_ + '/user/' + _id
    return axios
    .get(URL);
}

/*
    post FUNCTION
    GET reqest to api, to get all notes from users
*/
export const getAllUserPost = _id => {
    let URL = URL_ + '/post/all/' + _id
    return axios
    .get(URL);
}

/*
    post FUNCTION
    GET reqest to api, to get the post by id
*/
export const getPostById = _id => {
    let URL = URL_ + '/post/' + _id
    return axios
    .get(URL);
}

export const createPost = newPost => {
    axios.defaults.withCredentials = true
    let URL =  URL_ + '/post/new'
    return axios
      .post(URL, newPost)
}

/*
    comment FUNCTION
    GET reqest to api, to get all comments from post
*/
export const getAllPostComments = postId => {
    let URL =  URL_ + '/comment/postall/' + postId
    return axios  
    .get(URL)
}
/*
    comment FUNCTION
    POST reqest to api, to submit a new comment 
*/
export const postCommment = (newComment) => {
    axios.defaults.withCredentials = true
    return axios  
    .post('http://localhost:8000/comment/new/', newComment)
}