import React, {Component} from 'react'

import {postCommment} from '../functions'


class CommentForm extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            inputValue: ''
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

        return(<div>
                  <div className="w-50 mt-4">
                <form onSubmit={(e) => this.onSubmit(e)}>
            
               
                    <input className="form-control"
                           onChange = { (e) => this.onChange(e)}
                           value={this.state.inputValue}
                           required></input>
               
        
                    <button className="btn btn-primary"
                            type="submit">Comment
                    </button>
               
                
                </form>
                </div>

        </div>)
    }
}

export default CommentForm