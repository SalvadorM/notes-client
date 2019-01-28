import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Greetings from './form/greetings'
import Auth from '../../utilities/auth'

class Home extends Component{


    render(){   
        let username = Auth.getlocalstorage('username')

        let message = (           
            <div>
            <h1 className="">Welcome to cause note</h1>
           <Link className="btn btn-outline-primary mb-2 mr-2" to="/login">Login</Link> 
           <Link className="btn btn-outline-secondary mb-2" to="/signup">Register</Link>
           </div>
          )

        if(username){
            message = <Greetings username={username} />
        }
        return(
            <div className='jumbo'>
                <div className='container text-center jumbotron'>
                {message}
                </div>
            </div>
        )
    }
}

export default Home