import React, {Component} from 'react'
import RegisterForm from '../form/RegisterForm'


class Register extends Component{
    render() {
        return(
            <div className="container col-md-4 text-center">
                <RegisterForm />
            </div>
        )
    }

}

export default Register 