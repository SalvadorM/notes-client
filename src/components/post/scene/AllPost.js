import React,{Component} from 'react'
import Loading from '../form/loading'

import {getAllUserPost} from '../functions'
import RenderCardPost from '../form/postCardForm'

class AllPost extends Component{

    constructor(props){
        super(props)
        this.state = {
            post: [],
            userId: '',
            cbResponce: false,
        }
    }

    componentDidMount(){
    
        const userId = this.props.userId
        getAllUserPost(userId)
            .then(user => {
                this.setState({
                    post: user.data,
                    cbResponce: true
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        let {post, cbResponce} = this.state

        if(cbResponce){
            let posts = post.map(post => {
                return(<RenderCardPost key={post.id} post={post} />);
            })

            return(<div className="row">{posts}</div>)
        }
        return(<div className="test"><Loading type="bubbles" color="#000000"/></div>)
    }

}

export default AllPost