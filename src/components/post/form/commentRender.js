import React, {Component} from 'react'


class CommentView extends Component {

    render(){
        let comment = this.props.comment
        return( 
        <div  className="border rounded my-3 w-75">
            <p className="">{comment.body}</p>
        </div>)
    }

}

export default CommentView