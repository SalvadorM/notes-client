import React, { Component } from 'react'

import Loading from '../form/loading'
import {getUserById} from '../functions'
import Auth from '../../../utilities/auth'
import AllPost from './AllPost'

import NoteButton from '../form/Button'

class UserPosts extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            id: '',
            cbResponce: false
        }
    }
    
    componentDidMount(){
        const userId = Auth.getlocalstorage('id')

        getUserById(userId)
            .then(user =>{
                const currentUser = user.data
                this.setState({
                    name: currentUser.firstName,
                    id: currentUser.id,
                    cbResponce: true,
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        let {name, id, cbResponce} = this.state
        if(cbResponce){
            return(
                <div className="container text-center"> 
                    <h1 className="my-3">hello {name}</h1>
                    <NoteButton/>
                    <AllPost userId={id}/>
                </div>
         
            )
        }

        return(<div className="test"><Loading type="bubbles" color="#000000"/></div>)
    }


}

export default UserPosts