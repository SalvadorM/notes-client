import React, {Component} from 'react'

import AllPost from './AllPost'


class Username extends Component {

    componentDidMount(){
        console.log(this.props.match.params.value)
    }
    
    render(){


        return(
            <div>
                <h1>other user profile</h1>
            </div>
        )
    }
}

export default Username