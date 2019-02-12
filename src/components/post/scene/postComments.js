import React, {Component} from 'react'

import CommentView from  '../form/commentRender'

class PostComments extends Component {

    render(){

        const comments = this.props.comments
        let AllComments = <p>No Comments</p>
        
        if(comments.length !== 0) {
            AllComments = comments.map(comment => {
                return <CommentView comment={comment} key={comment.id} />
            })
    
        }
        return(
            <div className="container text-center">
                {AllComments} 
            </div>
        )
    }
}

export default PostComments