import React from 'react'

const RenderPost = (props) => {
    const note = props.post
    const username = props.username

    return(<div className="container w-75 mt-5">
        <div className="border rounded border-dark text-center">
        <div className="card-body">
            <h2>{note.title}</h2>
            <hr className="hrstyle"></hr>
            <p className="mt-2 card-font font-weight-light">{note.body}</p>
            <p className="card-footer mt-2 text-muted">Upload by {username}</p>
        </div>
        </div>
    </div>)
}

export default RenderPost
