import React, {Component} from 'react'
import { Redirect } from 'react-router'

import {userLogout} from '../functions' 
const Auth = require('../../../utilities/auth')


class Signout extends Component{
    constructor(){
        super()
        this.state = {
            logoutCB: false,
        }
    }
    reset(){
        this.setState( prev => ({
            logoutCB: !prev.logoutCB
        }))
    }
    handleSignout(e){
        e.preventDefault()

        userLogout()
            .then(res => {
                if(res.status === 200){
                    Auth.signout()
                    this.setState( prev => ({
                        logoutCB: !prev.logoutCB
                    }))
                    this.reset()
                } 
            })
            .catch(err => {
                console.log(err)
                this.setState({logoutCB: false})
            })
    }

    render() {

        let status = this.state.logoutCB
        
        if(status){
            return <Redirect to="/login"/>
        }
        if(Auth.getlocalstorage('id')) {
            return(
                <button type="button" 
                className="btn btn-sm btn-outline-danger ml-2"
                onClick={this.handleSignout.bind(this)}>
                Sign Out
                </button>
            )
        }
        return(<div></div>)
    }
}

export default Signout