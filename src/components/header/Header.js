import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Signout from '../user/scene/Signout'
class Header extends Component{
    render(){
        return(
        <div className="navbar navbar-dark bg-dark"> 
         
        <nav className="container">   
            <span className="branding navbar-brand"> CAUSEnotes </span>
            <div className="nav">
                <Link className="nav-item mr-2 py-1" to="/" >Home</Link>
                <Link className="nav-item mr-2 py-1" to="/user">User</Link>
                <Link className="nav-item mr-2 py-1" to="/notes">Notes</Link>
                <Signout />
            </div>
        </nav> 

        </div>
        )
    }
}

export default Header