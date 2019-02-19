import React from 'react'
import {Link} from 'react-router-dom'


const UserComment = (props) => {
    const user = props.user
    const comment = props.comment 
    const username = user.username
    const date = comment.createdAt.slice(0,10)
    const userLink = '/username/' + user.id
    return(
        <div className="row justify-content-center">
            <div className="sm-4"><Link className="btn user-link m-2" to={userLink}>{username}</Link><p className="comment-date">{date}</p></div>
            <div className="sm-4 m-2 btn">{comment.body}</div>
        </div>
    )
}

export default UserComment 