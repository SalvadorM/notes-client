import React, {Component} from 'react'
import {getUserById} from '../functions'
import UserComment from './userComment';
import Loading from './loading';

class CommentView extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInfo: [],
            cbResponce: false
        }
    }

    componentDidMount(){
        const userId = this.props.comment.userId
        console.log(userId)
        getUserById(userId)
            .then(user =>{
                this.setState({
                    userInfo: user.data,
                    cbResponce: true
                })
            })
            .catch(err => console.log(err))
    }   
    render(){

        const {userInfo, cbResponce} = this.state
        let comment = this.props.comment

        if(cbResponce){
            console.log(userInfo)
            return(
                <UserComment user={userInfo} comment={comment}/>
            )
        }
       
        return(<div className="test"><Loading type="bubbles" color="#000000"/></div>)
    }

}

export default CommentView