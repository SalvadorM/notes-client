import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import Auth from './auth'

export const PrivateRoute = ({component: Component, ...rest }) => {
    return(
        <Route {...rest} render={props => 
        Auth.getlocalstorage('isAuthenticated') ? (<Component {...props}/>) : 
                               ( <Redirect 
                                    to={{
                                        pathname: "/login",
                                        state: { from: props.location}
                                    }}
                                />)
        }
        />
    )
}