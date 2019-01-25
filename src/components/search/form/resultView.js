import React from 'react'
import {Link} from 'react-router-dom'


const ResultView = (props) => {
    const result = props.result 
    const URL = '/post/' + result.id

    let date =  result.updatedAt.substr(0,10);
    return (
        <div className="card my-3">
        <h4>Title: <Link to={URL}>{result.title}</Link></h4>
        <p>last update: {date}</p>
      </div>
    )
}

export default ResultView