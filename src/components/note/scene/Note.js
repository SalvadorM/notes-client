import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NoteHub extends Component{
    render(){
        return(
            <div className="page text-center">
                <Link className="btn btn-primary m-2" to="/search">Search post</Link>
                <Link className="btn btn-primary m-2" to="/post/new">Post a note</Link>
            </div>
        )
    }
}

export default NoteHub