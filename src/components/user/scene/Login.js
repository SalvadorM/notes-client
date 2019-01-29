import React, {Component} from 'react'
import LoginForm from '../form/LoginForm'


class Login extends Component{
    render() {
        return(
            <div className="login">
             <div className="container col-md-4 text-center pt-5">
                <LoginForm />
            </div>
            </div>
        )
    }

}

export default Login 