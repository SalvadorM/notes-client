import React from 'react'



const Greetings = (props) => {
    console.log(props)
    let name = props.username
    return(
        <div>
             <h1 className="">Welcome {name}</h1>
        </div>
    )
}

export default Greetings