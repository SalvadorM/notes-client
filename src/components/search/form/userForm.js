import React from 'react'
import {Link} from 'react-router-dom'

const UserView = (props) => {
    const user = props.user
    const URL = '/username/' + user.username

    let date =  user.updatedAt.substr(0,10);

    return(
        <div className="card my-3">
        <h4>user: <Link to={URL}>{user.username}</Link></h4>
        <p>last update: {date}</p>
      </div>
    )
}

export default UserView