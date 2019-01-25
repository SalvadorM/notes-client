import axios from 'axios'

export const searchPost = (path, keywords)  => {

    //create query path for keywords
    //back-end parses the url
    let queryURL = new URLSearchParams()

    for ( let key in keywords) {
        queryURL.append(key, keywords[key])
    }
    
    const query = queryURL.toString()
    let URL = 'https://noteshare-app.herokuapp.com/post/search/'+ path +'/keywords/?' + query

    return axios
        .get(URL)
        
}   