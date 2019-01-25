import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'

const Auth = require('../../../utilities/auth')

//error function 
function Error(props) {
    return(
        <div>
            <h2 className="error">{props.message}</h2>
        </div>
    )
}

class LoginForm extends Component{
    constructor() {
        super()

        this.state = {
            error: '',
            cbResponce: false,
            user: {
                username: '',
                password: '',
            }
        };
    }

    onChange(e) {
        const user = this.state.user
        const field = e.target.name
        user[field] = e.target.value

        this.setState({user})
    }

    onSubmit(e) {
        e.preventDefault()

        let username = this.state.user.username
        let password = this.state.user.password

        Auth.authenticate(username, password, () => {
            //cb function
            if(Auth.getlocalstorage('error') === 'true'){
                this.setState({error: 'Incorrect password or username'})
            } else{
                //there was no errors 
                //route to user hub
                this.setState({cbResponce: !this.state.cbResponce})
            }
        })
    }

    render() {
        const {cbResponce, error} = this.state
        let errorMessage
        if(error) {
            errorMessage =  <Error message={error} />
        } else {
            errorMessage =  <h2>Log In</h2>
        }

        //if the user was able to sign in 
        //redirect to user landing page 
        if(cbResponce) {
            return (<Redirect to='/user' />)
        }

        return(
            <div>
                {errorMessage}
                <div className="row middle">
                    <form name="login" onSubmit={ (e) => this.onSubmit(e)}>
                    <div className="form-group">
                    <label >username</label>
                    <input name="username" 
                            className="form-control log" 
                            type="text" 
                            placeholder="Enter email"
                            onChange = { (e) => this.onChange(e)}>
                    </input>
                    <label>Password</label>
                    <input name="password" 
                            className="form-control log" 
                            type="password" 
                            placeholder="Password"
                            onChange = { (e) => this.onChange(e)}>
                    </input>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-2">Sign In</button>
                    </form>
                </div>

                <br></br>

                <div className="mt-3">
                    Create an accout, its fast and easy! 
                    <br></br>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        )
    }
}

export default LoginForm