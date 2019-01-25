import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({type, color}) => {
   return <ReactLoading type={type} color={color} width={'30%'} height={'auto'} className={'loading'}/>
}


export default Loading