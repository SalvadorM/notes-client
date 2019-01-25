import React, {Component} from 'react'

import CommentView from  '../form/commentRender'

class PostComments extends Component {

    render(){

        const comments = this.props.comments
        let AllComments = <h2>No Comments</h2>
        
        if(comments.length !== 0) {
            AllComments = comments.map(comment => {
                return <CommentView comment={comment} key={comment.id} />
            })
    
        }
        return(
            <div>
                {AllComments} 
            </div>
        )
    }
}

export default PostComments