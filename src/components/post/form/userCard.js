import React from 'react'
import {Link} from 'react-router-dom'


const UserCard = (props) => {
    const user = props.userInfo
    const username = user.username
    const userLink = '/username/' + user.id
    const date = props.createdAt.slice(0,10)

    console.log(date)
    return(
        <div className="container w-75 mt-5">

        <div className="row justify-content-between">
            <div className="col-4 user-icon"><Link className="btn user-link m-2" to={userLink} >{username}</Link><p className="post-date">{date}</p></div>
            <div className="col-4"><Link className="btn search-link m-2" to="/search">Search</Link></div>
        </div>
        </div>
    )
}

export default UserCard

