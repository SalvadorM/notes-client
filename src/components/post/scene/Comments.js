import React, {Component} from 'react'
import CommentForm from '../form/CommentForm'
import PostComments from '../scene/postComments'

import {getAllPostComments} from '../functions'


class Comments extends Component {
    constructor(props){
        super(props)

        this.state = {
            commentPosted: false,
            comments: []
        }   

        this.newComment = this.newComment.bind(this)
    }

    newComment(){
        const postId = this.props.postId
        getAllPostComments(postId)
            .then(comments => {
                this.setState({comments: comments.data})
            })
    }

    async componentDidMount(){
        try{
            const postId = this.props.postId
            const comments = await getAllPostComments(postId)
            this.setState({comments: comments.data})
        }
        catch(err) {
            console.log(err)
            throw(err)
        }
    }

    render(){

        const postId = this.props.postId
        const {comments} = this.state
        return(
        <div className="container py-5 ">
            <div><CommentForm postId={postId} action={this.newComment} /></div>
            <div><PostComments postId={postId} comments={comments} /></div>
        </div>)
    }
}

export default Comments