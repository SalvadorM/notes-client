import React, {Component} from 'react'
import { Redirect } from 'react-router'

import {createPost} from '../functions'

class PostForm extends Component {
    constructor(){
        super()
        this.state = {
            client: {
                title: '',
                body: '',
            },
            cbResponce: false,
            cancel: false,
        }
    }

    onChange(e){
        const client = this.state.client
        const field = e.target.name
        client[field] = e.target.value
   
        this.setState({ client })
    }

    onSubmit(e){
        e.preventDefault()

        const {client} = this.state

        createPost(client)
            .then(post => {
                this.setState({cbResponce: true})
            })
            .catch(err => console.log(err))
    }

    cancel(e){
        this.setState({cancel: true})
    }

    render(){

        //if there is any text in the text area, then we can change the way we handle a cancel click
        const {cbResponce, cancel} = this.state
        if(cbResponce || cancel){
           return <Redirect to='/user'/>
        }

    
        return(
            <div className="container middle text-center">
            <form className="form-group" name="post" onSubmit={ (e) => this.onSubmit(e)}>
            <div className="">

                <h1>New Note</h1>
                <label className="">Name your title</label>
                <input name="title" 
                       className="form-control w-50"
                       type="text"
                       onChange = { (e) => this.onChange(e) }
                       required
                       ></input>

                <label className="">Body</label>
                <textarea name="body" 
                       className="form-control form-control-lg w-75"
                       type="text"
                       rows="3"
                       onChange = { (e) => this.onChange(e)}
                       required
                       ></textarea>
                <br></br>
            </div >

            <button type="submit" className="btn btn-primary mt-3">Create Note</button>
            <button type="button" 
                        className="btn btn-outline-danger mt-3 ml-2" 
                        onClick={(e) => this.cancel(e)}>
                        cancel
                        </button>
            </form>
            </div>)
    }
}

export default PostForm