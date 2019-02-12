import axios from 'axios'
const URL_= 'https://noteshare-app.herokuapp.com'
const URL_test = 'http://localhost:8000'

/*
    Post reqest to api, to login in and user authentication 
*/
export const userLogin = user => {
    axios.defaults.withCredentials = true

    const userSchema = {
        username: user.username,
        password: user.password
    }
    let URL =  URL_ + '/user/login'
    return axios
        .post(URL, userSchema)
}

/*
    Post reqest to api, to log out user and end user session
*/
export const userLogout = () => {
    axios.defaults.withCredentials = true
    let URL =  URL_ + '/user/logout'
    return axios
        .post(URL)
}

/*
    Post reqest to api, to register a new user and create account
*/
export const userCreate = newUser => {
    let URL =  URL_ + '/user/register'
    return axios
    .post(URL, newUser)
}