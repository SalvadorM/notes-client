import React, {Component} from 'react'

import AllPost from './AllPost'
import Loading from '../form/loading'
import {getUserById} from '../functions'


class Username extends Component {
    constructor(){
        super()
        this.state = {
            user: [],
            cbResponce: false
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.value)
        const usernameId = this.props.match.params.value
        getUserById(usernameId)
            .then(user => {
                this.setState({
                    user: user.data,
                    cbResponce: true
                })
            })
            .catch(err => console.log(err))
        
    }
    
    render(){
        const {user, cbResponce} = this.state

        if(cbResponce) {
            return(<div className="page">
            <div className="container text-center">
                <div className="jumbotron middle my-2">
                    <h2>{user.username}'s notes</h2>
                </div>
                <AllPost userId={user.id} />
            </div>
            </div>)
        }
        return(
            <div>
                <Loading type="bubbles" color="#000000"/>
            </div>
        )
    }
}

export default Username