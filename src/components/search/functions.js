import axios from 'axios'
const URL_= 'https://noteshare-app.herokuapp.com'
const URL_test = 'http://localhost:8000'

export const searchPost = (path, keywords)  => {

    //create query path for keywords
    //back-end parses the url
    let queryURL = new URLSearchParams()

    for ( let key in keywords) {
        queryURL.append(key, keywords[key])
    }
    
    const query = queryURL.toString()
    let URL = URL_ + '/post/search/' + path + '/keywords/?' + query

    return axios
        .get(URL)
        
}   

export const searchUsername = (searchQuery) => {
    let URL = URL_ + '/user/find/?value=' + searchQuery

    return axios 
        .get(URL)
}