import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Greetings from './form/greetings'
import Auth from '../../utilities/auth'

class Home extends Component{


    render(){   
        let username = Auth.getlocalstorage('username')

        let message = (           
            <div>
            <h1 className="welcome-title">Welcome to cause note</h1>
           <Link className="btn btn-outline-primary my-4 mr-2" to="/login">Login</Link> 
           <Link className="btn btn-outline-info my-4" to="/register">Register</Link>
           </div>
          )

        if(username){
            message = <Greetings username={username} />
        }
        return(
            <div className='jumbo'>
                <div className='container text-center jumbotron'>
                {message}
                <h5 className="mt-3 welcome-text">
                    Welcome to CAUSEnotes, a one stop shop for CUNY students to freely share and view notes among students, for free. 
                </h5>
                </div>
            </div>
        )
    }
}

export default Home