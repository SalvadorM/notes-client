import React, {Component} from 'react'
import RegisterForm from '../form/RegisterForm'


class Register extends Component{
    render() {
        return(
            <div className="register">
            <div className="container col-md-4 text-center pt-5">
                <RegisterForm />
            </div>
            </div>
        )
    }

}

export default Register 