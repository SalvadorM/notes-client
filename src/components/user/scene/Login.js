import React, {Component} from 'react'
import LoginForm from '../form/LoginForm'


class Login extends Component{
    render() {
        return(
            <div className="container col-md-4 text-center">
                <LoginForm />
            </div>
        )
    }

}

export default Login 