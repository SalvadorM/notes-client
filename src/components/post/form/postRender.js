import React from 'react'

const RenderPost = (props) => {
    const note = props.post
    return(<div className="container w-75">
        <div className="text-center">
        <div className="note-container shadow p-3 mb-5 rounded">

            <h1>{note.title}</h1>
            <p className="py-6 card-text font-weight-light">{note.body}</p>
        </div>
        </div>
    </div>)
}

export default RenderPost
