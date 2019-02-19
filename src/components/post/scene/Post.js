import React,{Component} from 'react'
import Loading from '../form/loading'

import {getPostById, getUserById} from '../functions'
import RenderPost from '../form/postRender'
import Comments from './Comments'
import UserCard from '../form/userCard';

class Post extends Component{

    constructor(props){
        super(props)
        this.state = {
            post: [],
            userInfo: '',
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
                userInfo: userInfo.data,
                cbResponce: true
            })
    
        }
        catch(err) {
            console.log(err)
            throw err
        }



    }

    render(){
        let {post, cbResponce, userInfo} = this.state
        
        if(cbResponce){
            return(
            <div>
                <UserCard userInfo={userInfo} createdAt={post.createdAt}/>
                <RenderPost post={post} userInfo={userInfo}/>
                <Comments postId={post.id} />
            </div>)
        }
        return(<div className="test"><Loading type="bubbles" color="#000000"/></div>)
    }

}

export default Post