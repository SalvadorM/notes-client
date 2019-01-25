import React from 'react'
import { Link } from 'react-router-dom'

const RenderCardPost = (props) => {
    const post = props.post
    const time = post.updatedAt.substr(0,10)
    const postURL = '/post/'+post.id
    return(
    <div className="col-6 col-xs-4 col-md-4 mt-2">
        <div className="card">  
        <div className="card-body">
            <h1 id="dark">{post.title}</h1>
            <p className="card-subtitle mb-3 text-muted">last update: {time}</p> 
            <Link className="btn btn-outline-info" to={postURL}>read more</Link>
        </div>
        </div>
    </div>
    )
}

export default RenderCardPost