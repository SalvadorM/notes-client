import React from 'react'

const RenderPost = (props) => {
    const note = props.post
    const username = props.username

    return(<div className="container w-75 mt-5">
        <div className="text-center">
        <div className="card-body">

            <h2>{note.title}</h2>
            <p className="text-muted">content:</p>
            <p className="py-6 card-text font-weight-light">{note.body}</p>
            <p className="card-footer mt-2 text-muted float-left">Upload by {username}</p>
        </div>
        </div>
    </div>)
}

export default RenderPost
