import React from 'react'
import {Link} from 'react-router-dom'


const NoteButton = () => {
    return(<Link className="btn btn-info" to="/post/new">Post a note</Link>)
}

export default NoteButton