import React from 'react'
import {Link} from 'react-router-dom'



const Greetings = (props) => {
    let name = props.username
    return(
        <div>
             <h1 className="welcome-title">Welcome {name}</h1>
        </div>
    )
}

export default Greetings