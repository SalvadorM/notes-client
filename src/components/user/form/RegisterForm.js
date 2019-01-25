import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'

import {userCreate} from '../functions'

//Error function
//renders the error message
function Error(props) {
    return(
        <div>
            <h3 className='error'>{props.message}</h3>
        </div>
    );
}

/*
This is the sign up form, we can have a search bar for users to pick their cuny school
*/
class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            error: '',
            formStatus: false,
            callBackResponce: false,
            client: {
                fname : '', 
                lname : '',   
                username : '',
                school : '',  
                email : '',
                password : '',
                password2: '',
            }
         };


    }

    //check if the passwords are identical 
    //set to true
    //if no match set back to false
    passwordMatch() {
        if(this.state.client.password === this.state.client.password2){
            this.setState({formStatus: !this.state.formStatus})
        }else {
            this.setState({formStatus: false})
        }   
    }
    
    onChange(e) {
        const client = this.state.client;
        const field = e.target.name;
        client[field] = e.target.value;
        //get a cb if we change pass2
        //call passwordMatch to check if passwords are the same
        this.setState({ client }, () => {
            if (field === 'password2'){
          
                this.passwordMatch();
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        //if we have have all valid fields 
        //create a new user
        if(this.state.formStatus){
            const newUser = {
                firstName : this.state.client.firstName,
                lastName : this.state.client.lastName,
                username : this.state.client.username,
                email : this.state.client.email,
                password: this.state.client.password,
            }
            //send post request to api
        userCreate(newUser)
            .then(res => {
    
                //if there are any errors 
                //get the message
                let Err = this.state.error;
                Err = res.data.error;
            
                if(Err) {
                    this.setState({ error : Err});
                }
                else {
                    this.setState({ callBackResponce : !this.state.callBackResponce });
                }
            });
        }else {
            this.setState({ error: 'Passwords do not match!'})
        }
       
       
     
    }


    render () {
        const { callBackResponce } = this.state;
        const { error } = this.state;

        let errorMessage 
        if(error) {
            errorMessage =  <Error message={error} />
        } else {
            errorMessage =  <h2>Sign Up</h2>
        }
        

        //if the account was created with success
        if(callBackResponce) {
            return <Redirect to="/login" />;

        } else {
            return(
            <div>
                <div>{errorMessage}</div>
                <div className="row middle">
                    <form name="register" onSubmit={ (e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Enter name</label>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <input name="firstName" 
                                type="text" 
                                className="form-control"
                                placeholder="John"
                                required
                                onChange = { (e) => this.onChange(e)}
                                    ></input>
        
                            </div>
                            <div className="form-group col-md-6">
                            <input  name="lastName" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Doe"
                                    required
                                    onChange = { (e) => this.onChange(e)}
                                    ></input>
        
                            </div>
                        </div>
                        <label>Enter a username</label>
                        <input name="username" 
                            className="form-control" 
                            id="username" 
                            type="text"
                            required
                            onChange = { (e) => this.onChange(e)}
                            ></input>

                        <label>Enter email</label>
                        <input name="email" 
                            className="form-control" 
                            id="email" 
                            type="email"
                            required 
                            onChange = { (e) => this.onChange(e)}
                            ></input>
        
                        <label>Password</label>
                        <input name="password" 
                            className="form-control" 
                            id="password" 
                            type="password"
                            required
                            onChange = { (e) => this.onChange(e)}
                            ></input>
        
                        <label>Repeat Password</label>
                        <input name="password2" 
                            className="form-control" 
                            id="password2" 
                            required
                            type="password"
                            onChange = { (e) => this.onChange(e)}
                            ></input>
                    </div>
                        <button type="submit" className="btn btn-outline-dark mt-3">Create Account</button>
                    </form>
                </div>
                
                <br></br>

                <div className="mt-3">
                    Already have an account? Sign in here! 
                    <br></br>
                    <Link to="/login">Sign In</Link>
                </div>
            </div>
            )
        }
    }
}

export default SignUp