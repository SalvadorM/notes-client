import React,{Component} from 'react'
import Loading from '../form/loading'

import {getPostById, getUserById} from '../functions'
import RenderPost from '../form/postRender'
import Comments from './Comments'

class Post extends Component{

    constructor(props){
        super(props)
        this.state = {
            post: [],
            username: '',
            cbResponce: false,
        }
    }

    async componentDidMount(){
     
        try{
            const postId = this.props.match.params.id
            const post = await getPostById(postId)
            const userInfo = await getUserById(post.data.userId)

            this.setState({
                post: post.data,
                username: userInfo.data.username,
                cbResponce: true
            })
    
        }
        catch(err) {
            console.log(err)
        }



    }

    render(){
        let {post, cbResponce, username} = this.state
        
        if(cbResponce){
            return(
            <div>
                <RenderPost post={post} username={username}/>
                <Comments postId={post.id} />
            </div>)
        }
        return(<div className="test"><Loading type="bubbles" color="#000000"/></div>)
    }

}

export default Post