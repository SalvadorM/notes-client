import React from 'react'
import {Link} from 'react-router-dom'


const UserCard = (props) => {
    const user = props.userInfo
    const username = user.username
    const userLink = '/username/' + user.id
    return(
        <div className="container w-75 mt-5">
        <div className="row justify-content-between">
            <div className="col-4 user-icon"><Link className="btn user-link m-2" to={userLink} >{username}</Link></div>
            <div className="col-4"><Link className="btn search-link m-2" to="/search">Search</Link></div>
        
        </div>
        </div>
    )
}

export default UserCard

