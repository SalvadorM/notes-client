import axios from 'axios'
/*
    user FUNCTION
    GET reqest to api, to get note id 
*/
export const getUserById = _id => {
    let URL = 'https://noteshare-app.herokuapp.com/user/' + _id
    return axios
    .get(URL);
}

/*
    post FUNCTION
    GET reqest to api, to get all notes from users
*/
export const getAllUserPost = _id => {
    let URL = 'https://noteshare-app.herokuapp.com/post/all/' + _id
    return axios
    .get(URL);
}

/*
    post FUNCTION
    GET reqest to api, to get the post by id
*/
export const getPostById = _id => {
    let URL = 'https://noteshare-app.herokuapp.com/post/' + _id
    return axios
    .get(URL);
}

export const createPost = newPost => {
    axios.defaults.withCredentials = true

    return axios
    .post('https://noteshare-app.herokuapp.com/post/new', newPost)
}

/*
    comment FUNCTION
    GET reqest to api, to get all comments from post
*/
export const getAllPostComments = postId => {
    let URL = 'https://noteshare-app.herokuapp.com/comment/postall/' + postId
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
    .post('https://noteshare-app.herokuapp.com/comment/new/', newComment)
}