import React, {Component} from 'react'

import {postCommment} from '../functions'


class CommentForm extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            inputValue: '',
        }
    }

    onChange(e){
        let {body, inputValue} = this.state
        body = e.target.value
        inputValue = e.target.value
        this.setState({body, inputValue})
    }

    onSubmit(e){
        e.preventDefault()

        const postId = this.props.postId
        const commentBody = this.state.body

        let newComment = {postId, commentBody}

        postCommment(newComment)
            .then(comment => {
                this.setState({
                    body: '',
                    inputValue: ''
                })
                this.props.action()
            })
            .catch(err => console.log(err))

    }
    render(){
        const {inputValue} = this.state
        return(<div className="">
                <div className="mt-4">
                <div className="row">  
                    <div className="col-12"> 
                    <input className="form-control comment-box"
                           onChange = { (e) => this.onChange(e)}
                           value={inputValue}
                           required></input></div>
                    <div className="col-12 text-center"><button className="btn btn-primary" type="submit" onClick={(e) => this.onSubmit(e)}>Comment</button></div>
        
                </div>
                </div>

        </div>)
    }
}

export default CommentForm