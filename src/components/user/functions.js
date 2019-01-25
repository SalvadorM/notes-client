import axios from 'axios'

/*
    Post reqest to api, to login in and user authentication 
*/
export const userLogin = user => {
    const userSchema = {
        username: user.username,
        password: user.password
    }
    return axios
        .post('https://noteshare-app.herokuapp.com/user/login', userSchema)
}

/*
    Post reqest to api, to log out user and end user session
*/
export const userLogout = () => {
    return axios
        .post('https://noteshare-app.herokuapp.com/user/logout')
}

/*
    Post reqest to api, to register a new user and create account
*/
export const userCreate = newUser => {
    return axios
    .post('https://noteshare-app.herokuapp.com/user/register', newUser)
}